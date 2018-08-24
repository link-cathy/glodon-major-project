/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class ProgressElement extends Component {

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
            <Card className="card" title={messages.homePage.analysisElementAffectProgress} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">进度影响要素分析</CardTitle> */}
                {/* <CardBody className="card-body custompadding"> */}
                {/* <div className="divplan"> */}
                {/* <a className="divplanitem planitem1 ml20 mt20" href=""> */}
                {/* <div className="planitem"> */}
                {/* <div className="planitem-title green">设计</div> */}
                {/* <div className="planitem-status green">正常</div> */}
                {/* </div> */}
                {/* </a> */}
                {/* <a className="divplanitem planitem2 mt20" href=""> */}
                {/* <div className="planitem"> */}
                {/* <div className="planitem-title green">机械</div> */}
                {/* <div className="planitem-status green">正常</div> */}
                {/* </div> */}
                {/* </a> */}
                {/* <a className="divplanitem planitem3 mt20" href=""> */}
                {/* <div className="planitem"> */}
                {/* <div className="planitem-title green">劳动力</div> */}
                {/* <div className="planitem-status green">正常</div> */}
                {/* </div> */}
                {/* </a> */}
                {/* <a className="divplanitem planitem4 ml20 mt20" href=""> */}
                {/* <div className="planitem"> */}
                {/* <div className="planitem-title green">质量</div> */}
                {/* <div className="planitem-status green">正常</div> */}
                {/* </div> */}
                {/* </a> */}
                {/* <a className="divplanitem planitem5 mt20" href=""> */}
                {/* <div className="planitem"> */}
                {/* <div className="planitem-title green">安全</div> */}
                {/* <div className="planitem-status green">正常</div> */}
                {/* </div> */}
                {/* </a> */}
                {/* <a className="divplanitem planitem6 mt20" href=""> */}
                {/* <div className="planitem"> */}
                {/* <div className="planitem-title green">物资</div> */}
                {/* <div className="planitem-status green">正常</div> */}
                {/* </div> */}
                {/* </a> */}
                {/* </div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default ProgressElement;