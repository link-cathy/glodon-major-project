// 查看0，新增1，编辑2
import React, { Component } from 'react';
import { Modal, Row, Col, Input, DatePicker, Button, Select, Icon } from 'antd';
import messages from 'utils/i18n';
import utils from 'utils/utils';
import deepCopy from 'utils/deepCopy';
import laborUtils from '../../utils/utils'
import moment from 'moment';
import _ from 'lodash'
import { laborAMFormUpdate, laborAMFormAdd, changeLaborAMFormState, changeLaborAMDetailNoAsyn } from '@/reducers/labors';
import { connect } from 'react-redux';
import TableInfo from '@/components/TableInfo';
import { config } from '@/config'

const Option = Select.Option;
const dateFormat = 'YYYY-MM-DD'
let columns = [
    {
        title: '序号',
        dataIndex: 'index',
        key: 'index',
    }, {
        title: '工种',
        dataIndex: 'workTypeId',
        key: 'workTypeId',
    }, {
        title: '出勤人数',
        dataIndex: 'attendCount',
        key: 'attendCount',
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
    }
];
const columnsInfo = [
    { name: 'workTypeId', alias: '工种', ComponentType: 'D', dataType: 'string', length: '20' },
    { name: 'attendCount', alias: '出勤人数', ComponentType: 'I', dataType: 'int', length: '20' }
]
const keys = ['workTypeId', 'attendCount'];
const blankEditRow = {
    workTypeId: '',
    attendCount: 0
}
const getLastRow = (click) => {
    return (
        {
            workTypeId: '',
            planCount: '',
            operation: <Icon type="edit" onClick={click}/>
        }
    )
}
let queryConfig = {
    data: {},
    end_page: 2,
    object_type_id: messages.labor.object_type_id.laborAttendSummary,
    page_size: 10,
    start_page: 1
}
class EditDialogComponent extends Component {
    tableRows = []
    baseInfo = {}
    bulidTableContent() {
        let rowIndex = 0;
        let thisOnChangeTableCotent = this.onChangeTableCotent();
        const staticThis = this;
        return (datas, type) => {
            let resultDatas = datas.map((item, index) => {
                let copyItem = deepCopy(item);
                copyItem.index = rowIndex;
                copyItem.attendCount = <Input onChange={(new laborUtils.TableCellProcess(rowIndex, 1)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.attendCount} />
                copyItem.workTypeId = <Select onChange={(new laborUtils.TableCellProcess(rowIndex, 0)).onChange(thisOnChangeTableCotent)} defaultValue={copyItem.workTypeId} >
                    {messages.worktype.map((item, index) => {
                        return <Option key={utils.guid()} value={item.type}>{item.name}</Option>
                    })
                    }
                </Select>
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
        this.props.changeDetailNoAsyn(this.tableRows)
    }
    addBlankRow() {
        this.tableRows.push(blankEditRow)
        this.props.changeDetailNoAsyn(this.tableRows)
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
                this.baseInfo.checkDate = e.format(dateFormat)
            };
        } else if (type === 3) {
            return (e) => {
                this.baseInfo.recorderName = e.target.value
            };
        } else if (type === 4) {
            return (e) => {
                this.baseInfo.recordDate = e.format(dateFormat)
            };
        }
    }
    clickSave() {
        // 校验数据
        const contents = laborUtils.convertTOJson(this.tableDatasArray, keys)
        const id = utils.guid()
        let params = [];
        const summaryID = messages.labor.object_type_id.laborAttendSummary
        const detailID = messages.labor.object_type_id.laborAttendDetail
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
    getLaborSubcontractUnit() {
        return messages.enum.laborSubcontractUnit.map((item) => {
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
            className: 'defaul-style-pagination',
            size: 'small',
            pageSize: config.laborsInfo.queryConfig.pageSize,
            onChang: this.pageTo,
        }
        return (
            <Modal
                title={this.props.FormState.title ? this.props.FormState.title : '' }
                visible={this.props.FormState.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                className="laborAttenceMg-edit static-modal-stayle"
            >
                <div>
                    <Row className="condition-content">
                        <Col span={12} className="condition">
                            <spsn className="condition-name">项目名称</spsn>
                            <Select className={messages.style.defaultStyle.dropDown + ' condition-value'} key="projeceName" onChange={this.getBaseInfoOnChage.bind(this)(0)} defaultValue={baseInfo.projectName} disabled={disabledInfo.projectName}>
                                {this.getProjectOption()}
                            </Select>
                        </Col>
                        <Col span={12} className="condition">
                            <spsn className="condition-name">考勤日期</spsn><DatePicker className={messages.style.defaultStyle.datePicker + ' condition-value'} popupStyle={{ width: '224px' }} key="attenceDate" onChange={this.getBaseInfoOnChage.bind(this)(2)} defaultValue={moment(baseInfo.checkDate)} format={dateFormat} disabled={disabledInfo.recordDate}/>
                        </Col>
                        <Col span={12} className="condition">
                            <spsn className="condition-name">劳务分包单位</spsn>
                            <Select className={messages.style.defaultStyle.dropDown + ' condition-value'} key="unitName" onChange={this.getBaseInfoOnChage.bind(this)(1)} defaultValue={baseInfo.unitName}disabled={disabledInfo.unitName}>
                                {this.getLaborSubcontractUnit()}
                            </Select>
                        </Col>
                        <Col span={12} className="condition">
                            <spsn className="condition-name">出勤人数</spsn><Input className={messages.style.defaultStyle.input + ' condition-value'} key="register" onChange={this.getBaseInfoOnChage.bind(this)(3)} defaultValue={baseInfo.attendCount} disabled={disabledInfo.attendCount}/>
                        </Col>
                        <Col span={12} className="condition">
                            <spsn className="condition-name">填报人</spsn><Input className={messages.style.defaultStyle.input + ' condition-value'} key="register" onChange={this.getBaseInfoOnChage.bind(this)(3)} defaultValue={baseInfo.recorderName} disabled={disabledInfo.recorderName}/>
                        </Col>
                        <Col span={12} className="condition">
                            <spsn className="condition-name">填报日期</spsn><DatePicker className={messages.style.defaultStyle.datePicker + ' condition-value'} popupStyle={{ width: '224px' }} key="registDate" onChange={this.getBaseInfoOnChage.bind(this)(4)} defaultValue={moment(baseInfo.recordDate)} format={dateFormat} disabled={disabledInfo.toString()}/>
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
    const summaryRow =  state.labors.changeCurrentLaborAMSummaryRow;
    return {
        summaryRow: summaryRow ? summaryRow : { projectName: '', unitName: '', checkDate: Date.now(), recorderName: 'admin', recordDate: Date.now(), attendCount: 0 },
        FormState: state.labors.laborAMFormSate,
        detailDatas: state.labors.laborAMDetail
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        formUpdate: (args, config) => {
            return dispatch(laborAMFormUpdate(args, config))
        },
        formAdd: (args, config) => {
            return dispatch(laborAMFormAdd(args, config))
        },
        changeFormState: (args) => {
            dispatch(changeLaborAMFormState(args));
        },
        changeDetailNoAsyn: (datas) => {
            dispatch(changeLaborAMDetailNoAsyn(datas))
        }
    }
}
const EditDialog = connect(mapStateToProps, mapDispatchToProps)(EditDialogComponent)
export default EditDialog;