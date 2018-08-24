/**
 * Created by fancl on 2018/7/6.
 */
import React, { Component } from 'react';
import echarts from 'echarts'
import messages from 'utils/i18n'


import getOption from '../../../utils/echarts-option/annulus';
import ChartBarProgressItem from './ChartBarProgressItem';

class SafetyNumberChart extends Component {

    componentDidMount() {
        this.renderNumberChart()
    }

    renderNumberChart() {
        let option = this.initOption();
        let chart = echarts.init(document.getElementById('safety-number-chart'));
        chart.setOption(option);
    }

    initOption() {
        let totalData = require('../../../mockservices/api/safety/queryTotalCount.json');

        let data = [totalData.timeoutAndUnchangedCount, totalData.unSolvedCount - totalData.timeoutAndUnchangedCount];
        let colors = ['#fe3d3d', 'rgba(160,160,160,0.4)'];
        let text = totalData.timeoutAndUnchangedCount;
        let subText = '超期';
        let textFontSize = 32;
        let subTextFontSize = 12;
        let option = getOption(data, colors, text, subText, textFontSize, subTextFontSize);
        option.title['itemGap'] = -5;

        return option;
    }

    render() {
        let totalData = require('../../../mockservices/api/safety/queryTotalCount.json');
        return (
            <div className="safety-number" style={{ width: '100%', height: '100%' }}>
                <div className="chart-title">
                    {messages.safetyConstruction.problem + messages.safetyConstruction.number}
                </div>
                <div className="chart-content" style={{ display: 'inline-flex', width: '100%', height: '280px' }}>
                    <div className="" style={{ width: '60%', height: '100%', verticalAlign: 'top' }}>
                        <div id="safety-number-chart" style={{ width: '100%', height: '70%' }}>

                        </div>
                        <div className="safety-unsolved-number" style={{ width: '100%', textAlign: 'center', color: '#FFF' }}>
                            {messages.safetyConstruction.unsoleved + messages.safetyConstruction.problem + '20个'}
                        </div>
                    </div>
                    <div className="safety-number-chart-bar">
                        <ChartBarProgressItem headerLeft={'紧要问题'} headerRight={totalData.matterCount.toString()} percent={totalData.matterCount / totalData.unSolvedCount * 100}/>
                        <ChartBarProgressItem headerLeft={'严重问题'} headerRight={totalData.seriousCount.toString()} percent={totalData.seriousCount / totalData.unSolvedCount * 100}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SafetyNumberChart;