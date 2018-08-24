/**
 * Created by yuanxh on 2018/6/27.
 */
import React from 'react';
import messages from 'utils/i18n'
import { Row, Col, Popconfirm } from 'antd';
import ModalInfo from '../../../components/ModalInfo';
import ModalHeaderTab from '../../../components/ModalHeaderTab';
import TableInfo from '../../../components/TableInfo'
// import ModalTabBarRight from '../../../components/ModalTabBarRight'
import titleStyle from '../../../styles/processInfo/images/titleStyle.png'

import { config } from '@/config'

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: <Popconfirm trigger="hover" placement="right" title={'hjjhjj'} okText="Yes" cancelText="No">
            <span>Right</span>
        </Popconfirm>,
    });
}


const ProjectRightInfo = ({ visible, updateModalStatus, ...props }) => {
    return (
        <Col span={6} className="pocp-process-status-style" >
            <Row className="pocp-process-status-style" >

                <Row className="pocp-process-status-info-style">
                    <Col span={3}></Col>
                    <Col span={2}>
                        <img src={titleStyle} />
                    </Col>
                    <Col span={8} className="pocp-process-statusInfo-div-style">
                        <span className="pocp-process-status-title-style">{messages.processInfo.projectStatus}</span>
                    </Col>
                </Row>
                <Row className="pocp-process-status-info-style pocp-process-status-info-style1">
                    <Col span={1}></Col>
                    <Col span={6}>
                        <div className="pocp-process-result-success-style">420</div>
                        <div className="pocp-process-result-show-style">{messages.processInfo.limitProjectTime}</div>
                    </Col>
                    <Col span={1} className="pocp-process-result-divide-style"></Col>
                    <Col span={6}>
                        <div className="pocp-process-result-warn-style">420</div>
                        <div className="pocp-process-result-show-style">{messages.processInfo.remainProjectTime}</div>
                    </Col>
                </Row>
                <Row className="pocp-layout-common-4" style={{ marginTop: '4%' }}>
                    <Col span={4}></Col>
                    <Col span={18} className="pocp-process-project-result-style">
                        <div>进度正常</div>
                    </Col>
                    <Col span={3}></Col>
                </Row>

                <Row className="pocp-process-status-info-style">
                    <Col span={3}></Col>
                    <Col span={2}>
                        <img src={titleStyle} />
                    </Col>
                    <Col span={8} className="pocp-process-statusInfo-div-style">
                        <span className="pocp-process-status-title-style" onClick={() => (updateModalStatus())}>{messages.processInfo.workersNum}</span>
                    </Col>
                </Row>
                <Row className="pocp-process-status-info-style pocp-process-status-info-style1">
                    <Col span={1}></Col>
                    <Col span={6}>
                        <div className="pocp-process-result-success-style">420</div>
                        <div className="pocp-process-result-show-style">{messages.processInfo.localeWorkers}</div>
                    </Col>
                    <Col span={1} className="pocp-process-result-divide-style"></Col>
                    <Col span={6}>
                        <div className="pocp-process-result-warn-style">420</div>
                        <div className="pocp-process-result-show-style">{messages.processInfo.planWorkers}</div>
                    </Col>
                </Row>


                <Row className="pocp-process-status-info-style">
                    <Col span={3}></Col>
                    <Col span={2}>
                        <img src={titleStyle} />
                    </Col>
                    <Col span={8} className="pocp-process-statusInfo-div-style">
                        <span className="pocp-process-status-title-style">{messages.processInfo.qualityQuestion}</span>
                    </Col>
                </Row>
                <Row className="pocp-process-status-info-style pocp-process-status-info-style1" >
                    <Row>
                        <span>{messages.processInfo.exceedTime}</span>
                        <span className="pocp-process-result-style">4</span>
                        <span>{messages.processInfo.commonNum}</span>
                    </Row>
                </Row>
                <Row className="pocp-process-status-info-style">
                    <Row >
                        <span>{messages.processInfo.seriousQuestion}</span>
                        <span className="pocp-process-result-style">3</span>
                        <span>{messages.processInfo.commonNum}</span>
                    </Row>
                </Row>
                <Row className="pocp-process-status-info-style">
                    <Row >
                        <span>{messages.processInfo.delayQuestion}</span>
                        <span className="pocp-process-result-style">3</span>
                        <span>{messages.processInfo.commonNum}</span>
                    </Row>
                </Row>
                <Row className="pocp-process-status-info-style">
                    <Col span={3}></Col>
                    <Col span={2}>
                        <img src={titleStyle} />
                    </Col>
                    <Col span={8} className="pocp-process-statusInfo-div-style">
                        <span className="pocp-process-status-title-style">{messages.processInfo.safetyQuestion}</span>
                    </Col>
                </Row>
                <Row className="pocp-process-status-info-style pocp-process-status-info-style1">
                    <Row >
                        <span>{messages.processInfo.exceedTime}</span>
                        <span className="pocp-process-result-style">5</span>
                        <span>{messages.processInfo.commonNum}</span>
                    </Row>
                </Row>
                <Row className="pocp-process-status-info-style">
                    <Row>
                        <span>{messages.processInfo.seriousQuestion}</span>
                        <span className="pocp-process-result-style">5</span>
                        <span>{messages.processInfo.commonNum}</span>
                    </Row>
                </Row>
                <Row className="pocp-process-status-info-style">
                    <Row >
                        <span>{messages.processInfo.delayQuestion}</span>
                        <span className="pocp-process-result-style">4</span>
                        <span>{messages.processInfo.commonNum}</span>
                    </Row>
                </Row>
            </Row>
            <ModalInfo
                visible={visible}
                onCancel={() => (updateModalStatus())}
                Contents={ ModalHeaderTab}
                _props= {{
                    Components: [{
                        component: TableInfo,
                        tabTitle: 'table1',
                        props: {
                            Columns: config.processInfo.tableColumns,
                            DataSource: data
                        }
                    }, {
                        component: TableInfo,
                        tabTitle: 'table2',
                        props: {
                            Columns: config.processInfo.tableColumns,
                            DataSource: data
                        }
                    }]
                }}
            />
        </Col>
    )
}

export default ProjectRightInfo;