/**
 * Created by fancl on 2018/8/15.
 */
import React, { Component } from 'react';
import ModalHeaderTab from '../../../components/ModalHeaderTab'
import LaborTeam from './LaborTeam'
import SubcontractorTeam from './SubcontractorTeam'
// import ModalTabBarRight from '../../../components/ModalTabBarRight'

const tabCoponents = [
    {
        tabTitle: '劳务队伍',
        component: LaborTeam,
        _props: {}
    },
    {
        tabTitle: '专业分包队伍',
        component: SubcontractorTeam,
        _props: {}
    }
]

class CheckQualityHeader extends Component {
    render() {
        return (
            <ModalHeaderTab Components={tabCoponents} />
        )
    }
}
export default CheckQualityHeader