import React, { Component } from 'react'
import Contents from '@/layout/Contents';
import { config } from '@/config'

export default class Safety extends Component {

    componentDidMount() {
        // this.props.getQuestionData();
    }
    render() {
        return (
            <Contents
                // changeComponent = {(components) => (this.changeComponent(components))}
                Menus={config.safetyConstruction.contentLeftNavBar}
                menDefaultActiveKey = {'0'}
            >
            </Contents>
        ) }
}
