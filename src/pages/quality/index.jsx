import React, { Component } from 'react';
// import { connect } from 'react-redux'
import Contents from '@/layout/Contents';
import { config } from '@/config'

class Quality extends Component {
    state={
        menus: ''
    }
    componentDidMount() {
        this.setState({
            menus: config.qualityQuestion.contentLeftNavBar
        })
    }
    changeComponent=({ components, _props }) => {
        console.log(components, 777777);
        config.qualityQuestion.contentLeftNavBar[0].components = components;
        if (_props) {
            config.qualityQuestion.contentLeftNavBar[0]['_props'] = { ..._props }
        }
        this.setState({
            menus: config.qualityQuestion.contentLeftNavBar
        })
    }
    render() {
        return (
            <Contents
                changeComponent = {(components) => (this.changeComponent(components))}
                Menus={this.state.menus}
                menDefaultActiveKey = {'0'}
            >
            </Contents>
        ) }
}

export default Quality
