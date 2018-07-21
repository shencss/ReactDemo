import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    
    static propTypes = {
        page: PropTypes.string,
        onAddDevice: PropTypes.func
    }

    //点击右上角的+号添加设备
    handleOnAddDevice() {
        if (this.props.onAddDevice) {
            this.props.onAddDevice();
        }
    }
    
    render() {
        let title = '';
        let i = '';
        switch (this.props.page) {
            case 'Bill':
                title = '我的报单';
                i = <i className="iconfont" id="scan-btn">&#xe6d7;</i>
                break;
            case 'Device':
                title = '我的设备';
                i = <i className="iconfont" id="add-btn" onClick={this.handleOnAddDevice.bind(this)}>&#xe6df;</i>;
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
                    {i}
                </span>
            </div>
        );
    }
}

export default Header;