/**
 * Created by yuanxh on 2018/6/27.
 */
import React, { Component } from 'react'
import { Modal } from 'antd'
import ModalHeader from './ModalHeader'

class ModalInfo extends Component {
    handleCancel = (e) => {
        this.props.transferVisible(false)
    }
    componentDidMount() {
        console.log(this.props, 888888888)
    }
    render() {
        return (
            <Modal
                // style = {{ height: '80%' }}
                width= {1000}
                footer={false}
                bodyStyle = {{ height: '84%' }}
                onCancel={this.handleCancel}
                onOk = {this.handleOk}
                title={<ModalHeader title={this.props.modalTitle}></ModalHeader>}
                visible={this.props.visible}
                {...this.props}
            >
                <this.props.Contents {...this.props._props}/>
            </Modal>
        )
    }
}

export default ModalInfo;