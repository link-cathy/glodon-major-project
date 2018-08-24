import React, { Component } from 'react'
// import ReactDom from 'react-dom'
//
// import messages from 'utils/i18n'
//
// import { Provider } from 'react-redux'
//
// import store from '../../store/store'

import CockpitContent from './components/Cockpit'
// import { Row, Col } from 'antd'

export default class Cockpit extends Component {

    componentDidMount() {
        // this.props.getProjectProfileInfo()
    }

    render() {
        // const headerLeftDiv = (
        //     <div>
        //         <a href="/cockpit" className="menu-item">{messages.cockpit}</a>
        //         <a href="/process" className="menu-item">{messages.process}</a>
        //         <a href="/labors" className="menu-item">{messages.labors}</a>
        //     </div>
        // )
        //
        // const headerRightDiv = (
        //     <div>
        //         <a href="/quality" className="menu-item toright">{messages.quality}</a>
        //         <a href="/safety" className="menu-item toright">{messages.safety}</a>
        //         <a href="/surveillance" className="menu-item toright">{messages.surveillance}</a>
        //     </div>
        // )

        return (
            <div>
                <CockpitContent />
                {/* <!-- */}
                {/* 每个页面的功能个UI写在这里，不需要去引入header组件 */}
                {/* --> */}
                {/* <div id="frame" className="div-body"> */}
                {/* <div className="div-content"> */}
                {/* <Row> */}
                {/* <div className="left"> */}
                {/* <ProjectOverview /> */}
                {/* <WorkRemind /> */}
                {/* </div> */}
                {/* <ProgressDisplay /> */}
                {/* <div className="right"> */}
                {/* <div className="content-up"> */}
                {/* <ProjectProgress/> */}
                {/* <Weather/> */}
                {/* </div> */}
                {/* <ProgressElement/> */}
                {/* </div> */}
                {/* </Row> */}
                {/* <Row> */}
                {/* <div className="left"> */}
                {/* <FinanceDynamic/> */}
                {/* </div> */}
                {/* <div className="middlerow"> */}
                {/* <div className="contentmiddle"> */}
                {/* <QualityChart/> */}
                {/* <SafetyChart/> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="right"> */}
                {/* <GreenConstruction/> */}
                {/* </div> */}
                {/* </Row> */}
                {/* <Row> */}
                {/* <div className="left"> */}
                {/* <ProjectTeam/> */}
                {/* </div> */}
                {/* <div className="middlerow"> */}
                {/* <div className="contentmiddle"> */}
                {/* <LaborsChart/> */}
                {/* <DeviceInfo/> */}
                {/* </div> */}
                {/* </div> */}
                {/* <div className="right"> */}
                {/* <Monitor/> */}
                {/* </div> */}
                {/* </Row> */}
                {/* </div> */}
                {/* </div> */}
            </div>
        )
    }
}
