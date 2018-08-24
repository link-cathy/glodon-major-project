/**
 * Created by yuanxh on 2018/7/6.
 */
import React from 'react'
import { Row, Col } from 'antd'
import DateTime from './DateTime';
import DownTown from './DownTown'
import messages from 'utils/i18n'

const ModalTabBarRight = ({ currentTime }) => (
    <Row className="ModalTabBarRightFont">
        <Col span={7} className="ModalTabBarTimeFont">
            {messages.processInfo.modalRightTitle}
        </Col>
        <Col span={2} className="ModalTabBarTimeFont">
            {(currentTime ? currentTime : '')}
        </Col>
        <Col span={2} className="ModalTabBarTimeComFont">
            时间范围
        </Col>
        <Col span={8} >
            <DateTime/>
        </Col>
        <Col span={4} >
            <DownTown/>
        </Col>
    </Row>
)

export default ModalTabBarRight;