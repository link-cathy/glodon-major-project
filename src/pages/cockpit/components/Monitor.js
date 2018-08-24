/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class Monitor extends Component {

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
            <Card className="card" title={messages.homePage.videoMonitor} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">视频监控</CardTitle> */}
                {/* <CardBody className="card-body"> */}
                {/* <div> */}
                {/* <div className="vedioitem" id="vedio_monitoring1"> */}
                {/* <video src={require('../../../resource/video/office_20180331.mp4')} controls="controls" muted loop="loop" style={{width: '214px', height: '120px', padding: '0 0px'}}> */}
                {/* 您的浏览器不支持 video 标签。 */}
                {/* </video> */}
                {/* </div> */}
                {/* <div className="vedioitem" id="vedio_monitoring2"> */}
                {/* <video id="monitor2" src={require('../../../resource/video/site2_20180331.mp4')} muted controls="controls"  loop="loop" style={{width: '214px', height: '120px;padding: 0 0px'}}> */}
                {/* 您的浏览器不支持 video 标签。 */}
                {/* </video> */}
                {/* </div> */}
                {/* </div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default Monitor;