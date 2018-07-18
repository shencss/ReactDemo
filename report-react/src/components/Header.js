import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    
    static propTypes = {
        page: PropTypes.string
    }

    render() {
        let title = '';
        switch (this.props.page) {
            case 'Bill':
                title = '我的报单';
                break;
            case 'Device':
                title = '我的设备';
                break;
            case 'Contact':
                title = '联系我们';
                break;
            default:
                title = '我的报单';
        }
        return(
            <div className="header">
                <span className="header-title">{title}</span>
                <span className="header-btn" id="scan-add-btn">
                    <span id="add-btn">十</span>
                </span>
            </div>
        );
    }
}

export default Header;