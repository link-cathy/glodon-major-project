/*
* @Author: pansy
* @Date:   2018-06-29 14:41:13
* @Last Modified by:   GRANDSOFT\pansy
* @Last Modified time: 2018-07-11 18:43:09
*/
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Panel from '@/components/Panel'
// 按需加载
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/graphic'
import { total_age_option, total_region_option, total_people_option, total_inout_option } from './chartOptions.js'
import messages from 'utils/i18n'

const TotalWorkersRenders = () => (
    <div>
        <Row className="">
            <Col span={8} className="">
                <Panel title={messages.labor.ageDistributionOfworkers}>
                    <div id="analysis_total_age" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
            <Col span={8} className="">
                <Panel title={messages.labor.regionDistributionOfworkers}>
                    <div id="analysis_total_region" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
            <Col span={8} className="">
                <Panel title={messages.labor.peopleDistributionOfworkers}>
                    <div id="analysis_total_people" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
        </Row>
        <Row className="">
            <Col span={24} className="">
                <Panel title={messages.labor.inOutDistributionOfworkers}>
                    <div id="analysis_total_inout" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
        </Row>
    </div>
)


class TotalWorkers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'chartOptions': {
                'analysis_total_age': total_age_option,
                'analysis_total_region': total_region_option,
                'analysis_total_people': total_people_option,
                'analysis_total_inout': total_inout_option
            }
        }
    }

    initChart(chartId) {
        let Chart = echarts.init(document.getElementById(chartId))
        let option = this.state.chartOptions[chartId]

        Chart.setOption(option);
    }

    componentDidMount() {
        this.initChart('analysis_total_age')
        this.initChart('analysis_total_region')
        this.initChart('analysis_total_people')
        this.initChart('analysis_total_inout')
    }

    render() {
        return TotalWorkersRenders()
    }
}

export default TotalWorkers;