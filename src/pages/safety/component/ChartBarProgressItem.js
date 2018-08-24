/**
 * Created by fancl on 2018/7/11.
 */
import { Progress } from 'antd';
import React from 'react'

const ChartBarProgressItem = ({ headerLeft, headerRight, percent }) => (
    <div className="chart-bar-progress-item">
        <div className="header">
            <span className="left">
                {headerLeft}
            </span>
            <span className="right">
                {headerRight}个
            </span>
        </div>
        <Progress percent={percent} showInfo={false} strokeWidth={5} status={'success'}/>
        <div className="footer">
            {percent}%
        </div>
    </div>
)

export default ChartBarProgressItem;