/*
* @Author: pansy
* @Date:   2018-06-29 15:09:53
* @Last Modified by:   GRANDSOFT\pansy
* @Last Modified time: 2018-07-11 18:18:42
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Panel extends Component {
    render() {
        const style = {
            height: `${this.props.height}px`
        };
        return (
            <div className="gld-panel" style={style}>
                <div className="gld-panel-header">{this.props.title}</div>
                <div className="gld-panel-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Panel.defaultProps = {
    title: '',
    height: 300
}

Panel.propTypes = {
    title: PropTypes.string,
    height: PropTypes.number
};

export default Panel;