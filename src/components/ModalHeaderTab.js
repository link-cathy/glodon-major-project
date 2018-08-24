/**
 * Created by yuanxh on 2018/7/6.
 */
import React, { Component } from 'react'
import { Row, Tabs } from 'antd'
const TabPane = Tabs.TabPane;

class ModalHeaderTab extends Component {
    state={
        className: ''
    }
    componentDidMount() {
        this.setState({
            className: 'pocp-layout-common-style new-tab-style ' + this.props.privateClass
        })
    }
    render() {
        return (
            <Row className={this.state.className}>
                <Tabs
                    tabBarExtraContent={(this.props.ModalTabBarRight ?
                        this.props.ModalTabBarRight : null)}
                    tabBarGutter={20}
                    type="card">
                    {
                        (this.props.Components instanceof Array && this.props.Components.length > 0 ?
                            this.props.Components.map((obj, index) => {
                                const TabComponent = obj.component;
                                const _props = obj._props ? obj._props : {};
                                return (<TabPane tab={obj.tabTitle} key={index}>
                                    {(TabComponent ? <TabComponent {..._props}></TabComponent> : '无内容')}
                                </TabPane>)
                            }) : null)
                    }
                </Tabs>
            </Row>
        )
    }
}
export default ModalHeaderTab;