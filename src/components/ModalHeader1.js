/**
 * Created by yuanxh on 2018/7/6.
 */
import React from 'react'
import { Row, Col, Dropdown, Menu, Icon } from 'antd'
import messages from 'utils/i18n'
import topStyle from '../styles/components/images/top_style.png'

const ModalHeader = ({ modalData }) => {
    const projectMenu = (modalData ? modalData.projectList : '');
    const projectData = (modalData ? modalData.projectInfo : '');
    const menu = (
        <Menu>
            {
                (projectMenu instanceof Array && projectMenu.length > 0 ?
                    projectMenu.map((obj, index) => (
                        <Menu.Item key={index}>{obj}</Menu.Item>
                    ))
                    : '')
            }
        </Menu>
    );
    return (
        <Row style={{ lineHeight: '2' }}>
            <Row className="modal-header-border-style"><img src={topStyle} /></Row>
            <Col span={1} style={{ width: '3%' }}></Col>
            <Col span={9} >
                <span className="modal-header-title">{messages.processInfo.modalTitleProjectName}</span>
                <Row className="modal-header-dropdown">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <span className="ant-dropdown-link">
                            {(modalData ? modalData.currentProject : '')} <Icon type="down" />
                        </span>
                    </Dropdown>
                </Row>
            </Col>
            <Col span={1}>
                <div className="modal-header-path-line">
                </div>
            </Col>
            <Col span={12}>
                {
                    messages.processInfo.modalTitleShow.map((obj, index) => (
                        <Row key={index}>
                            { obj.name.map((obj1, index1) => (
                                <div key={index1}>
                                    <Col span={3}>{obj1}</Col>
                                    <Col span={4}>{projectData[index1]}</Col>
                                </div>
                            ))
                            }
                        </Row>
                    ))
                }
            </Col>
        </Row>
    ) }

export default ModalHeader;