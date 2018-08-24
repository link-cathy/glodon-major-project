/**
 * Created by fancl on 2018/7/2.
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';

import ProjectOverview from './ProjectOverview'
import WorkRemind from './WorkRemind'
import ProgressDisplay from './ProgressDisplay'
import ProjectProgress from './ProjectProgress'
import Weather from './Weather'
import GreenConstruction from './GreenConstruction'
import QualityChart from './QualityChart'
import SafetyChart from './SafetyChart'
import ProgressElement from './ProgressElement'
import ProjectTeam from './ProjectTeam'
import LaborsChart from './LaborsChart'
import DeviceInfo from './DeviceInfo'
import Monitor from './Monitor'

// import {connect} from 'react-redux'
// import {getQuestionData,updateClientHeight,updateModalStatus} from '../action'
// import MenuList from './SiderBar';
// import MediaInfo from './MediaInfo'
// import ProjectRightInfo from './ProjectRightInfo'
// import ProjectHeader from './ProcessHeader'
// import '../styles/index.css';
class Cockpit extends Component {
    componentDidMount() {
        // this.props.updateClientHeight();
        // this.props.getQuestionData();
    }
    render() {
        return (
            <div style={{ height: this.props.currentHeight }} >
                <Row className="" gutter={20} style={{ marginTop: '20px' }}>
                    <Col span={7}>
                        <ProjectOverview />
                        <WorkRemind />
                    </Col>
                    <Col span={10} className="">
                        <ProgressDisplay />
                        <Row gutter={20}>
                            <Col span={12}>
                                <QualityChart />
                            </Col>
                            <Col span={12}>
                                <SafetyChart />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={7} className="">
                        <Row className="" gutter={20}>
                            <Col span={14}>
                                <ProjectProgress />
                            </Col>
                            <Col span={10}>
                                <Weather />
                            </Col>
                        </Row>
                        <GreenConstruction />
                        <ProgressElement />
                    </Col>
                </Row>
                <Row gutter={20} style={{ marginBottom: '20px' }}>
                    <Col span={7}>
                        <ProjectTeam />
                    </Col>
                    <Col span={10}>
                        <Row gutter={20}>
                            <Col span={12}>
                                <LaborsChart />
                            </Col>
                            <Col span={12}>
                                <DeviceInfo />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={7}>
                        <Monitor />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cockpit;