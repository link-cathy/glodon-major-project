/**
 * Created by yuanxh on 2018/7/3.
 */

import React from 'react';
import MediaInfo from './MediaInfo'
import { Row, Col } from 'antd';
import ProjectRightInfo from './ProjectRightInfo'
import pathStyle from '../../../styles/processInfo/images/path18@1x.png'
const ProcessContent = ({ ...props }) => {
    return (
        <Row className="pocp-layout-common-style">
            <MediaInfo/>
            <Col span={1} className="pocp-process-header-light-style">
                <img src={pathStyle} height={700}/>
            </Col>
            <ProjectRightInfo
                {...props}
            >
            </ProjectRightInfo>
        </Row>
    ) }
export default ProcessContent;
