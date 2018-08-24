// 查看0，新增1，编辑2
import React, { Component } from 'react';
import {  Modal, Row, Col, Input, DatePicker, Button, Select, Icon } from 'antd';
import messages from 'utils/i18n';
import utils from 'utils/utils';
import deepCopy from 'utils/deepCopy';
import laborUtils from '../../utils/utils'
import moment from 'moment';
import { connect } from 'react-redux';
import { ManagerAMFormAdd, ManagerAMFormUpdate, changeManagerAMFormState, changeManagerAMDetailNoAsyn } from '@/reducers/labors';
import { config } from '@/config'
import TableInfo from '@/components/TableInfo';
import _ from 'lodash'

const Option = Select.Option;
const dateFormat = 'YYYY-MM-DD'
let columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    }, {
        title: '姓名',
        dataIndex: 'personName',
        key: 'personName',
    }, {
        title: '身份证',
        dataIndex: 'personPinID',
        key: 'personPinID',
    }, {
        title: '职务',
        dataIndex: 'dutyTypeName',
        key: 'dutyTypeName',
    }, {
        title: '是否请假',
        dataIndex: 'isAbsence',
        key: 'isAbsence',
    }, {
        title: '在岗时间',
        dataIndex: 'onDutyTime',
        key: 'onDutyTime',
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
    }
];
const columnsInfo = [
    { name: 'personName', alias: '姓名', ComponentType: 'I', dataType: 'string', length: '20' },
    { name: 'personPinID', alias: '身份证', ComponentType: 'I', dataType: 'string', length: '20' },
    { name: 'dutyTypeName', alias: '职务', ComponentType: 'I', dataType: 'string', length: '20' },
    { name: 'isAbsence', alias: '是否请假', ComponentType: 'D', dataType: 'string', length: '20' },
    { name: 'onDutyTime', alias: '在岗时间', ComponentType: 'I', dataType: 'int', length: '20' }
]
const keys = columnsInfo.map((item) => {
    return item.name
})
let queryConfig = {
    data: {},
    end_page: 2,
    object_type_id: messages.labor.object_type_id.managerAttenceSummary,
    page_size: 10,
    start_page: 1
}
const blankEditRow = { personName: '', personPinID: '', dutyTypeName: '', isAbsence: false, onDutyTime: '' }
const getLastRow = (click) => {
    return (
        {
            name: '',
            IDCard: '',
            job: '',
            isLeave: '',
            onDutyTime: '',
            operation: <Icon type="edit" onClick={click}/>
        }
    )
}
class EditDialogComponent extends Component {
    tableRows = []
    baseInfo = {}
    constructor(props) {
        super(props);
        this.state = {
            tableDatas: [],
        }
    }
    bulidTableContent() {
        let rowIndex = 0;
        let thisOnChangeTableCotent = this.onChangeTableCotent();
        const staticThis = this;
        return (datas, type) => {
            let resultDatas = datas.map((item, index) => {
                let copyItem = deepCopy(item);
                copyItem.index = rowIndex;
                copyItem.personName = <Input onChange={(new laborUtils.TableCellProcess(rowIndex, 0)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.personName} />
                copyItem.personPinID = <Input onChange={(new laborUtils.TableCellProcess(rowIndex, 1)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.personPinID} />
                copyItem.dutyTypeName = <Input onChange={(new laborUtils.TableCellProcess(rowIndex, 2)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.dutyTypeName} />
                copyItem.isAbsence = <Select onChange={(new laborUtils.TableCellProcess(rowIndex, 3)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.isAbsence.toString()} c>
                    <Option value="true">是</Option>
                    <Option value="false">否</Option>
                </Select>
                copyItem.onDutyTime = <Input onChange={(new laborUtils.TableCellProcess(rowIndex, 4)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.onDutyTime} />
                if (type === 1) {
                    copyItem.operation = <Icon type="delete" onClick={(new laborUtils.TableCellProcess(rowIndex, 5)).deleteRow(this.deleteRow.bind(staticThis))}/>
                }
                rowIndex++;
                return copyItem;
            })
            if (type === 1) {
                resultDatas.push(getLastRow(this.addBlankRow.bind(staticThis)));
            }
            return resultDatas;
        }
    }
    deleteRow(row) {
        this.tableRows.splice(row, 1)
        this.props.changeManagerAMDetailNoAsyn(this.tableRows)
    }
    addBlankRow() {
        this.tableRows.push(blankEditRow)
        this.props.changeManagerAMDetailNoAsyn(this.tableRows)
    }
    onChangeTableCotent() {
        // 校验
        // 保存变化
        const staticThis = this;
        return (row, col, value) => {
            staticThis.tableRows[parseInt(row, 10)][keys[parseInt(col, 10)]] = laborUtils.getInputValue(value, columnsInfo[col])
        }
    }
    formOperationComponent(type, save, close) {
        if (type === 0) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="form-operation">
                    <Button className={messages.style.defaultStyle.button + ' operation-btn-save'} onClick={save}>{messages.operation.save}</Button>
                    <Button className={messages.style.defaultStyle.button + ' operation-btn-close'} onClick={close}>{messages.operation.close}</Button>
                </div>
            )
        }
    }
    bulidDatas(dataSource, type) {
        if (type === 1) {
            return this.bulidTableContent()(dataSource);
        }
        else {
            return dataSource
        }
    }
    getBaseInfoOnChage(type) {
        if (type === 0) {
            return (e) => {
                this.baseInfo.projectName = e
            };
        } else if (type === 1) {
            return (e) => {
                this.baseInfo.unitName = e
            };
        } else if (type === 2) {
            return (e) => {
                this.baseInfo.checkDate = e.utc().format()
            };
        } else if (type === 3) {
            return (e) => {
                this.baseInfo.recorderName = e.target.value
            };
        } else if (type === 4) {
            return (e) => {
                this.baseInfo.recordDate = e.utc().format()
            };
        }
    }
    clickSave() {
        // 校验数据
        const contents = laborUtils.convertTOJson(this.tableDatasArray, keys)
        const id = utils.guid()
        let params = [];
        const summaryID = messages.labor.object_type_id.managerAttenceSummary
        const detailID = messages.labor.object_type_id.managerAttenceDetail
        if (this.props.FormState.type === 1) {
            params.push({
                objectID: summaryID,
                values: [{ ...this.baseInfo, ...{ summaryId: id }}],
            })
            _.unset(params[0].values[0], 'checkDate')
            _.unset(params[0].values[0], 'recordDate')
            params.push({
                objectID: detailID,
                values: this.tableRows.slice(0).map((item, index) => {
                    return { ...item, ...contents[index], ...{ summaryId: id }}
                })
            })
            this.props.formAdd(params, queryConfig)
        }
        if (this.props.FormState.type === 2) {
            params = this.tableRows.slice(0).map((item, index) => {
                return { objectID: detailID, values: { ...item, ...contents[index] }, instanceID: item.INFO_OBJECT_ID }
            })
            params.push({
                objectID: summaryID,
                values: { ...this.baseInfo },
            })
            this.props.formUpdate(params, queryConfig)
        }
    }
    clickClose() {
        this.props.changeFormState({ type: 0, visible: false })
    }
    handleCancel() {
        this.props.changeFormState({ type: 0, visible: false })
    }
    handleOk() {
        this.props.changeFormState({ type: 0, visible: false })
    }
    getProjectOption() {
        return messages.enum.projects.map((item) => {
            return <Option key={utils.guid()} value={item}>{item}</Option>
        })
    }
    getUnit() {
        return messages.enum.units.map((item) => {
            return <Option key={utils.guid()} value={item}>{item}</Option>
        })
    }
    render() {
        let baseInfo = this.props.summaryRow;
        let disabledInfo = { projectName: true, unitName: true, checkDate: true, recorderName: true, recordDate: true }
        const type = this.props.FormState.type;
        const tableColumns = type === 1 ? columns : columns.slice(0, columns.length - 1);
        let tableRows = this.props.detailDatas.rows.slice(0);
        if (type !== 0 && tableRows) {
            this.tableRows = tableRows.slice(0);
            disabledInfo = { ...disabledInfo, ...{ projectName: false, unitName: false, recordDate: false }}
            tableRows = this.bulidTableContent()(tableRows, type);
            this.baseInfo = baseInfo;
        } else {
            tableRows = []
        }
        const pagination = {
            defaultCurrent: this.props.detailDatas.pageInfo.rp,
            total: this.props.detailDatas.pageInfo.total,
            showTotal: utils.pageShowTotal,
            pageSize: config.laborsInfo.queryConfig.pageSize,
            onChang: this.pageTo,
            className: 'defaul-style-pagination',
            size: 'small',
        }
        return (
            <Modal
                title={this.props.FormState.title ? this.props.FormState.title : '' }
                visible={this.props.FormState.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                className="managerAttence-mg-edit static-modal-stayle"
            >
                <div>
                    <Row className="condition-content">
                        <Col span={8} className="condition">
                            <spsn className="condition-name">项目名称</spsn>
                            <Select className={messages.style.defaultStyle.dropDown + ' condition-value'} key="projeceName" onChange={this.getBaseInfoOnChage.bind(this)(0)} defaultValue={baseInfo.projectName} disabled={disabledInfo.projectName}>
                                {this.getProjectOption()}
                            </Select>
                        </Col>
                        <Col span={8} className="condition">
                            <spsn className="condition-name">单位名称</spsn>
                            <Select className={messages.style.defaultStyle.dropDown + ' condition-value'} key="unitName" onChange={this.getBaseInfoOnChage.bind(this)(1)} defaultValue={baseInfo.unitName} disabled={disabledInfo.unitName}>
                                {this.getUnit()}
                            </Select>
                        </Col>
                        <Col span={8} className="condition">
                        </Col>
                        <Col span={8} className="condition">
                            <spsn className="condition-name">考勤日期</spsn><DatePicker className={messages.style.defaultStyle.datePicker + ' condition-value'} popupStyle={{ width: '224px' }} key="attenceDate" onChange={this.getBaseInfoOnChage.bind(this)(2)} defaultValue={moment(baseInfo.checkDate)} format={dateFormat} disabled={disabledInfo.recordDate}/>
                        </Col>
                        <Col span={8} className="condition">
                            <spsn className="condition-name">记录考勤人</spsn><Input className={messages.style.defaultStyle.input + ' condition-value'} key="register" onChange={this.getBaseInfoOnChage.bind(this)(3)} defaultValue={baseInfo.recorderName} disabled={disabledInfo.recorderName}/>
                        </Col>
                        <Col span={8} className="condition">
                            <spsn className="condition-name">填表日期</spsn><DatePicker className={messages.style.defaultStyle.datePicker + ' condition-value'} popupStyle={{ width: '224px' }} key="registDate" onChange={this.getBaseInfoOnChage.bind(this)(4)} defaultValue={moment(baseInfo.recordDate)} format={dateFormat} disabled={disabledInfo.checkDate}/>
                        </Col>
                    </Row>
                </div>
                <div>
                    <TableInfo pagination={pagination} Columns={tableColumns} DataSource={tableRows} className={messages.style.defaultStyle.table + ' managerAttence-table'}/>
                </div>
                {this.formOperationComponent(this.props.type, this.clickSave.bind(this), this.clickClose.bind(this))}
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        summaryRow: state.labors.changeCurrentManagerAMSummaryRow ? state.labors.changeCurrentManagerAMSummaryRow : { projectName: '', entryExitDate: Date.now(), approachCount: '', exitCount: '', recorderName: 'admin', recordDate: Date.now() },
        FormState: state.labors.managerAMFormSate,
        detailDatas: state.labors.managerAMDetail
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        formUpdate: (args) => {
            return dispatch(ManagerAMFormUpdate(args))
        },
        formAdd: (args) => {
            return dispatch(ManagerAMFormAdd(args))
        },
        changeFormState: (args) => {
            dispatch(changeManagerAMFormState(args));
        },
        changeDetailNoAsyn: (datas) => {
            dispatch(changeManagerAMDetailNoAsyn(datas))
        }
    }
}
const EditDialog = connect(mapStateToProps, mapDispatchToProps)(EditDialogComponent)
export default EditDialog;