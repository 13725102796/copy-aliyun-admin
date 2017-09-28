import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import clude from '@/style/imgs/clude.png';
import CardBtn from './CardBtn'

const bodyStyle = {
  height: 200,
  padding: 15
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
    `}
    </style>
    <Row gutter={16}>
      <Col span={10} className="gutter-row">
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
            <CardBtn pTxt="WEB攻击" spanTxt="购买网络安全" spanColor="#1DBBD8" height="60px"/>
          </Col>
        </Card>

      </Col>
      <Col span={6} className="gutter-row">
        <Card bordered={false} bodyStyle={bodyStyle}>
          <h3>代办事项</h3>
          <CardBtn pTxt="工单" iTxt="0"  height="40px" />
          <CardBtn pTxt="续费" iTxt="0"  height="40px" />
          <CardBtn pTxt="未支付订单" iTxt="0"  height="40px" />
        </Card>
      </Col>
      <Col span={8} style={{ background: '' }} className="gutter-row">
        <Card bordered={false} bodyStyle={bodyStyle}>
          <h3>安全预警</h3>
        </Card>
      </Col>
    </Row>
  </div>
)

export default Ecs