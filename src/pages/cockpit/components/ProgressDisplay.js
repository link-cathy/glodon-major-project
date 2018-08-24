/**
 * Created by fancl on 2018/7/3.
 */
import React, { Component } from 'react'

import messages from 'utils/i18n'

class ProgressDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // count: 0,
            videoShow: true
        }
    }

    handleClick() {
        this.setState({
            // count: ++this.state.count,
            videoShow: !this.state.videoShow
        })
    }

    render() {
        return (
            <div className="middle" style={{ height: 460 }}>
                <div className="middle-content">
                    <div id="m_audio" className={this.state.videoShow ? '' : 'hidden'}>
                        <video id="miracle_video" src={require('../../../resource/video/theportalprogress.mp4')} muted controls="controls" autoPlay loop="loop" style={{ width: '100%', height: '440px' }}>
                            您的浏览器不支持 video 标签。
                        </video>
                    </div>
                    <img id="miracle_image" className={this.state.videoShow ? 'hidden' : ''} src={require('../../../resource/image/szzg.jpg')} alt="福州数字中国会展中心" style={{ height: '440px', width: '100%' }} />
                    <div className="div-tab">
                        <div className={this.state.videoShow ? 'div-btn-item  div-btn-item-selected' : 'div-btn-item'} src="resource/video/theportalprogress.mp4" onClick={() => this.handleClick()}>
                            {messages.homePage.imageProgress}
                        </div>
                        <div className={this.state.videoShow ? 'div-btn-item' : 'div-btn-item div-btn-item-selected'} onClick={() => this.handleClick()}>
                            {messages.homePage.effectMap}
                        </div>
                    </div>
                </div>
                <span className="icon-corner icon-corner-nw"></span>
                <span className="icon-corner icon-corner-ne"></span>
                <span className="icon-corner icon-corner-sw"></span>
                <span className="icon-corner icon-corner-se"></span>
            </div>
        )
    }
}

export default ProgressDisplay;