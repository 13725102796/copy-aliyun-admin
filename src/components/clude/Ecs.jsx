import React from 'react';
import { Row, Col, Card, Button, Tabs } from 'antd';
import clude from '@/style/imgs/clude.png';
import CardBtn from './CardBtn'

// tab切换
const TabPane = Tabs.TabPane;
const tabBarStyle = {

}
const tabContents = [
  { title: '全部公告', content: [{ id: '1', text: '（已更新）阿里云镜像变更通知' }, { id: '2', text: '阿里云2017年国庆中秋假期纸质发票暂停邮寄通知' }, { id: '3', text: '阿里云2017年国庆中秋假期服务通知' },{ id: '4', text: '阿里云2017年国庆中秋假期服务通知' },{ id: '5', text: '阿里云2017年国庆中秋假期服务通知' },{ id: '6', text: '阿里云2017年国庆中秋假期服务通知' }], key: '1' },
  { title: '云产品', content: [{ id: '1', text: '（已更新）阿里云镜像变更通知' }, { id: '2', text: '9月28日按量付费类型ECS实例支持秒级计费通知' }, { id: '3', text: '10月15日金融云经典网络VPN客户端升级通知' }], key: '2' },
  { title: '域名和网站', content: [{ id: '1', text: '9月29日Donuts注册局维护通知' }, { id: '2', text: '9月27日Uniregistry注册局紧急维护通知' }, { id: '3', text: '9月19日VIP系统定期维护通知' }], key: '3' },
  { title: '备案', content: [{ id: '1', text: 'ECS产品备案策略调整通知' }, { id: '2', text: '集中清理备案信息不准确或虚假备案的通知' }, { id: '3', text: '关于开展2017年全国网站备案信息准确性抽样核查工作xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' }], key: '4' },
]



const bodyStyle = {
  height: 200,
  padding: 12
}
const tabStyle = {
  height: 200,
  padding: '3px 15px'
}

const Ecs = () => (
  <div className="gutter-example">
    <style>{`
      .gutter-example .ant-row > div {
        background: transparent;
        border: 0;
        padding: 8px 10px;
      }
      .btn-position { margin-top: -15px; }
      .gridStyle {
        width: 80%,
        textAlign: center,
        margin-left: 10%
      }
      .marginTB {
        padding: 2px 4px;
      }
      h3 {
        padding: 0
      }
      .text-overflow {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        display: block;
        padding: 4px 2px;
        font-size: 13px;
      }
    `}
    </style>
    <Row gutter={16}>
      <Col span={11} className="gutter-row">
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
      <Col span={6} className="gutter-row">
        <Card bordered={false} bodyStyle={bodyStyle}>
          <h3>代办事项</h3>
          <CardBtn pTxt="工单" iTxt="0" height="40px" />
          <CardBtn pTxt="续费" iTxt="0" height="40px" />
          <CardBtn pTxt="未支付订单" iTxt="0" height="40px" />
        </Card>
      </Col>
      <Col span={7} style={{ background: '' }} className="gutter-row">
        <Card bordered={false} bodyStyle={tabStyle}>
          <Tabs defaultActiveKey="2" size="small" tabBarStyle={tabBarStyle}>
            {tabContents.map(item => <TabPane tab={item.title} key={item.key}>
              <div style={{ padding: '0px 8px' }}>
                {                 
                  (item.content.slice(0, 4)).map(text => { 
                  return (<div key={text.id}>
                            <a href="###" className="text-overflow">{text.text}</a>                            
                          </div>) })
                  
                }
                {item.content.length > 3 ? <a href="###" style={{ color: '#00C1DE', marginTop: 8, display: 'block' }}>更多</a> : ""}
                  
              </div></TabPane>)}
          </Tabs>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Ecs