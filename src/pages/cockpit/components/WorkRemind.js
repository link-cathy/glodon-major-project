/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class WorkRemind extends Component {

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
            <Card className="card" title={messages.homePage.workRemind} style={{ height: '324px' }}>
                {/* <CardTitle className="card-title">工作提醒</CardTitle> */}
                {/* <CardBody className="card-body custompadding"> */}
                {/* <Row className="row customheight customcolor1"> */}
                {/* <Col className="col-9">下午例会推迟至15点开始 */}
                {/* <span className="new"> */}
                {/* <a>NEW</a> */}
                {/* </span> */}
                {/* </Col> */}
                {/* <Col className="col-3">2018-04-24</Col> */}
                {/* </Row> */}
                {/* <Row className="row customheight customcolor"> */}
                {/* <Col className="col-9">周五举办项目安全教育培训</Col> */}
                {/* <Col className="col-3">2018-04-23</Col> */}
                {/* </Row> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default WorkRemind;