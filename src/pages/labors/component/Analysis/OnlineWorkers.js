/*
* @Author: pansy
* @Date:   2018-06-29 14:40:44
* @Last Modified by:   GRANDSOFT\pansy
* @Last Modified time: 2018-07-11 18:23:07
*/
import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Panel from '@/components/Panel'
// 按需加载
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/graphic'
// import 'echarts/lib/component/title'
import { online_team_option, online_category_option, online_today_option } from './chartOptions.js'
import messages from 'utils/i18n'

const OnlineWorkersRenders = () => (
    <div>
        <Row className="">
            <Col span={12} className="">
                <Panel title={messages.labor.teamWorkers}>
                    <div id="analysis_online_team" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
            <Col span={12} className="">
                <Panel title={messages.labor.categoryWorkers}>
                    <div id="analysis_online_category" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
        </Row>
        <Row className="">
            <Col span={24} className="">
                <Panel title={messages.labor.todayWorkersLine}>
                    <div id="analysis_online_today" style={{ width: '100%', height: '260px', backgroundColor: 'transparent' }}></div>
                </Panel>
            </Col>
        </Row>
    </div>
)

class OnlineWorkers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            'chartOptions': {
                'analysis_online_team': online_team_option,
                'analysis_online_category': online_category_option,
                'analysis_online_today': online_today_option
            }
        }
    }

    initChart(chartId) {
        let Chart = echarts.init(document.getElementById(chartId))
        let option = this.state.chartOptions[chartId]

        Chart.setOption(option);
    }

    componentDidMount() {
        this.initChart('analysis_online_team')
        this.initChart('analysis_online_category')
        this.initChart('analysis_online_today')
    }

    render() {
        return OnlineWorkersRenders()
    }
}
export default OnlineWorkers