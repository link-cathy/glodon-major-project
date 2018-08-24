/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class ProjectTeam extends Component {

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
            <Card className="card" title={messages.homePage.projectTeam} style={{ height: '198px' }}>
                {/* <CardTitle className="card-title">项目团队</CardTitle> */}
                {/* <CardBody className="card-body"> */}
                {/* <div className="person-card"> */}
                {/* <div className="person-card-image "> */}
                {/* <img className="imagehead" src={defaultHead} /> </div> */}
                {/* <div className="person-card-name">张**</div> */}
                {/* <div className="person-card-tel" tel="13599055075">135****5075</div> */}
                {/* <div className="person-card-post"> */}
                {/* <span>项目经理</span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="person-card"> */}
                {/* <div className="person-card-image"> */}
                {/* <img className="imagehead" src={defaultHead} /> </div> */}
                {/* <div className="person-card-name">李**</div> */}
                {/* <div className="person-card-tel" tel="18559913395">185****3395</div> */}
                {/* <div className="person-card-post"> */}
                {/* <span>技术经理</span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="person-card"> */}
                {/* <div className="person-card-image"> */}
                {/* <img className="imagehead" src={defaultHead} /> </div> */}
                {/* <div className="person-card-name">苏**</div> */}
                {/* <div className="person-card-tel" tel="18650713912">186****3912</div> */}
                {/* <div className="person-card-post"> */}
                {/* <span>生产经理</span> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="person-card"> */}
                {/* <div className="person-card-image"> */}
                {/* <img className="imagehead" src={defaultHead} /> </div> */}
                {/* <div className="person-card-name">林**</div> */}
                {/* <div className="person-card-tel" tel="13665033900">136****3900</div> */}
                {/* <div className="person-card-post"> */}
                {/* <span>安全总监</span> */}
                {/* </div> */}
                {/* </div> */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default ProjectTeam;