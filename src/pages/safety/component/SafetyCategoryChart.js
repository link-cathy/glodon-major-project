/**
 * Created by fancl on 2018/7/6.
 */
import React, { Component } from 'react';
import echarts from 'echarts'
import messages from 'utils/i18n'

import color from '../../../utils/echarts-option/chart-color';
import getOption from '../../../utils/echarts-option/circle';

class SafetyCategoryChart extends Component {

    componentDidMount() {
        this.renderCategoryChart()
    }

    renderCategoryChart() {
        let option = this.initOption();
        let chart = echarts.init(document.getElementById('safety-category-chart-content'));
        chart.setOption(option);
    }

    initOption() {

        let data = require('../../../mockservices/api/safety/queryGroupCategoryCount.json');
        let categoryData = [];
        for (let i = 0; i < data.length; i++) {
            let item = {};
            // id
            item.nameId = data[i].nameId;
            // 全路径名称
            item.name = data[i].fullName || data[i].name;
            // 是否排除Id
            item.exclusionId = data[i].exclusionId;
            // 总个数
            item.value = data[i].count;
            // 简称
            item.abbrName = data[i].name;

            categoryData.push(item);
        }

        let values = [];
        for (let i = 0; i < categoryData.length; i++) {
            values[i] = categoryData[i].value;
        }

        let fullLabels = [];
        for (let i = 0; i < categoryData.length; i++) {
            fullLabels[i] = categoryData[i].name;
        }

        let option = getOption(values, fullLabels, true, color.getColors(6), 'rgba(160,160,160,0.4)');
        let legendData = []
        for (let i = 0; i < data.length; i++) {
            legendData.push(data[i].name);
        }
        option.legend = {
            // type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 50,
            bottom: 20,
            textStyle: {
                color: '#FFF'
            },
            padding: [0, 30, 0, 0],
            itemGap: 20,
            // data: legendData,

            // selected: data.selected
        };

        option.tooltip.formatter = (params) => {
            if (params.seriesIndex === 0) {
                return '';
            }
            let str = '';
            str += '<div style="font-size:12px;color:white;padding:5px;">';
            str += '<span style="display:inline-block;height:10px;width:10px;border-radius:5px;background:' + params.color + ';margin-right: 5px;"></span>';
            str += '<span>' + params.data.abbrName + ': ' + params.value + '</span></div>';
            return str;
        };
        option.series[1].data = categoryData;
        option.series[1].center = ['30%', '50%'];
        option.series[0].center = ['30%', '50%'];
        option.series[0].radius = 0;
        return option;
    }
    render() {
        return (
            <div className="safety-category-chart" style={{ width: '100%', height: '100%' }}>
                <div className="chart-title">
                    {messages.homePage.safety + messages.safetyConstruction.problem + messages.safetyConstruction.category + messages.safetyConstruction.analysis + '(' + messages.safetyConstruction.recent + messages.safetyConstruction.thirtyDays + ')'}
                </div>
                <div className="chart-content" id="safety-category-chart-content" style={{ width: '100%', height: '280px' }}>

                </div>
            </div>
        )
    }
}

export default SafetyCategoryChart;