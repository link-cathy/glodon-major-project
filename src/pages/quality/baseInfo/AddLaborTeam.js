/**
 * Created by fancl on 2018/8/17.
 */
import React, { Component } from 'react'
import { Form, Input, Select, Button, Spin, message } from 'antd'
const FormItem = Form.Item;
const Option = Select.Option
import messages from 'utils/i18n'
import utils from 'utils/utils'
import { ACTION_TYPES } from '@/constants'
const action_type = ACTION_TYPES.CHECK_QUALITY
const qualityManage = messages.qualityManage
import { addSubConstrator } from '@/reducers/qualityLabor'
import { connect } from 'react-redux'
import Api from 'utils/universalRequest'

class AddLaborTeam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    // componentDidMount() {
    //     if (this.props.subConstratorTeam) {
    //         this.props.form.setFieldsValue({ unitName: JSON.stringify({ unitId: this.props.subConstratorTeam.unitId, unitnName: this.props.subConstratorTeam.unitName }) })
    //     }
    // }
    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                try {
                    let unitObj = JSON.parse(values['unitName'])
                    values['unitId'] = unitObj.unitId
                    values['unitName'] = unitObj.unitName
                } catch (e) {
                    console.log(e)
                    values['unitId'] = this.props.subConstratorTeam.unitId
                    values['unitName'] = this.props.subConstratorTeam.unitName
                }
                values['teamId'] = utils.guid()
                if (this.props.subConstratorTeam) {
                    values['teamId'] = this.props.subConstratorTeam.teamId
                }
                if (values['scale']) {
                    let num = Number(values['scale'])
                    if (isNaN(num)) {
                        delete values['scale']
                    } else {
                        values['scale'] = num
                    }
                }
                const json = {
                    objectID: 'subConstratorTeam',
                    values: [values]
                }
                this.setState({ loading: true })
                if (this.props.subConstratorTeam) {
                    json.values = values
                    json.instanceID = this.props.subConstratorTeam.INFO_OBJECT_ID
                    Api.universalUpdate(json).then((res) => {
                        this.setState({ loading: false })
                        if (res.message.toLowerCase() === 'success') {
                            this.props.transferVisible({ visible: false })
                            message.success('更新成功!')
                        } else {
                            message.error('更新失败!')
                        }
                    })
                } else {
                    Api.universalAdd(json).then((res) => {
                        this.setState({ loading: false })
                        if (res.message.toLowerCase() === 'success') {
                            this.props.transferVisible({ visible: false })
                            message.success('保存成功!')
                        } else {
                            message.error('保存失败!')
                        }
                    })
                }
            }
        })
    }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin spinning={this.state.loading}>
                <Form
                    className="ant-modal-add-question-form top-divide-line"
                    style={{ paddingTop: '50px' }}
                    onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.companyName}
                        colon={false}
                    >
                        {getFieldDecorator('unitName', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.unitName : null),
                            rules: [{
                                type: 'string', message: '请选择一个企业!',
                            }, {
                                required: true, message: '请选择一个企业!',
                            }],
                        })(
                            <Select
                                style={{ width: '60%' }}
                                placeholder="请选择一个企业"
                            >
                                {
                                    this.props.laborType === 1 ?
                                        this.props.subConstratorData[action_type.GET_LABOR_LIST].instances.map((item, index) => {
                                            return (
                                                <Option value={JSON.stringify(item)} key={index}>{item.unitName}</Option>
                                            )
                                        }) : this.props.subConstratorData[action_type.GET_PROFESSIONAL_LIST].instances.map((item, index) => {
                                            return (
                                                <Option value={JSON.stringify(item)} key={index}>{item.unitName}</Option>
                                            )
                                        })
                                }
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.captainName}
                        colon={false}
                    >
                        {getFieldDecorator('leadName', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.leadName : ''),
                            rules: [{
                                type: 'string', message: '请输入队长姓名!',
                            }, {
                                required: true, message: '请输入队长姓名!',
                            }, {
                                whitespace: true, message: '请输入队长姓名!'
                            }]
                        })(
                            <Input style={{ width: '60%' }}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.captainMobile}
                        colon={false}
                    >
                        {getFieldDecorator('leadPhone', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.leadPhone : ''),
                            rules: [{
                                required: true, message: '请输入队长电话!',
                            }, {
                                pattern: utils.RegexpCommon.mobileRegexp, message: '请输入合法的手机号!',
                            }],
                        })(
                            <Input style={{ width: '60%' }} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.captainID}
                        colon={false}
                    >
                        {getFieldDecorator('leadPinID', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.leadPinID : ''),
                            rules: [{
                                required: true, message: '请输入队长身份证号!'
                            }, {
                                pattern: utils.RegexpCommon.idNumRegexp, message: '请输入合法的身份证号!',
                            }],
                        })(
                            <Input style={{ width: '60%' }} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.teamSize + '(人)'}
                        colon={false}
                    >
                        {getFieldDecorator('scale', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.scale : ''),
                        })(
                            <Input style={{ width: '60%' }} />
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.teamSource}
                        colon={false}
                    >
                        {getFieldDecorator('source', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.source : ''),
                        })(
                            <Input style={{ width: '60%' }}/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.remark}
                        colon={false}
                    >
                        {getFieldDecorator('remark', {
                            initialValue: (this.props.subConstratorTeam ? this.props.subConstratorTeam.remark : ''),
                        })(
                            <Input style={{ width: '60%' }}/>
                        )}
                    </FormItem>

                    <FormItem
                        wrapperCol={{ span: 22 }}
                        style={{ textAlign: 'center' }}
                    >
                        <Button
                            className="common-submit-button-style"
                            type="primary"
                            htmlType="submit"
                            style={{ marginRight: '20px' }}>
                            {messages.operation.save}
                        </Button>
                        <Button
                            className="defaul-style-button"
                            type="primary"
                            onClick={this.props.transferVisible({ visible: false })}>
                            {messages.operation.close}
                        </Button>
                    </FormItem>
                </Form>
            </Spin>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        subConstratorData: state.qualitySubConstratorData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSubConstrator: (json) => {
            dispatch(addSubConstrator(json))
        }
    }
}

const AddLaborTeamForm = Form.create()(AddLaborTeam)
const AddLaborTeamFormComponent = connect(mapStateToProps, mapDispatchToProps)(AddLaborTeamForm);
export default AddLaborTeamFormComponent