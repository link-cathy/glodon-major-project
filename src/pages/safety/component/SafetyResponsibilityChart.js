/**
 * Created by fancl on 2018/7/6.
 */
import React, { Component } from 'react';
import echarts from 'echarts'
import messages from 'utils/i18n'

import color from '../../../utils/echarts-option/chart-color';
import stringUtils from '../../../utils/stringUtils';
import deepCopy from '../../../utils/deepCopy';
import dataZoom from '../../../utils/echarts-option/dataZoom';

class SafetyResponsibilityChart extends Component {

    componentDidMount() {
        this.renderResponsibilityChart()
    }

    renderResponsibilityChart() {

        let option = this.initOption();
        let chart = echarts.init(document.getElementById('safety-responsibility-chart-content'));
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
                    { name: '一般', icon: 'roundRect' },
                    { name: '严重', icon: 'roundRect' },
                    { name: '紧要', icon: 'rect' }],
                // right: 20,
                textStyle: {
                    color: 'white'
                },
                itemWidth: 10,
                itemHeight: 5,
                borderRadius: 5,
                align: 'left',
                left: 20,
                padding: [10, 0, 10, 0]
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
                    },
                    formatter: function (value) {
                        let realLength = stringUtils.getRealLength(value);
                        if (realLength <= 40) {
                            return value;
                        }
                        return value.substring(0, stringUtils.getSubStrPosition(value, 40)) + '...';
                        // return 'ddd';
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
                    name: '一般',
                    type: 'bar',
                    data: [],
                    barMaxWidth: 30
                },
                {
                    name: '严重',
                    type: 'bar',
                    data: [],
                    barMaxWidth: 30
                },
                {
                    name: '紧要',
                    type: 'bar',
                    data: [],
                    barCategoryGap: 20,
                    barMaxWidth: 30
                }

            ]
        }

        let responsibilityData = require('../../../mockservices/api/safety/queryGroupDutyPersonCount.json');
        let data = [];
        for (let i = 0; i < responsibilityData.length; i++) {
            let item = {};
            // id
            item.nameId = responsibilityData[i].nameId;
            // 名称
            item.name = responsibilityData[i].name;
            // 总个数
            item.totalCount = responsibilityData[i].count;
            // 严重
            item.serious = responsibilityData[i].seriousCount;
            // 紧要
            item.critical = responsibilityData[i].matterCount;
            // 一般
            item.normal = responsibilityData[i].count - responsibilityData[i].seriousCount - responsibilityData[i].matterCount;

            data.push(item);
        }

        let normal = [];
        let serious = [];
        let critical = [];
        let axisLabel = [];
        for (let i = 0; i < data.length; i++) {
            normal[i] = { value: data[i].normal, recordId: data[i].nameId };
            serious[i] = { value: data[i].serious, recordId: data[i].nameId };
            critical[i] = { value: data[i].critical, recordId: data[i].nameId };
            axisLabel[i] = data[i].name;
        }
        let barOption = deepCopy(option);
        barOption.xAxis.data = axisLabel;
        barOption.series[0].data = normal;
        barOption.series[1].data = serious;
        barOption.series[2].data = critical;
        barOption.series[0].stack = 'sum';
        barOption.series[1].stack = 'sum';
        barOption.series[2].stack = 'sum';
        if (data.length > 5) {
            barOption.dataZoom = dataZoom(0, 4);
        }
        if (data.length === 0) {
            barOption.xAxis.axisLine.lineStyle.color = 'rgba(0,0,0,0)';
        }
        return barOption;
    }

    render() {
        return (
            <div className="safety-responsibility-chart" style={{ width: '100%', height: '100%' }}>
                <div className="chart-title">
                    {messages.safetyConstruction.unsoleved + messages.safetyConstruction.problem + messages.safetyConstruction.according + messages.safetyConstruction.responsiblity + messages.safetyConstruction.analysis}
                </div>
                <div className="chart-content" id="safety-responsibility-chart-content" style={{ width: '100%', height: '280px' }}>

                </div>
            </div>
        )
    }
}

export default SafetyResponsibilityChart;