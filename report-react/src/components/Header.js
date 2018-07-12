import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    
    static propTypes = {
        title: PropTypes.string
    }

    render () {
        return (
            <div className="header">
                <span className="title">{this.props.title}</span>
                <span className="header-btn" id="scan-add-btn">
                    <span id="add-btn">+</span>
                </span>
            </div>

        );
    }
}

export default Header;