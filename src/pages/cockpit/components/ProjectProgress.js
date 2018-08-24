/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class ProjectProgress extends Component {

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
            <Card className="card" title={messages.homePage.projectProgress} style={{ height: '200px' }} extra={<span style={{ color: 'red' }}>进度正常</span>}>
                {/* <CardTitle className="card-title">项目进度 */}
                {/* <span className="projectstatus">进度提前</span> */}
                {/* </CardTitle> */}
                {/* <CardBody className="card-body"> */}
                {/* <div className="projectplan"> */}
                {/* <div className="projectplanitem"> */}
                {/* <div> */}
                {/* <span className="dy-value1">390</span> */}
                {/* </div> */}
                {/* <div className="showtitle">总工期</div> */}
                {/* </div> */}
                {/* <div className="projectplanitem"> */}
                {/* <div> */}
                {/* <span className="dy-value1 warn" id="residue_days">332</span> */}
                {/* </div> */}
                {/* <div className="showtitle">剩余天数</div> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="warnning">项目进度情况：提前18天</div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default ProjectProgress;