import React from 'react';
import { Card, Col, Row } from 'antd';
import '@/style/cardBtn.less'
class CardBtn extends React.Component {

  render() {
    return (
      <div className="space">
        <div className="card clearfix" style={{height: this.props.height, lineHeight: this.props.height}}>
          <span className="card-left" >{this.props.pTxt}</span>
          <span className="card-right" style={{ color: this.props.spanColor}}><i style={{color: this.props.iTxt ===  "0" ? '#C0CEDA' : '#f00' }}>{this.props.iTxt}</i>{this.props.spanTxt}</span>         
        </div>
      </div>
    )
  }
}

export default CardBtn