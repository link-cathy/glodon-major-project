/**
 * Created by yuanxh on 2018/7/6.
 */
import React from 'react'
import { Row } from 'antd'
import topStyle from '../styles/components/images/top_style.png'

const ModalHeader = ({ title }) => {
    return (
        <Row style={{ lineHeight: '2' }}>
            <Row className="modal-header-border-style"><img src={topStyle} /></Row>
            <Row className="pocp-modal-title-style">{title}</Row>
        </Row>
    ) }

export default ModalHeader;