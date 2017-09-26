/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover, Input } from 'antd';
import screenfull from 'screenfull';
import { gitOauthToken, gitOauthInfo } from '../axios';
import { queryString } from '../utils';
import avater from '../style/imgs/b1.jpg';
import SiderCustom from './SiderCustom';
import { connect } from 'react-redux';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class HeaderCustom extends Component {
	state = {
		user: '',
		visible: false,
	};
	componentDidMount() {
		const QueryString = queryString();
		// if (QueryString.hasOwnProperty('code')) {
		//     console.log(QueryString);
		//     const _user = JSON.parse(localStorage.getItem('user'));
		//     !_user && gitOauthToken(QueryString.code).then(res => {
		//         console.log(res);
		//         gitOauthInfo(res.access_token).then(info => {
		//             this.setState({
		//                 user: info
		//             });
		//             localStorage.setItem('user', JSON.stringify(info));
		//         });
		//     });
		//     _user && this.setState({
		//         user: _user
		//     });
		// }
		const _user = JSON.parse(localStorage.getItem('user')) || '测试';
		if (!_user && QueryString.hasOwnProperty('code')) {
			gitOauthToken(QueryString.code).then(res => {
				gitOauthInfo(res.access_token).then(info => {
					this.setState({
						user: info
					});
					localStorage.setItem('user', JSON.stringify(info));
				});
			});
		} else {
			this.setState({
				user: _user
			});
		}
	};
	screenFull = () => {
		if (screenfull.enabled) {
			screenfull.request();
		}

	};
	menuClick = e => {
		console.log(e);
		e.key === 'logout' && this.logout();
	};
	logout = () => {
		localStorage.removeItem('user');
		this.props.router.push('/login')
	};
	popoverHide = () => {
		this.setState({
			visible: false,
		});
	};
	handleVisibleChange = (visible) => {
		this.setState({ visible });
	};
	render() {
		const { responsive, path } = this.props;
		return (
			<Header style={{ background: '#fff', padding: 0, height: 65 }} className="custom-theme" >
				{
					responsive.data.isMobile ? (
						<Popover content={<SiderCustom path={path} popoverHide={this.popoverHide} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
							<Icon type="bars" className="trigger custom-trigger" />
						</Popover>
					) : (
							<Icon
								className="trigger custom-trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.props.toggle}
							/>
						)
				}
				<Search
							placeholder="input search text"
							style={{ width: 200 }}
							onSearch={value => console.log(value)}
				/>
				<Menu
					mode="horizontal"
					style={{ lineHeight: '64px', float: 'right' }}
					onClick={this.menuClick}
				>
					
						
					
					<Menu.Item key="1">
						<Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
							<Icon type="notification" />
						</Badge>
					</Menu.Item>
					<SubMenu title="费用">
						<Menu.Item>充值</Menu.Item>
						<Menu.Item>订单</Menu.Item>
						<Menu.Item>发票</Menu.Item>
						<Menu.Item>消费记录</Menu.Item>
						<Menu.Item>续费管理</Menu.Item>
					</SubMenu>
					<SubMenu title="工单">
						<Menu.Item>我的工单</Menu.Item>
						<Menu.Item>提交工单</Menu.Item>
					</SubMenu>
					<SubMenu title="备案">
						<Menu.Item>备案服务号申请</Menu.Item>
						<Menu.Item>备案服务号管理</Menu.Item>
						<Menu.Item>备案专区</Menu.Item>
						<Menu.Item>IPC备案系统</Menu.Item>
					</SubMenu>
					<SubMenu title="支持">
						<Menu.Item>帮助与文档</Menu.Item>
						<Menu.Item>提交建议</Menu.Item>
						<Menu.Item>论坛</Menu.Item>
						<Menu.Item>博客</Menu.Item>
					</SubMenu>
					<SubMenu title={<span className="avatar"><img src={avater} alt="头像" /><i className="on bottom b-white" /></span>}>
						<MenuItemGroup title={<p><Icon type="user" style={{ marginRight: '10' }} />用户管理</p>}>
							<Menu.Item key="setting:1">你好 - {this.props.user.userName}</Menu.Item>
							<Menu.Item key="setting:2">基本资料</Menu.Item>
							<Menu.Item key="setting:3">实名认证</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title={<p><Icon type="setting" style={{ marginRight: '10' }} />设置中心</p>} >
							<Menu.Item key="setting:4">个人设置</Menu.Item>
							<Menu.Item key="setting:5">系统设置</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title={<p><Icon type="team" style={{ marginRight: '10' }} />会员中心</p>}>
							<Menu.Item key="setting:6">会员权益</Menu.Item>
							<Menu.Item key="setting:7">会员积分</Menu.Item>
							<Menu.Item key="setting:8">云大使管理</Menu.Item>
						</MenuItemGroup>
						<Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
					</SubMenu>
					
				</Menu>
				<style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
			</Header>
		)
	}
}

const mapStateToProps = state => {
	const { responsive = { data: {} } } = state.httpData;
	return { responsive };
};

export default connect(mapStateToProps)(HeaderCustom);