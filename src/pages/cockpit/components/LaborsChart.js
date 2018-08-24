/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class LaborsChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        let count = this.state.count
        this.setState({
            count: ++count
        })
    }

    render() {
        return (
            <Card className="card" title={messages.homePage.labors} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">人员</CardTitle> */}
                {/* <CardBody className="card-body custompadding"> */}
                {/* <div id="person" style={{width: '210px', height: '162px', display: 'inline-block'}}></div> */}
                {/* <div style={{width: '75px', display: 'inline-block', position: 'absolute;top: 50px'}}> */}
                {/* <div> */}
                {/* <span className="personcharttip" style={{color:'#3A68FF'}}>42</span>木工</div> */}
                {/* <div> */}
                {/* <span className="personcharttip" style={{color:'#56DFF0'}}>123</span>钢筋工</div> */}
                {/* <div> */}
                {/* <span className="personcharttip" style={{color:'#FFB263'}}>24</span>泥工</div> */}
                {/* <div> */}
                {/* <span className="personcharttip" style={{color:'#C34DC6'}}>89</span>安装工</div> */}
                {/* <div> */}
                {/* <span className="personcharttip" style={{color:'#9D61E3'}}>9</span>焊工</div> */}
                {/* <div> */}
                {/* <span className="personcharttip" style={{color:'#20A2F1'}}>2</span>电工</div> */}
                {/* </div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default LaborsChart;