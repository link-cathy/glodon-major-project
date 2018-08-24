/**
 * Created by yuanxh on 2018/6/25.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Contents from '@/layout/Contents';
import { config } from '@/config'
import { allActions } from 'utils/reduxUtils'

class Processes extends Component {
    render() {
        return (
            <Contents
                Menus={config.processInfo.contentLeftNavBar}
                visible = {this.props.showModal}
                updateModalStatus = {this.props.updateModalStatus}
                menDefaultActiveKey = {'0'}
            >
            </Contents>
        ) }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.processInfo.showModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateModalStatus: () => {
            dispatch(allActions['updateModalStatus']())
        }
    }
}
let ConnectedProcess = connect(mapStateToProps, mapDispatchToProps)(Processes);
export default ConnectedProcess;

