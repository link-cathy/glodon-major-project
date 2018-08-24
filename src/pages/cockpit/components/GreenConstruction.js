/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class GreenConstruction extends Component {

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
            <Card className="card" title={messages.homePage.greenConstructionMonitorData} style={{ height: '240px' }}>
                {/* <CardTitle className="card-title">绿色施工监管数据</CardTitle> */}
                {/* <CardBody className="card-body"> */}
                {/* <table className="greentable"> */}
                {/* <tbody> */}
                {/* <tr> */}
                {/* <td> */}
                {/* <span id="weather-wind-level" className="div-info-item item2">风力2级</span> */}
                {/* </td> */}
                {/* <td> */}
                {/* <span id="weather-temperature" className="div-info-item item3">23℃</span> */}
                {/* </td> */}
                {/* <td> */}
                {/* <span id="weather-humidity" className="div-info-item item4">67%</span> */}
                {/* </td> */}
                {/* </tr> */}
                {/* <tr> */}
                {/* <td> */}
                {/* <span className="div-info-item item5"> */}
                {/* <span id="weather-pm25" style={{width: '75px', textAlign: 'left'}}> */}
                {/* 35 */}
                {/* </span> */}
                {/* <span style={{fontSize:'12px'}}> */}
                {/* μg/m³ */}
                {/* </span> */}
                {/* </span> */}
                {/* </td> */}
                {/* <td> */}
                {/* <span className="div-info-item item6"> */}
                {/* <span id="weather-pm10" style={{width: '44px', textAlign: 'left'}}> */}
                {/* 78 */}
                {/* </span> */}
                {/* <span style={{fontSize:'12px'}}> */}
                {/* μg/m³ */}
                {/* </span> */}
                {/* </span> */}
                {/* </td> */}
                {/* <td> */}
                {/* <span id="weather-noise" className="div-info-item item7">45dB</span> */}
                {/* </td> */}
                {/* </tr> */}
                {/* </tbody> */}

                {/* </table> */}

                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default GreenConstruction;