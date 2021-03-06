/**
 * Created by hao.cheng on 2017/4/13.
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderCustom extends Component {
	state = {
		collapsed: false,
		mode: 'inline',
		openKey: '',
		selectedKey: '',
		firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
	};
	componentDidMount() {
		this.setMenuOpen(this.props);
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.onCollapse(nextProps.collapsed);
		this.setMenuOpen(nextProps)
	}
	setMenuOpen = props => {
		const { path } = props;
		this.setState({
			openKey: path.substr(0, path.lastIndexOf('/')),
			selectedKey: path
		});
	};
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({
			collapsed,
			firstHide: collapsed,
			mode: collapsed ? 'vertical' : 'inline',
		});
	};
	menuClick = e => {
		this.setState({
			selectedKey: e.key
		});
		console.log(this.state);
		const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
		popoverHide && popoverHide();
	};
	openMenu = v => {
		console.log(v);
		this.setState({
			openKey: v[v.length - 1],
			firstHide: false,
		})
	};
	render() {
		return (
			<Sider
				trigger={null}
				breakpoint="lg"
				collapsed={this.props.collapsed}
				style={{ overflowY: 'auto' }}
			>
				<div className="logo" />
				<Menu
					onClick={this.menuClick}
					theme="dark"
					mode="inline"
					selectedKeys={[this.state.selectedKey]}
					openKeys={this.state.firstHide ? null : [this.state.openKey]}
					onOpenChange={this.openMenu}
				>
					<Menu.Item key="/app/dashboard/index">
						<Link to={'/app/dashboard/index'}><Icon type="mobile" /><span className="nav-text">管理控制台</span></Link>
					</Menu.Item>
					<SubMenu
						key="/app/ui1"
						title={<span><Icon type="cloud" /><span className="nav-text">云计算基础服务</span></span>}
					>
						<Menu.Item key="/app/ui/buttons"><Link to={'/app/clude/ecs'}>云服务器ECS</Link></Menu.Item>
						<Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>云数据库RDS版</Link></Menu.Item>
						<Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>负载均衡</Link></Menu.Item>
						<Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>CDN</Link></Menu.Item>
						<Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>云数据库Redis版</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/ui2"
						title={<span><Icon type="line-chart" /><span className="nav-text">大数据（数加）</span></span>}
					>

						<Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>数加控制台概览</Link></Menu.Item>
						<Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>数据集成</Link></Menu.Item>
						<Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>阿里云Elasticsearch</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/ui3"
						title={<span><Icon type="api" /><span className="nav-text">安全（云盾）</span></span>}
					>
						<Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>DDoS高防IP</Link></Menu.Item>
						<Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>Web应用防火墙</Link></Menu.Item>
						<Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>安骑士（服务器安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>CA证书服务（数据安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>移动安全（应用安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/tabs"><Link to={'/app/ui/tabs'}>数据库审计（数据库安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/banners"><Link to={'/app/ui/banners'}>加密服务（数据安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/wysiwyg"><Link to={'/app/ui/wysiwyg'}>数据风控（业务安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/drags"><Link to={'/app/ui/drags'}>内容安全（业务安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>态势感知（大数据安全）</Link></Menu.Item>
						<Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>堡垒机（安全管理）</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/ui4"
						title={<span><Icon type="global" /><span className="nav-text">域名与网站（万网）</span></span>}
					>
						<Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>域名</Link></Menu.Item>
						<Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>云解析 DNS</Link></Menu.Item>
						<Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>云虚拟主机</Link></Menu.Item>
						<Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>企业邮箱</Link></Menu.Item>
						<Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>标准建站</Link></Menu.Item>
						<Menu.Item key="/app/ui/tabs"><Link to={'/app/ui/tabs'}>弹性web托管</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/ui5"
						title={<span><Icon type="cloud-o" /> <span className="nav-text">云市场</span></span>}
					>
						<Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>云市场</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/ui"
						title={<span><Icon type="scan" /><span className="nav-text">UI</span></span>}
					>

						<Menu.Item key="/app/ui/buttons"><Link to={'/app/ui/buttons'}>按钮</Link></Menu.Item>
						<Menu.Item key="/app/ui/icons"><Link to={'/app/ui/icons'}>图标</Link></Menu.Item>
						<Menu.Item key="/app/ui/spins"><Link to={'/app/ui/spins'}>加载中</Link></Menu.Item>
						<Menu.Item key="/app/ui/modals"><Link to={'/app/ui/modals'}>对话框</Link></Menu.Item>
						<Menu.Item key="/app/ui/notifications"><Link to={'/app/ui/notifications'}>通知提醒框</Link></Menu.Item>
						<Menu.Item key="/app/ui/tabs"><Link to={'/app/ui/tabs'}>标签页</Link></Menu.Item>
						<Menu.Item key="/app/ui/banners"><Link to={'/app/ui/banners'}>轮播图</Link></Menu.Item>
						<Menu.Item key="/app/ui/wysiwyg"><Link to={'/app/ui/wysiwyg'}>富文本</Link></Menu.Item>
						<Menu.Item key="/app/ui/drags"><Link to={'/app/ui/drags'}>拖拽</Link></Menu.Item>
						<Menu.Item key="/app/ui/gallery"><Link to={'/app/ui/gallery'}>画廊</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/animation"
						title={<span><Icon type="rocket" /><span className="nav-text">动画</span></span>}
					>

						<Menu.Item key="/app/animation/basicAnimations"><Link to={'/app/animation/basicAnimations'}>基础动画</Link></Menu.Item>
						<Menu.Item key="/app/animation/exampleAnimations"><Link to={'/app/animation/exampleAnimations'}>动画案例</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/table"
						title={<span><Icon type="copy" /><span className="nav-text">表格</span></span>}
					>

						<Menu.Item key="/app/table/basicTable"><Link to={'/app/table/basicTable'}>基础表格</Link></Menu.Item>
						<Menu.Item key="/app/table/advancedTable"><Link to={'/app/table/advancedTable'}>高级表格</Link></Menu.Item>
						<Menu.Item key="/app/table/asynchronousTable"><Link to={'/app/table/asynchronousTable'}>异步表格</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/form"
						title={<span><Icon type="edit" /><span className="nav-text">表单</span></span>}
					>

						<Menu.Item key="/app/basicForm"><Link to={'/app/form/basicForm'}>基础表单</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/chart"
						title={<span><Icon type="area-chart" /><span className="nav-text">图表</span></span>}
					>
						<Menu.Item key="/app/chart/echarts"><Link to={'/app/chart/echarts'}>echarts</Link></Menu.Item>
						<Menu.Item key="/app/chart/recharts"><Link to={'/app/chart/recharts'}>recharts</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="sub4"
						title={<span><Icon type="switcher" /><span className="nav-text">页面</span></span>}
					>
						<Menu.Item key="/login"><Link to={'/login'}>登录</Link></Menu.Item>
						<Menu.Item key="/404"><Link to={'/404'}>404</Link></Menu.Item>
					</SubMenu>
					<SubMenu
						key="/app/auth"
						title={<span><Icon type="safety" /><span className="nav-text">权限管理</span></span>}
					>
						<Menu.Item key="/app/auth/basic"><Link to={'/app/auth/basic'}>基础演示</Link></Menu.Item>
						<Menu.Item key="/app/auth/routerEnter"><Link to={'/app/auth/routerEnter'}>路由拦截</Link></Menu.Item>
					</SubMenu>
				</Menu>
				<style>
					{`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
				</style>
			</Sider>
		)
	}
}

export default SiderCustom;