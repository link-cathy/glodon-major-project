import React, { Component } from 'react';
import { Row, Col, DatePicker, Input, Button } from 'antd'
import messages from 'utils/i18n';
import EditDialog from './EditDialog';
// import deepCopy from '../../../../utils/deepCopy';

const blankEditRow = {
    personName: '',
    personPinID: '',
    dutyTypeName: '',
    isAbsence: false,
    onDutyTime: ''
}
class HeaderOperation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openEditDialog: false,
            date: 0,
            projectName: '',
            dataSource: [blankEditRow],
            tableContent: {
                total: 1,
                pageSize: 10,
                rp: 1,
            }
        }
    }
    /**
     * 打开编辑对话框
     */
    openEdit = () => {
        const title = messages.labor.demandMag.MainPanel.addTitle
        const row = { planCount: 0, recordDate: Date.now(), recorderName: 'admin', projectName: '', checkDate: Date.now() }
        this.props.changeFormState({ type: 1, visible: true, title: title })
        this.props.changeCurrenSummarysRow(row)
        this.props.changeDetailNoAsyn([blankEditRow])
    }
    dateOnchange = (e) => {
        this.setState({
            date: e.format('YYYY-MM-DD')
        })
    }
    inputOnchange(e) {
        this.setState({
            projectName: e.target.value
        })
    }
    query() {
        let json = {};
        const date = this.state.date;
        const projectName = this.state.projectName
        if (date !== 0) {
            json.checkDate = date;
        }
        if (projectName !== '') {
            json.projectName = projectName;
        }
        this.props.queryData(json)
    }
    render() {
        return (
            <Row className = "head-operation">
                <Col span = {1}></Col>
                <Col span = {11}>
                    <div className="condition">
                        <span className="condition-name">{messages.labor.managerAttence.manage.MainPanel.attenceDate}</span>
                        <DatePicker className={messages.style.defaultStyle.datePicker} popupStyle={{ width: '165px' }} onChange={this.dateOnchange.bind(this)} style={{}} />
                    </div>
                    <div className="condition">
                        <span className="condition-name">{messages.labor.managerAttence.manage.MainPanel.projectName}</span>
                        <Input className={messages.style.defaultStyle.input + ' condition-value'} onChange={this.inputOnchange.bind(this)}></Input>
                    </div>
                </Col>
                <Col span = {11} >
                    <div className="operation">
                        <Button className="operation-btn operation-btn-query" onClick={this.query.bind(this)}>{messages.operation.query}</Button>
                        <Button className="operation-btn operation-btn-add" onClick={this.openEdit.bind(this)}>{messages.operation.add}</Button>
                        <EditDialog />
                    </div>
                </Col>
                <Col span = {1}></Col>
            </Row>
        )
    }
}
export default HeaderOperation;