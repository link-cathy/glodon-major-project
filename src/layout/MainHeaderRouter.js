import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import headerLight from '../styles/layout/images/header-light.png';

const MainHeaderContainer = ({ leftNavBar, rightNavBar }) => (
    <Row className="pocp-layout-layout-background-style">
        <Col span={9}>
            <Row className="pocp-layout-header-light-style">
                <Col span={9} ></Col>
                {
                    leftNavBar.map((obj, index) => (
                        <Col span={4} md={5} sm={5} key={index} className="pocp-layout-header-nvaBar-style">
                            <Link to={obj.url}><span>{obj.name}</span></Link>
                        </Col>
                    ))
                }
            </Row>
        </Col>
        <Col span={1} md={1} sm={1} className="pocp-layout-header-common-style"></Col>
        <Col span={3} className="pocp-layout-header-middle-style">
            <div>
                <img src={headerLight} width={'100%'} height={'60px'}/>
            </div>
        </Col>
        <Col span={1} md={1} sm={1} className="pocp-layout-header-common-style"></Col>
        <Col span={8}>
            <Row className="pocp-layout-header-light-style">
                {
                    rightNavBar.map((obj, index) => (
                        <Col span={4} md={5} sm={5} key={index} className="pocp-layout-header-nvaBar-right-style">
                            <Link to ={obj.url}><span>{obj.name}</span></Link>
                        </Col>
                    ))
                }
            </Row>
        </Col>
    </Row>
)
export default MainHeaderContainer;