/**
 * Created by fancl on 2018/7/6.
 */
import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SafetyCategoryChart from './SafetyCategoryChart'
import SafetyNumberChart from './SafetyNumberChart'
import SafetyResponsibilityChart from './SafetyResponsibilityChart'
import SafetySubcontractorChart from './SafetySubcontractorChart'
import SafetyTrendChart from './SafetyTrendChart'

import { connect } from 'react-redux'
// import { getSafetyInfo } from '../actions'

import { ACTION_TYPES } from '@/constants';

class SafetyContent extends Component {

    componentDidMount() {
        this.props.getSafetyInfo(ACTION_TYPES.GET_SAFETY_CATEGORY_REQUEST);
        this.props.getSafetyInfo(ACTION_TYPES.GET_SAFETY_OVERVIEW_REQUEST);
        this.props.getSafetyInfo(ACTION_TYPES.GET_SAFETY_RESPONSIBILITY_REQUEST);
        this.props.getSafetyInfo(ACTION_TYPES.GET_SAFETY_SUBCONTRACTOR_REQUEST);
        this.props.getSafetyInfo(ACTION_TYPES.GET_SAFETY_TREND_REQUEST);
    }

    render() {
        return (
            <div className="process_common_style" style={{ width: '100%', height: '100%' }}>
                <Row style={{ width: '100%', height: '50%', marginTop: '20px' }}>
                    <Col span={9}>
                        <SafetyNumberChart overViewData={this.props.overview}/>
                        {/* <div className="segment-line" style={{backgroundColor: '#23FAFF', marginTop: '20%', marginBottom: '20%', width: '1px', float: 'right', height: '60%'}}> */}

                        {/* </div> */}
                    </Col>
                    <Col span={8}>
                        <SafetyResponsibilityChart />
                        {/* <div className="segment-line" style={{backgroundColor: '#23FAFF', marginTop: '20%', marginBottom: '20%', width: '1px'}}> */}

                        {/* </div> */}
                    </Col>
                    <Col span={7}>
                        <SafetySubcontractorChart />
                    </Col>
                </Row>
                <Row style={{ width: '100%', height: '50%', marginTop: '20px' }}>
                    <Col span={10}>
                        <SafetyCategoryChart />
                    </Col>
                    <Col span={14}>
                        <SafetyTrendChart />
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // category: state.safetyReducer.category,
        // overview: state.safetyReducer.overview,
        // responsibility: state.safetyReducer.responsibility,
        // subcontractor: state.safetyReducer.subcontractor,
        // trend: state.safetyReducer.trend
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSafetyInfo: (requestType) => {
            // dispatch(getSafetyInfo(requestType))
        }
    }
}

let ConnectedSafetyContent = connect(mapStateToProps, mapDispatchToProps)(SafetyContent);
export default ConnectedSafetyContent;