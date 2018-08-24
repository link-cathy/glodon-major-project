import React from 'react';
import { Row, Col } from 'antd';
import UserInfo from '@/components/UserInfo'

// <Col span={2} md={2} sm={2}></Col>
const MainHeader = ({ title1, title2, ...props }) => (
    <Row className="pocp-layout-header-firstRow-style">
        <Col span={7} md={7} sm={7} className="pocp-layout-header-font-style">
            <span className="unit-icon">
                <UserInfo/>
            </span>
            <span className="unit-name">{title1}</span>
        </Col>
        <Col span={4} md={3} sm={3}></Col>
        <Col span={4} md={4} sm={4}>
            <div className="pocp-layout-header-light-style pocp-layout-header-lightTitle-style">
                <span className="pocp-layout-header-fontWeight-style">{title2}</span>
            </div>
        </Col>
    </Row>
)
export default MainHeader;