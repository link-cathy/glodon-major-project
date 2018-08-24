/**
 * Created by yuanxh on 2018/6/25.
 */

import React from 'react';
import { Row, Col, Tabs } from 'antd';
import corner_style from '../styles/layout/images/corner_style.png'
import right_style from '../styles/layout/images/right_style.png'
const TabPane = Tabs.TabPane;
const MenuList = ({ Menus, menDefaultActiveKey, ...props }) => {
    return (
        <Col span={24} className="pocp-layout-common-style">
            <Row className="pocp-layout-common-style left-nav-tab-style">
                <Tabs tabBarExtraContent={''}
                    // tabBarGutter={20}
                    tabPosition = {'left'}
                    type="card" defaultActiveKey = {menDefaultActiveKey}>
                    {
                        (Menus instanceof Array && Menus.length > 0 ? Menus.map((obj, index) => {
                            const TabComponent = obj.components;
                            const _props = obj._props ? obj._props : {};
                            return (
                                <TabPane tab={obj.name} key={index} >
                                    {(TabComponent ? <div style={{ height: '100%' }}><div className="content-corner-style">
                                        <img src={corner_style}/></div>
                                    <div className="content-right-style"><img src={right_style}/></div>
                                    <TabComponent {...props} {..._props}style={{ height: '100%' }} /></div> : null)}
                                </TabPane>
                            )
                        }) : '')
                    }
                </Tabs>
            </Row>
        </Col>
    )
}

export default MenuList;