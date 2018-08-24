import React, { Component } from 'react';
import { Modal, Row, Col, Input, DatePicker, Button, Select } from 'antd';
import messages from 'utils/i18n';
import utils from 'utils/utils';
import moment from 'moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import { laborEntryAndExitFormAdd, laborEntryAndExitFormUpdate, changeLaborsEAEFormState } from '@/reducers/labors'

const Option = Select.Option;
const dateFormat = 'YYYY-MM-DD'
const defaultSummaryRow = { projectName: '', entryExitDate: Date.now(), approachCount: '', exitCount: '', recorderName: 'admin', recordDate: Date.now() };
const defaultDisabledInfo = { projectName: true, checkDate: true, approachCount: true, exitCount: true, recorderName: true, recordDate: true }
class EditDialogComponent extends Component {
    formInput = { projectName: '', entryExitDate: '', approachCount: '', exitCount: '', recordDate: '', recorderName: '', }
    onChange_projectName(e) {
        this.formInput = { ...this.formInput, ...{ projectName: e }}
    }
    onChange_entryNum(e) {
        this.formInput = { ...this.formInput, ...{ approachCount: parseInt(e.target.value, 10) }}
    }
    onChange_exitNum(e) {
        this.formInput = { ...this.formInput, ...{ exitCount: parseInt(e.target.value, 10) }}
    }
    onChange_register(e) {
        this.formInput = { ...this.formInput, ...{ recorderName: e.target.value }}
    }
    onChange_registDate(e) {
        this.formInput = { ...this.formInput, ...{ recordDate: e.utc().format() }}
    }
    onChange_entryExitDate(e) {
        this.formInput = { ...this.formInput, ...{ entryExitDate: e.utc().format() }}
    }
    formOperationComponent(type) {
        if (type === 0) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="form-operation">
                    <Button className={messages.style.defaultStyle.button + ' operation-btn-save'} onClick={this.clickSave.bind(this)}>{messages.operation.save}</Button>
                    <Button className={messages.style.defaultStyle.button + ' operation-btn-close'} onclick={this.close.bind(this)}>{messages.operation.close}</Button>
                </div>
            )
        }
    }
    clickSave() {
        // 校验
        let json =  this.formInput
        if (this.props.type === 1) {
            _.unset(json, 'entryExitDate')
            _.unset(json, 'recordDate')
            this.props.LaborEntryAndExitFormAdd(json)
        } else {
            this.props.laborEntryAndExitFormUpdate(json)
        }
        this.props.handleCancel();
    }
    close() {
        this.props.changeLaborsEAEFormState({ type: 0, visible: false })
    }
    getProjectOption() {
        return messages.enum.projects.map((item) => {
            return <Option key={utils.guid()} value={item}>{item}</Option>
        })
    }
    render() {
        let disabledInfo = defaultDisabledInfo
        let summaryRow = this.props.summaryRow ? this.props.summaryRow : defaultSummaryRow
        if (this.props.laborsEAEFormState.type !== 0) {
            disabledInfo = { ...disabledInfo, ...{ projectName: false, checkDate: false, approachCount: false, exitCount: false }}
        }
        this.formInput = summaryRow;
        return (
            <Modal
                title="劳务人员进退场人数登记"
                visible={this.props.laborsEAEFormState.visible}
                onOk={this.props.handleOk}
                onCancel={this.close.bind(this)}
                className="laborEntryAndExit-edit static-modal-stayle"
            >
                <div>
                    <Row className="condition-content">
                        <Col span={24} className="condition-content-sun">
                            <div className="condition">
                                <spsn className="condition-name">项目名称</spsn>
                                <Select className={ messages.style.defaultStyle.dropDown + ' condition-value'} disabled={disabledInfo.projectName} defaultValue={summaryRow.projectName} onChange={this.onChange_projectName.bind(this)} >
                                    {this.getProjectOption()}
                                </Select>
                            </div>
                        </Col>
                        <Col span={24} className="condition-content-sun">
                            <div className="condition">
                                <spsn className="condition-name">劳务人员进场数量</spsn><Input className={messages.style.defaultStyle.input + ' condition-value'} disabled={disabledInfo.approachCount} defaultValue={summaryRow.approachCount} onChange={this.onChange_entryNum.bind(this)} />
                            </div>
                        </Col>
                        <Col span={24} className="condition-content-sun">
                            <div className="condition">
                                <spsn className="condition-name">劳务人员出场数量</spsn><Input className={messages.style.defaultStyle.input + ' condition-value'} disabled={disabledInfo.exitCount} defaultValue={summaryRow.exitCount} onChange={this.onChange_exitNum.bind(this)}/>
                            </div>
                        </Col>
                        <Col span={24} className="condition-content-sun">
                            <div className="condition">
                                <spsn className="condition-name">进退场日期</spsn><DatePicker className={messages.style.defaultStyle.datePicker + ' condition-value'} popupStyle={{ width: '230px' }} disabled={disabledInfo.checkDate} defaultValue={moment(summaryRow.checkDate)} format={dateFormat} onChange={this.onChange_entryExitDate.bind(this)}/>
                            </div>
                        </Col>
                        <Col span={24} className="condition-content-sun">
                            <div className="condition">
                                <spsn className="condition-name">填报人</spsn><Input className={messages.style.defaultStyle.input + ' condition-value'} disabled={disabledInfo.recorderName} defaultValue={summaryRow.recorderName} onChange={this.onChange_register.bind(this)}/>
                            </div>
                        </Col>
                        <Col span={24} className="condition-content-sun">
                            <div className="condition">
                                <spsn className="condition-name">登记日期</spsn><DatePicker className={messages.style.defaultStyle.datePicker + ' condition-value'} popupStyle={{ width: '230px' }} disabled={disabledInfo.recordDate} defaultValue={moment(summaryRow.recordDate)} format={dateFormat} onChange={this.onChange_registDate.bind(this)}/>
                            </div>
                        </Col>
                    </Row>
                    {this.formOperationComponent(this.props.laborsEAEFormState.type)}
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        summaryRow: state.labors.laborsEAESummaryData.rows,
        laborsEAEFormState: state.labors.laborsEAEFormState,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        laborEntryAndExitFormUpdate: (args) => {
            return dispatch(laborEntryAndExitFormUpdate(args))
        },
        LaborEntryAndExitFormAdd: (args) => {
            return dispatch(laborEntryAndExitFormAdd(args))
        },
        changeLaborsEAEFormState: (args) => {
            dispatch(changeLaborsEAEFormState(args));
        }
    }
}
let EditDialog = connect(mapStateToProps, mapDispatchToProps)(EditDialogComponent);
export default EditDialog;