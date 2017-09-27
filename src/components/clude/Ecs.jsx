import React from 'react';
import { Row, Col, Card , Button } from 'antd';
import clude from '@/style/imgs/clude.png';
const Ecs = () => (
  <div className="gutter-example">
    <style>{`
      .gutter-example .ant-row > div {
        background: transparent;
        border: 0;
        padding: 8px 10px;
      }
    `}
    </style>
    <Row gutter={16}>
      <Col span={10} className="gutter-row">
          <Card bordered={false}>
            <Col md={14} className="gutter-row">
              <h3>安全预警</h3>
              <p style={{ color: '#999999', fontSize: 16 , fontWeight: 500, textAlign: 'center', marginBottom: 2}}>您尚未开通安全预警</p>
              <div style={{ textAlign: 'center', position: 'relative'}}>
                <img src={clude} alt="clude" />
                <div>
                  <Button style={{textAlign: 'center', borderColor: '#00C1DE', color: '#00C1DE' }}>免费开通云盾态势感知</Button>
                </div>
              </div>
              
            </Col>
            <Col md={10} className="gutter-row">
              <h3>安全防护</h3>
            </Col>
          </Card>

      </Col>
      <Col span={6} className="gutter-row">
          <Card bordered={false}>
            <h3>代办事项</h3>
          </Card>
      </Col>
      <Col span={8} style={{ background: '' }} className="gutter-row">
          <Card bordered={false}>
            <h3>安全预警</h3>
          </Card>
      </Col>
    </Row>
  </div>
)

export default Ecs