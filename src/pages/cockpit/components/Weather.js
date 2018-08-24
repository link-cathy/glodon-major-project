/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    _handleClick() {
        // this.setState({
        //     count: ++this.state.count
        // })
    }

    getCurrentDateString() {
        let week = [
            '星期日',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六'
        ];
        let currentDate = new Date();
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1 >= 10 ? currentDate.getMonth() + 1 : '0' + (currentDate.getMonth() + 1);
        let day = currentDate.getDate() >= 10 ? currentDate.getDate() : '0' + currentDate.getDate();
        week = week[currentDate.getDay()];
        return year + '年' + month + '月' + day + '日 ' + week;
    }

    render() {
        return (
            <Card className="card" title={this.getCurrentDateString()} style={{ height: '200px' }}>
                {/* <CardTitle className="card-title" id="shownowdate">{this.getCurrentDateString()}</CardTitle> */}
                {/* <CardBody className="card-body"> */}
                {/* <div className="weather"> */}
                {/* <div className="weatheritem"> */}
                {/* <div> */}
                {/* <span id="weather-image" className="dy-image"></span> */}
                {/* </div> */}
                {/* <div id="weather-name" className="showtitle">晴 20℃</div> */}
                {/* </div> */}
                {/* <div className="weatheritem"> */}
                {/* <div style={{paddingBottom: '20px'}}> */}
                {/* <span id="weather-air-status" className="dy-value3">优良</span> */}
                {/* </div> */}
                {/* <div className="showtitle">空气质量</div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default Weather;