/**
 * Created by fancl on 2018/8/17.
 */
import React, { Component } from 'react'
import { Form, Input, Row, Col, Select, Button, DatePicker, Spin, message } from 'antd'
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option
import messages from 'utils/i18n'
import utils from 'utils/utils'
const qualityManage = messages.qualityManage
import { addSubConstrator } from '@/reducers/qualityLabor'
import { connect } from 'react-redux'
import Api from 'utils/universalRequest'

class AddLaborCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values['laborType'] = Number(values['laborType']);
                let registerFund = Number(values['registerFund'])
                values['registerFund'] = Number(values['registerFund'])
                if (isNaN(registerFund)) {
                    delete values['registerFund']
                } else {
                    values['registerFund'] = registerFund
                }
                values['unitId'] = utils.guid()
                const json = {
                    objectID: 'subConstrator',
                    values: [values]
                }
                this.setState({ loading: true })
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
                sm: { span: 10 },
            },
        };
        const leftItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            }
        };
        const rightItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 7 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            }
        }
        const rightStyle = { marginLeft: '-4%' }
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin spinning={this.state.loading}>
                <Form
                    className="ant-modal-add-question-form top-divide-line"
                    style={{ paddingTop: '50px' }}
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <Row>
                        <Col span={12} >
                            <FormItem
                                {...leftItemLayout}
                                label={qualityManage.category}
                                colon={false}
                            >
                                {getFieldDecorator('laborType', {
                                    rules: [{
                                        type: 'string', message: '请选择类别!',
                                    }, {
                                        required: true, message: '请选择类别!',
                                    }],
                                })(
                                    <Select
                                        style={{ width: '100%' }}
                                        placeholder="请选择类别"
                                    >
                                        <Option value="1">劳务分包</Option>
                                        <Option value="2">专业分包</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12} style={rightStyle}>
                            <FormItem
                                {...rightItemLayout}
                                label={qualityManage.mainQualificationsLevel}
                                colon={false}
                            >
                                {getFieldDecorator('mainItemQualiLevel', {
                                    // rules: [{
                                    //     type: 'email', message: 'The input is not valid E-mail!',
                                    // }, {
                                    //     required: true, message: 'Please input your E-mail!',
                                    // }],
                                })(
                                    <Input style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem
                                {...leftItemLayout}
                                label={qualityManage.companyName}
                                colon={false}
                            >
                                {getFieldDecorator('unitName', {
                                    rules: [{
                                        type: 'string', message: '请输入企业名称!',
                                    }, {
                                        required: true, message: '请输入企业名称!',
                                    }, {
                                        whitespace: true, message: '请输入企业名称!',
                                    }]
                                })(
                                    <Input style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12} style={rightStyle}>
                            <FormItem
                                {...rightItemLayout}
                                label={qualityManage.unifiedSocialCode}
                                colon={false}
                            >
                                {getFieldDecorator('licence', {
                                    rules: [{
                                        type: 'string', message: '请输入统一社会代码!',
                                    }, {
                                        required: true, message: '请输入统一社会代码!',
                                    }, {
                                        whitespace: true, message: '请输入统一社会代码!',
                                    }]
                                })(
                                    <Input style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.businessScope}
                        colon={false}
                    >
                        {getFieldDecorator('businessScope', {
                            rules: [{
                                type: 'string', message: '请输入经营范围!',
                            }, {
                                required: true, message: '请输入经营范围!',
                            }, {
                                whitespace: true, message: '请输入经营范围!',
                            }],
                        })(
                            <TextArea style={{ width: '95%' }}/>
                        )}
                    </FormItem>
                    <Row>
                        <Col span={12}>
                            <FormItem
                                {...leftItemLayout}
                                label={qualityManage.legalRepresentative}
                                colon={false}
                            >
                                {getFieldDecorator('legalConcactor', {
                                    // rules: [{
                                    //     type: 'string', message: '请输入企业名称!',
                                    // }, {
                                    //     required: true, message: '请输入企业名称!',
                                    // }]
                                })(
                                    <Input style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12} style={rightStyle}>
                            <FormItem
                                {...rightItemLayout}
                                label={qualityManage.legalPersonNumber}
                                colon={false}
                            >
                                {getFieldDecorator('legalPhone', {
                                    rules: [{
                                        pattern: utils.RegexpCommon.mobileRegexp, message: '请输入合法的手机号!',
                                    }]
                                })(
                                    <Input style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <FormItem
                                labelCol={{
                                    xs: { span: 24 },
                                    sm: { span: 16 },
                                }}
                                wrapperCol={{
                                    xs: { span: 24 },
                                    sm: { span: 8 },
                                }}
                                label={qualityManage.registeredCapital}
                                colon={false}
                            >
                                {getFieldDecorator('registerFund', {
                                    // rules: [{
                                    //     type: 'number', message: '请输入数字!',
                                    // }, {
                                    //     transform(value) {
                                    //         return Number(value)
                                    //     }
                                    // }],
                                })(
                                    <span style={{ color: 'white' }}><Input style={{ width: '75%' }}/>&nbsp;万元</span>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12} style={rightStyle}>
                            <FormItem
                                {...rightItemLayout}
                                label={qualityManage.registeredAddress}
                                colon={false}
                            >
                                {getFieldDecorator('unitAddress')(
                                    <Input style={{ width: '100%' }}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem
                        {...formItemLayout}
                        label={qualityManage.address}
                        colon={false}
                    >
                        {getFieldDecorator('address', {
                            // rules: [{
                            //     type: 'email', message: 'The input is not valid E-mail!',
                            // }, {
                            //     required: true, message: 'Please input your E-mail!',
                            // }],
                        })(
                            <Input style={{ width: '95%' }}/>
                        )}
                    </FormItem>
                    <Row>
                        <Col span={12}>
                            <FormItem
                                {...leftItemLayout}
                                label={qualityManage.postCode}
                                colon={false}
                            >
                                {getFieldDecorator('postalCode', {
                                    rules: [{
                                        pattern: utils.RegexpCommon.postCodeRegexp, message: '请输入合法的邮编!',
                                    }],
                                })(
                                    <Input style={{ width: '100%' }}/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12} style={rightStyle}>
                            <FormItem
                                {...rightItemLayout}
                                label={qualityManage.safetyConstructionLicenseNo}
                                colon={false}
                            >
                                {getFieldDecorator('safeLicence', {
                                    // rules: [{
                                    //     type: 'email', message: 'The input is not valid E-mail!',
                                    // }, {
                                    //     required: true, message: 'Please input your E-mail!',
                                    // }],
                                })(
                                    <Input style={{ width: '100%' }}/>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} >
                            <FormItem
                                {...leftItemLayout}
                                label={qualityManage.licenseValidDate}
                                colon={false}
                            >
                                {getFieldDecorator('expiryDate', {
                                    // rules: [{
                                    //     type: 'email', message: 'The input is not valid E-mail!',
                                    // }, {
                                    //     required: true, message: 'Please input your E-mail!',
                                    // }],
                                })(
                                    <DatePicker style={{ width: '100%' }} allowClear={true} placeholder="选择日期"/>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={12} style={rightStyle}>
                            <FormItem
                                {...rightItemLayout}
                                label={qualityManage.licenseOrganization}
                                colon={false}
                            >
                                {getFieldDecorator('issueAuthority', {
                                    // rules: [{
                                    //     type: 'email', message: 'The input is not valid E-mail!',
                                    // }, {
                                    //     required: true, message: 'Please input your E-mail!',
                                    // }],
                                })(
                                    <Input style={{ width: '100%' }} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>

                    <FormItem
                        wrapperCol={{ span: 24 }}
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
        addQuestionKeys: state.checkQuestion.addQuestionKeys
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSubConstrator: (json) => {
            dispatch(addSubConstrator(json))
        }
    }
}

const AddLaborCompanyForm = Form.create()(AddLaborCompany)
const AddLaborCompanyFormComponent = connect(mapStateToProps, mapDispatchToProps)(AddLaborCompanyForm);
export default AddLaborCompanyFormComponent