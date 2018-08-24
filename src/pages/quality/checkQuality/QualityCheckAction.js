/**
 * Created by yuanxh on 2018/8/17.
 */
import React, { Component } from 'react'
import ModalHeaderTab from '@/components/ModalHeaderTab';
import AddQualityQuestionForm from './AddQualityQuestionForm'
import AddQualityRecordForm from './AddQualityRecordForm'
import messages from 'utils/i18n'

class QualityCheckAction extends Component {
    render() {
        return (
            <ModalHeaderTab
                privateClass={ 'new-tab-center-style'}
                Components={[{
                    component: AddQualityQuestionForm,
                    tabTitle: messages.qualityManage.findQuestion,
                    _props: { ...this.props }
                }, {
                    component: AddQualityRecordForm,
                    tabTitle: messages.qualityManage.findRecord,
                    _props: { ...this.props }
                }]}
            >
            </ModalHeaderTab>
        )
    }
}

export default QualityCheckAction