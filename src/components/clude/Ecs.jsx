import React from 'react';
import { Row, Col, Card, Button, Tabs, Collapse } from 'antd';
import clude from '@/style/imgs/clude.png';
import CardBtn from './CardBtn';
import '@/style/esc.less';

// tab切换
const TabPane = Tabs.TabPane;
const tabBarStyle = {

}

// 折叠面板
const Panel = Collapse.Panel;

const tabContents = [
  { title: '全部公告', content: [{ id: '1', text: '（已更新）阿里云镜像变更通知' }, { id: '2', text: '阿里云2017年国庆中秋假期纸质发票暂停邮寄通知' }, { id: '3', text: '阿里云2017年国庆中秋假期服务通知' }, { id: '4', text: '阿里云2017年国庆中秋假期服务通知' }, { id: '5', text: '阿里云2017年国庆中秋假期服务通知' }, { id: '6', text: '阿里云2017年国庆中秋假期服务通知' }], key: '1' },
  { title: '云产品', content: [{ id: '1', text: '（已更新）阿里云镜像变更通知' }, { id: '2', text: '9月28日按量付费类型ECS实例支持秒级计费通知' }, { id: '3', text: '10月15日金融云经典网络VPN客户端升级通知' }], key: '2' },
  { title: '域名和网站', content: [{ id: '1', text: '9月29日Donuts注册局维护通知' }, { id: '2', text: '9月27日Uniregistry注册局紧急维护通知' }, { id: '3', text: '9月19日VIP系统定期维护通知' }], key: '3' },
  { title: '备案', content: [{ id: '1', text: 'ECS产品备案策略调整通知' }, { id: '2', text: '集中清理备案信息不准确或虚假备案的通知' }, { id: '3', text: '关于开展2017年全国网站备案信息准确性抽样核查工作xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }], key: '4' },
]



const bodyStyle = {
  height: 200,
  padding: 12
}
const tabStyle = {
  minHeight: 200,
  padding: '3px 15px',
}

const Ecs = () => (
  <div className="gutter-example">
    <div className="left-box">
      <Row gutter={16}>
        <Col span={14} className="gutter-row">
          <Card bordered={false} bodyStyle={bodyStyle}>
            <Col md={14} className="gutter-row">
              <h3>安全预警</h3>
              <p style={{ color: '#999999', fontSize: 16, fontWeight: 500, textAlign: 'center', marginBottom: 2 }}>您尚未开通安全预警</p>
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <img src={clude} alt="clude" />
                <div className="btn-position">
                  <Button style={{ textAlign: 'center', borderColor: '#00C1DE', color: '#00C1DE', opacity: '1' }}>免费开通云盾态势感知</Button>
                </div>
              </div>
            </Col>
            <Col md={10} className="gutter-row">
              <h3>安全防护</h3>
              <CardBtn pTxt="主机安全" spanTxt="件" iTxt="3" height="60px" />
              <CardBtn pTxt="WEB攻击" spanTxt="购买网络安全" spanColor="#1DBBD8" height="60px" />
            </Col>
          </Card>
        </Col>
        <Col span={10} className="gutter-row">
          <Card bordered={false} bodyStyle={bodyStyle}>
            <h3>代办事项</h3>
            <CardBtn pTxt="工单" iTxt="0" height="40px" />
            <CardBtn pTxt="续费" iTxt="0" height="40px" />
            <CardBtn pTxt="未支付订单" iTxt="0" height="40px" />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Card bordered={false} bodyStyle={tabStyle}>
            <div className="tab-contain">
              <Tabs defaultActiveKey="2" tabBarStyle={tabBarStyle}>
                <TabPane tab="我的资源" key="1">
                  <div className="resource">
                    <Col md={8}>
                      <ul className="res-body">
                        <li>
                          <h2>弹性计算</h2>
                          <p>云服务 ECS <span className="num-color">1</span></p>
                        </li>
                        <li>
                          <h2>网络</h2>
                          <p>CDN</p>
                        </li>
                        <li>
                          <h2>应用服务</h2>
                          <p>协同研发 RDC</p>
                        </li>
                        <li>
                          <h2>云市场</h2>
                          <p>云市场<span className="num-color">1</span></p>
                        </li>
                      </ul>
                    </Col>
                    <Col md={8}>
                      <ul className="res-body">
                        <li>
                          <h2>数据库</h2>
                          <p>云数据库HybridDB for MySQL</p>
                          <p>云数据库 HBase 版</p>
                          <p>云数据库 POLARDB</p>
                          <p>云数据库 HybridDB for PostgreSQL</p>
                          <p>数据传输服务DTS</p>
                        </li>
                        <li>
                          <h2>分析</h2>
                          <p>云数据库 HybridDB for PostgreSQL</p>
                        </li>
                        <Collapse bordered={false}>
                          <Panel header="展开更多产品" key="1">
                            <li>
                              <h2>大数据（数加）</h2>
                              <p>数据集成</p>
                              <p>阿里云Elasticsearch</p>
                            </li>
                            <li>
                              <h2>我的服务</h2>
                              <p>尊享服务</p>
                            </li>
                          </Panel>
                        </Collapse>
                      </ul>
                    </Col>
                    <Col md={8}>
                      <ul className="res-body">
                        <li>
                          <h2>存储与CDN</h2>
                          <p>CDN</p>
                        </li>
                        <li>
                          <h2>监控与管理</h2>
                          <p>云监控</p>
                        </li>
                        <li>
                          <h2>域名与网站（万网）</h2>
                          <p>域名 <span className="num-color">3</span></p>
                          <p>云解析 DNS</p>
                          <p>弹性 Web 托管</p>
                        </li>
                      </ul>
                    </Col>
                  </div>
                  
                </TabPane>
                <TabPane tab="我的消费" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="我的积分" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="我的权益" key="4">Content of Tab Pane 3</TabPane>
                <TabPane tab="云大使" key="5">Content of Tab Pane 3</TabPane>
              </Tabs>
            </div>

          </Card>
        </Col>

      </Row>
    </div>
    <div className="right-box">
      <div className="card-box">
        <Card bordered={false} bodyStyle={tabStyle}>
          <Tabs defaultActiveKey="2" size="small" tabBarStyle={tabBarStyle}>
            {tabContents.map(item => <TabPane tab={item.title} key={item.key}>
              <div style={{ padding: '0px 8px' }}>
                {
                  (item.content.slice(0, 4)).map(text => {
                    return (<div key={text.id}>
                      <a className="text-overflow text-decoration">{text.text}</a>
                    </div>)
                  })

                }
                {item.content.length > 3 ? <a className="text-decoration" style={{ color: '#00C1DE', marginTop: 8, display: 'block' }}>更多</a> : ""}

              </div></TabPane>)}
          </Tabs>
        </Card>
      </div>
      <div className="card-box">
        <Card bordered={false} bodyStyle={tabStyle}>
          <Tabs defaultActiveKey="2" tabBarStyle={tabBarStyle}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
      </div>
    </div>

  </div>
)

export default Ecs