/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'
import { Card } from 'antd'
import messages from 'utils/i18n'

class ProjectOverview extends Component {

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
            <Card className="card" bordered={false} title={messages.homePage.projectOverview} style={{ height: 332 }}>
                <p>
                    card Content
                </p>
                <p>
                    card Content
                </p>
                <p>
                    card Content
                </p>
                {/* <CardTitle className="card-title">{message.homepage.projectOverview}</CardTitle> */}
                {/* <CardBody className="card-body"> */}

                {/* Row className="row"> */}
                {/* <Col className="col-4"> */}
                {/* <div className="showtitle">工程造价</div> */}
                {/* <div> */}
                {/* <span className="dy-value">12.64</span> 亿元 */}
                {/* </div> */}
                {/* </Col> */}
                {/* <Col className="col-4"> */}
                {/* <div className="showtitle">合同工期</div> */}
                {/* <div> */}
                {/* <span className="dy-value">390</span> 天</div> */}
                {/* </Col> */}
                {/* <Col className="col-4"> */}
                {/* <div className="showtitle">建筑面积</div> */}
                {/* <div> */}
                {/* <span className="dy-value">116192.78</span> */}
                {/* <span style={{fontSize: 14 + 'px'}}>m</span> */}
                {/* <sup>2</sup> */}
                {/* </div> */}
                {/* </Col> */}
                {/* </Row> */}
                {/* <Row className="row custommargin"> */}
                {/* <div className="rowtitle"> */}
                {/* <span className="fixedtitle">建设单位：</span> */}
                {/* <span className="fixedcontent">新城新区开发投资集团有限公司</span> */}
                {/* </div> */}
                {/* <div className="rowtitle"> */}
                {/* <span className="fixedtitle"> 设计单位：</span> */}
                {/* <span className="fixedcontent">创新建筑设计研究院有限公司</span> */}
                {/* </div> */}
                {/* <div className="rowtitle"> */}
                {/* <span className="fixedtitle">总包单位：</span> */}
                {/* <span className="fixedcontent">北京城市建设与发展有限公司</span> */}
                {/* </div> */}
                {/* </Row> */}
                {/* <Row className="row"> */}
                {/* <div className="col-4 block1"> */}
                {/* <div className="desctitle">安全目标</div> */}
                {/* <div className="desccontent">省市建筑工地<br/>安全文明标准化示范工地</div> */}
                {/* </div> */}
                {/* <div className="col-4 block2"> */}
                {/* <div className="desctitle">绿色施工目标</div> */}
                {/* <div className="desccontent">2 星</div> */}
                {/* </div> */}
                {/* <div className="col-4 block3"> */}
                {/* <div className="desctitle">质量目标</div> */}
                {/* <div className="desccontent">确保长城杯，争创国家 */}
                {/* <br/>优质工程 */}
                {/* </div> */}
                {/* </div> */}
                {/* </Row>< */}
                {/* </CardBody> */}
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </Card>
        )
    }
}

export default ProjectOverview;