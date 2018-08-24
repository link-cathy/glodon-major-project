/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class DeviceInfo extends Component {

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
            <Card className="card" title={messages.homePage.device} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">设备</CardTitle> */}
                {/* <CardBody className="card-body"> */}

                {/* <div className="eq"> */}
                {/* <div className="eqtotal green">6</div> */}
                {/* <div className="eqtotaltitle">在线 (台)</div> */}
                {/* </div> */}
                {/* <div className="eq"> */}
                {/* <div className="eqtotal yellow">0</div> */}
                {/* <div className="eqtotaltitle">离线 (台)</div> */}
                {/* </div> */}
                {/* <div className="eq"> */}
                {/* <div className="eqtotal red">0</div> */}
                {/* <div className="eqtotaltitle">预警 (条)</div> */}
                {/* </div> */}


                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default DeviceInfo;