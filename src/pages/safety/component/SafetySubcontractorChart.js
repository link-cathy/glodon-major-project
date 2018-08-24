/**
 * Created by fancl on 2018/7/6.
 */
import React, { Component } from 'react';
import echarts from 'echarts'
import messages from 'utils/i18n'


import deepCopy from '../../../utils/deepCopy';
import colors from '../../../utils/echarts-option/chart-color';
import stringUtils from '../../../utils/stringUtils';
import dataZoom from '../../../utils/echarts-option/dataZoom';

class SafetySubcontractorChart extends Component {

    componentDidMount() {
        this.renderSubcontractorChart()
    }

    renderSubcontractorChart() {
        let option = this.initOption();
        let chart = echarts.init(document.getElementById('safety-subcontractor-chart'));
        chart.setOption(option);
    }

    initOption() {
        const option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['一般', '严重', '紧要'],
                itemWidth: 10,
                itemHeight: 5,
                right: 20,
                textStyle: {
                    color: 'white'
                },
                align: 'left',
                left: 20,
                padding: [10, 0, 10, 0]
            },
            grid: {
                left: 10,
                right: 20,
                bottom: 0,
                top: 20,
                containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    textStyle: {
                        color: 'white',
                        baseline: 'bottom',
                        fontSize: 12
                    },
                    formatter: function (value) {
                        let realLength = stringUtils.getRealLength(value);
                        if (realLength <= 40) {
                            return value;
                        }
                        return value.substring(0, stringUtils.getSubStrPosition(value, 40)) + '...';
                        // return 'ddd';
                    },
                    inside: true,
                    margin: 2
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                inverse: true,
                data: []
            },
            series: [{
                name: '空白',
                type: 'bar',
                barMaxWidth: 10,
                barGap: 10
            }, {
                name: '一般',
                type: 'bar',
                stack: '总量',
                data: [],
                barMaxWidth: 10
            },
            {
                name: '严重',
                type: 'bar',
                stack: '总量',
                data: [],
                barMaxWidth: 10
            }, {
                name: '紧要',
                type: 'bar',
                stack: '总量',
                data: [],
                barMaxWidth: 10
            }
            ]
        };
        let data = require('../../../mockservices/api/safety/queryGroupSubDetailCount.json');
        let subcontractorData = [];
        for (let i = 0; i < data.length; i++) {
            let item = {};
            // id
            item.nameId = data[i].nameId;
            // 名称
            item.name = data[i].name;
            // 总个数
            item.totalCount = data[i].count;
            // 严重
            item.serious = data[i].seriousCount;
            // 紧要
            item.critical = data[i].matterCount;
            // 一般
            item.normal = data[i].count - data[i].seriousCount - data[i].matterCount;

            subcontractorData.push(item);
        }

        let barOption = deepCopy(option);
        let nameLabels = [];
        let normalValues = [];
        let seriousValues = [];
        let criticalValues = [];
        for (let i = 0; i < subcontractorData.length; i++) {
            nameLabels[i] = subcontractorData[i].name || '';
            normalValues[i] = { value: subcontractorData[i].normal || 0, id: subcontractorData[i].nameId };
            seriousValues[i] = { value: subcontractorData[i].serious || 0, id: subcontractorData[i].nameId };
            criticalValues[i] = { value: subcontractorData[i].critical || 0, id: subcontractorData[i].nameId };
        }
        barOption.yAxis.data = nameLabels;
        barOption.series[1].data = normalValues;
        barOption.series[2].data = seriousValues;
        barOption.series[3].data = criticalValues;
        if (subcontractorData.length > 4) {
            barOption['dataZoom'] = dataZoom(0, 3, 'vertical');
            barOption.dataZoom.top = 40;
            barOption.dataZoom.bottom = 20;
            barOption.dataZoom.handleIcon = 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7';
        }
        let color = colors.getColors(3);
        color.unshift('rgba(0,0,0,0)');
        barOption.color = color;
        return barOption;
    }

    render() {
        return (
            <div className="safety-subcontractor" style={{ width: '100%', height: '100%' }}>
                <div className="chart-title">
                    {messages.safetyConstruction.unsoleved + messages.safetyConstruction.problem + messages.safetyConstruction.according + messages.safetyConstruction.subcontractor + messages.safetyConstruction.analysis}
                </div>
                <div className="chart-content" id="safety-subcontractor-chart" style={{ width: '100%', height: '280px' }}>

                </div>
            </div>
        )
    }
}

export default SafetySubcontractorChart;