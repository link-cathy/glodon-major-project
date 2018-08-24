/**
 * Created by fancl on 2018/8/15.
 */
import React, { Component } from 'react'
import LeftCompanyComponent from './LeftCompanyComponent'
import RightTableComponent from './RightTableComponent'
import { Layout } from 'antd'

// 劳务分包
class LaborTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSubConstrator: null
        }
    }
    handleChangeSubConstrator(event) {
        this.setState({ currentSubConstrator: event })
        this.rightComponent.getWrappedInstance().subConstratorChange(event)
    }
    render() {
        return (
            <Layout style={{ background: 'rgba(0, 0, 0, 0)', height: '100%' }}>
                <Layout.Sider width="30%" style={{ background: 'rgba(0, 0, 0, 0)', borderRight: '1px solid #23faff' }}>
                    <LeftCompanyComponent laborType={1} handleChangeSubConstrator={this.handleChangeSubConstrator.bind(this)}/>
                </Layout.Sider>
                <Layout.Content>
                    <RightTableComponent
                        laborType={1}
                        subConstrator={this.state.currentSubConstrator}
                        ref={node => { (this.rightComponent = node) }}/>
                </Layout.Content>
            </Layout>
        )
    }
}

export default LaborTeam