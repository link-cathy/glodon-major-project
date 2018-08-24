/*
* @Author: pansy
* @Date:   2018-06-29 14:41:01
* @Last Modified by:   GRANDSOFT\pansy
* @Last Modified time: 2018-07-11 17:10:27
*/
import React from 'react'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane
import OnlineWorkers from './OnlineWorkers'
import DailyWorkers from './DailyWorkers'
import TotalWorkers from './TotalWorkers'
import messages from 'utils/i18n'

const Analysis = () => (
    <Tabs type="card" className="tab-level-2">
        <TabPane tab={messages.labor.onlineWorkers} key="51">
            <OnlineWorkers />
        </TabPane>
        <TabPane tab={messages.labor.dailyWorkers} key="52">
            <DailyWorkers />
        </TabPane>
        <TabPane tab={messages.labor.totalWorkers} key="53">
            <TotalWorkers />
        </TabPane>
    </Tabs>
)

export default Analysis