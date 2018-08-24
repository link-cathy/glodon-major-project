/**
 * Created by yuanxh on 2018/8/16.
 */
import React, { Component } from 'react'
import { Form, Input, Row, Col, Upload, Button, Select } from 'antd'
import messages from 'utils/i18n'
import { connect } from 'react-redux'
import { addCheckQuestion, uploadImg } from '@/reducers/checkQuality'
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option

class AddQualityRecord extends Component {
    state={
        visible: false,
        fileList: [],
        displayStatus: true
    }
    transferVisible = ({ visible, ...props }) => {
        this.setState({
            visible,
            ...props
        })
    }
    componentDidMount() {
        this.props.form.setFieldsValue({ status: '1' })
    }
    handSubmit =(e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values['status'] = Number(values['status'])
                const json = {
                    objectID: 'qualityProblem',
                    values: [values]
                }
                if (values['upload']) {
                    this.props.uploadImg(values['upload'].fileList, json.objectID)
                }
                delete values['upload'];
                this.props.addCheckQuestion(json)
            }
        });
        this.props.changeComponentFunc({ components: this.props.Component })
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList: fileList })
    }
    handleColse =() => {
        this.props.changeComponentFunc({ components: this.props.Component })
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
            <Form
                className="ant-modal-add-question-form"
            >
                <FormItem
                    {...formItemLayout}
                    label={messages.qualityManage.projectName}
                >
                    {getFieldDecorator('projectName', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{ width: '61%' }}/>
                    )}
                </FormItem>
                <Row>
                    <Col span={12} >
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label={messages.qualityManage.checkStep}
                        >
                            {getFieldDecorator('problemRegion', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '75%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5} style={{ marginLeft: '-6.2%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 7 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            label={messages.qualityManage.company}
                        >
                            {getFieldDecorator('unitName', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '100%' }} />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={2}>
                        <FormItem
                            wrapperCol={{ span: 22 }}
                        >
                            <Button style={{ width: '56%' }} className="common-submit-button-style" type="primary" htmlType="submit">......</Button>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                    {...formItemLayout}
                    label={messages.qualityManage.information}
                >
                    {getFieldDecorator('problemDesc', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <TextArea style={{ width: '61%' }}/>
                    )}
                </FormItem>
                <Row>
                    <Col span={4} offset={6}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            label={messages.qualityManage.actionCheckMen}
                        >
                            {getFieldDecorator('checkName', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '77%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 9 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            label={messages.qualityManage.checkTime}
                        >
                            {getFieldDecorator('checkTime', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '77%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={4} style={{ marginLeft: '-1.1%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 5 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 12 },
                            }}
                            label={messages.qualityManage.questionStatus}
                        >
                            {getFieldDecorator('status', {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Select
                                    style={{ width: '100%' }}
                                    placeholder="Select a option and change input text above"
                                >
                                    {messages.qualityManage.dropDownCheckResult.map((obj, index) =>
                                        <Option key={index} value={index.toString()}>{obj}</Option>
                                    )}
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <FormItem
                    labelCol= {{
                        xs: { span: 24 },
                        sm: { span: 8 },
                    }}
                    wrapperCol={ {
                        xs: { span: 24 },
                        sm: { span: 9 },
                    }}
                    className="livePicture"
                    label={messages.qualityManage.livePicture}
                >
                    {getFieldDecorator('upload', {
                        // valuePropName: 'fileList',
                        // getValueFromEvent: this.normFile,
                    })(
                        <Upload
                            name="file"
                            action={'/fileUpload'}
                            beforeUpload={() => false}
                            //  customRequest={this.handleUpload}
                            fileList={this.state.fileList}
                            listType="picture-card"
                            // onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >{this.state.fileList.length > 5 ? null : <Button type="primary" className="common-submit-button-style ant-upload-text">
                                {messages.qualityManage.uploadPicture}
                            </Button>}

                        </Upload>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 22 }}
                    style={{ textAlign: 'center' }}
                >
                    <Button className="common-submit-button-style" type="primary" htmlType="submit" onClick={this.handSubmit}>{messages.operation.save}</Button>
                    <Button style={{ marginLeft: '2%' }} className="defaul-style-button" type="primary" onClick={this.handleColse}>{messages.operation.close}</Button>
                </FormItem>
            </Form>
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
        addCheckQuestion: (json) => {
            dispatch(addCheckQuestion(json))
        },
        uploadImg: (fileList, objectTypeId) => {
            dispatch(uploadImg({ fileList: fileList, objectTypeId: objectTypeId }))
        },
    }
}

const AddQualityRecordForm = Form.create()(AddQualityRecord)
const AddQualityRecords = connect(mapStateToProps, mapDispatchToProps)(AddQualityRecordForm);
export default AddQualityRecords