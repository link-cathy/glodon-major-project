/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'


class SafetyChart extends Component {

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

    render() {
        return (
            <Card className="card" id="safe_module" title={messages.homePage.safety} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">安全</CardTitle> */}
                {/* <CardBody className="card-body" style={{paddingTop:'0px !important', height: '164px'}}> */}

                {/* <div className="pie-chart"> */}
                {/* <div id="safe" style={{width: '140px', height: '140px'}}></div> */}
                {/* <div className="label"> */}
                {/* <span type="label"> */}
                {/* 未销项隐患 */}
                {/* </span> */}
                {/* <span type="value" id="unSloveDanger"> */}
                {/* 16 */}
                {/* </span> */}
                {/* <span type="label"> */}
                {/* 个 */}
                {/* </span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="bar-chart"> */}
                {/* <div className="bar-item importantDanger" > */}
                {/* <div className="header"> */}
                {/* <span className="left"> 紧要隐患 </span> */}
                {/* <span className="right"><span id="importantDanger">0</span>  个 </span> */}
                {/* </div> */}
                {/* <div className="body"> */}
                {/* <div className="shared-horizontal-bar" style={{height: '3px', width: '100px'}}> */}
                {/* <div style={{display: 'none', width: '25%', background: 'rgb(254, 61, 61)', borderRadius: '1.5px 0px 0px 1.5px'}}> */}

                {/* </div> */}
                {/* <div style={{width: '100%', background: 'rgba(160, 160, 160, 0.4)', borderRadius: '0px 1.5px 1.5px 0px'}}> */}

                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="footer" id="percentage_important_hidden"> 0% </div> */}

                {/* </div> */}
                {/* <div className="bar-item seriousDanger"> */}
                {/* <div className="header"> */}
                {/* <span className="left"> 严重隐患 </span> */}
                {/* <span className="right"><span id="seriousDanger">0</span> 个 </span> */}
                {/* </div> */}
                {/* <div className="body"> */}
                {/* <div className="shared-horizontal-bar" style={{height: '3px', width: '100px'}}> */}
                {/* <div style={{display: 'none', width: '25%', background: 'rgb(246, 198, 68)', borderRadius: '1.5px 0px 0px 1.5px'}}> */}

                {/* </div> */}
                {/* <div style={{width: '100%', background: 'rgba(160, 160, 160, 0.4)', borderRadius: '0px 1.5px 1.5px 0px'}}> */}

                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="footer" id="percentage_serious_hidden"> 0% </div> */}
                {/* </div> */}
                {/* </div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default SafetyChart;