/**
 * Created by yuanxh on 2018/8/21.
 */
import React, { Component } from 'react'
import { Form, Input, Row, Col, Upload, Button, Select, DatePicker } from 'antd'
import messages from 'utils/i18n'
import { connect } from 'react-redux'
import { addCheckQuestion, uploadImg } from '@/reducers/checkQuality'
const { TextArea } = Input;
const FormItem = Form.Item;
const Option = Select.Option

class AddCheckForm extends Component {
    state={
        visible: false,
        fileList: [],
    }
    transferVisible = ({ visible, ...props }) => {
        this.setState({
            visible,
            ...props
        })
    }
    handleChange = ({ fileList }) => {
        this.setState({ fileList })
    }
    handSubmit =(e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values['problemId'] = this.props.dataSource['problemId']
                values['status'] = Number(values['status'])
                const json = {
                    objectID: (this.props.type === 'reform' ? 'problemRectification' : 'problemReview'),
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
                <Row>
                    <Col span={12} >
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 8 },
                            }}
                            label={(this.props.type === 'reform' ? messages.qualityManage.actionDoMen : messages.qualityManage.actionCheckMen1) }
                        >
                            {getFieldDecorator((this.props.type === 'reform' ? 'changeName' : 'reviewName'), {
                                rules: [{
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input style={{ width: '75%' }}/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12} style={{ marginLeft: '-3.5%' }}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 5 },
                            }}
                            wrapperCol={{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label={(this.props.type === 'reform' ? messages.qualityManage.actionDate : messages.qualityManage.actionCheckTime)}
                        >
                            {getFieldDecorator((this.props.type === 'reform' ? 'changeTime' : 'reviewTime'), {
                                // rules: [{
                                //     required: true, message: 'Please input your E-mail!',
                                // }],
                            })(
                                <DatePicker placeholder={messages.qualityManage.addFormDatePicker} style={{ width: '96%' }} />
                            )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <FormItem
                            labelCol= {{
                                xs: { span: 24 },
                                sm: { span: 16 },
                            }}
                            wrapperCol= {{
                                xs: { span: 24 },
                                sm: { span: 6 },
                            }}
                            label={messages.qualityManage.questionStatus}
                        >
                            {getFieldDecorator('status', {
                                // rules: [{ required: true, message: 'Please select your gender!' }],
                            })(
                                <Select
                                    style={{ width: '100%' }}
                                    initialValue="1"
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
                    {...formItemLayout}
                    label={(this.props.type === 'reform' ? messages.qualityManage.actionInfo : messages.qualityManage.actionCheckInfo)}
                >
                    {getFieldDecorator((this.props.type === 'reform' ? 'changeDesc' : 'reviewDesc'), {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <TextArea style={{ width: '61%' }}/>
                    )}
                </FormItem>
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

const AddCheckForms = Form.create()(AddCheckForm)
const AddChecks = connect(mapStateToProps, mapDispatchToProps)(AddCheckForms);
export default AddChecks