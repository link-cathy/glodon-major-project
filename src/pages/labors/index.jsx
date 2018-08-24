import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { config } from '@/config'
import Contents from '@/layout/Contents'


class Labors extends Component {
    componentDidMount() {
        // ...
    }
    render() {
        return (
            <Contents
                Menus={config.laborsInfo.contentLeftNavBar}
                menDefaultActiveKey = {'0'}
            >
            </Contents>
        ) }
}
export default Labors