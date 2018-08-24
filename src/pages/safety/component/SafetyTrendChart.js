/**
 * Created by fancl on 2018/7/6.
 */
import React, { Component } from 'react';
import echarts from 'echarts'
import messages from 'utils/i18n'

import color from '../../../utils/echarts-option/chart-color';
import deepCopy from '../../../utils/deepCopy';
import dataZoom from '../../../utils/echarts-option/dataZoom';
import formatDate from '../../../utils/format-date';

class SafetyTrendChart extends Component {
    componentDidMount() {
        this.renderTrendChart()
    }

    renderTrendChart() {
        let option = this.initOption();
        let chart = echarts.init(document.getElementById('safety-trend-chart-content'));
        chart.setOption(option);
    }

    initOption() {
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle: {
                    fontSize: 12
                }
            },
            color: color.getColors(3),
            legend: {
                data: [
                    { name: '新增隐患', icon: 'roundRect' },
                    { name: '消除隐患', icon: 'roundRect' },
                    { name: '未销项隐患总数' }],
                right: 20,
                textStyle: {
                    color: 'white'
                },
                itemWidth: 10,
                itemHeight: 5,
                borderRadius: 5
            },
            grid: {
                containLabel: true,
                left: '-10',
                right: '10',
                top: '30',
                bottom: '20'
            },
            xAxis: {
                type: 'category',
                data: [],
                axisLine: {
                    lineStyle: {
                        color: 'rgba(160,160,160,0.4)',
                        width: 2
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: 'white'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                show: false

            },
            series: [
                {
                    name: '新增隐患',
                    type: 'bar',
                    data: [],
                    barMaxWidth: 10
                },
                {
                    name: '消除隐患',
                    type: 'bar',
                    data: [],
                    barMaxWidth: 10
                },
                {
                    name: '未销项隐患总数',
                    type: 'line',
                    data: []
                }

            ]
        };

        let data = require('../../../mockservices/api/safety/queryGroupRiskTendencyCount.json');
        let trendData = [];
        for (let i = 0; i < data.length; i++) {
            let item = {};
            // 时间
            item.time = data[i].bizDate;
            // 本月新增隐患
            item.arisedProblem = data[i].ariseCount;
            // 本月消除隐患
            item.fixedProblem = data[i].fixCount;
            // 未销项隐患总数
            item.leftProblem = data[i].totalCount;

            trendData.push(item);
        }

        let ariseArray = [];
        let removeArray = [];
        let totalArray = [];
        let axisLabel = [];
        for (let i = 0; i < trendData.length; i++) {
            ariseArray[i] = trendData[i].arisedProblem;
            removeArray[i] = trendData[i].fixedProblem;
            totalArray[i] = trendData[i].leftProblem;
            axisLabel[i] = this.getTime(trendData[i].time);
        }
        let barLineOption = deepCopy(option);
        barLineOption.xAxis.data = axisLabel;
        barLineOption.series[0].data = ariseArray;
        barLineOption.series[1].data = removeArray;
        barLineOption.series[2].data = totalArray;
        if (trendData.length > 12) {
            barLineOption.dataZoom = dataZoom(trendData.length - 12, trendData.length - 1);
        }
        if (trendData.length === 0) {
            barLineOption.xAxis.axisLine.lineStyle.color = 'rgba(0,0,0,0)';
        }
        return barLineOption;
    }

    getTime(time) {
        let date = new Date(time);
        return formatDate(date, 'MM-dd');
    }

    render() {
        return (
            <div className="safety-trend-chart" style={{ width: '100%', height: '100%' }}>
                <div className="chart-title">
                    {messages.homePage.safety + messages.safetyConstruction.problem + messages.safetyConstruction.analysis + '(' + messages.safetyConstruction.recent + messages.safetyConstruction.thirtyDays + ')'}
                </div>
                <div className="chart-content" id="safety-trend-chart-content" style={{ width: '100%', height: '280px' }}>

                </div>
            </div>
        )
    }
}

export default SafetyTrendChart;