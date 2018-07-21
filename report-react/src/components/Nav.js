import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {

    static propTypes = {
        page: PropTypes.string,
        onClick: PropTypes.func
    }

    //点击底部导航切换页面
    handleOnNav(e) {
        if (this.props.onNav) {
            this.props.onNav(e.target.id);
        }
    }

    render() {
        return(
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item" style={{'color': this.props.page === 'Bill' ? '#2196F3' : '#AAA'}} 
                        id="nav-bill" onClick={this.handleOnNav.bind(this)}>
                        <i className="iconfont" id="nav-bill">&#xe6de;</i>
					    我的报单
                    </li>
                    <li className="nav-item" style={{'color': this.props.page === 'Device' ? '#2196F3' : '#AAA'}} 
                        id="nav-device" onClick={this.handleOnNav.bind(this)}>
                        <i className="iconfont" id="nav-device">&#xe64b;</i>
						我的设备
                    </li>
                    <li className="nav-item" style={{'color': this.props.page === 'Contact' ? '#2196F3' : '#AAA'}} 
                        id="nav-contact" onClick={this.handleOnNav.bind(this)}>
                        <i className="iconfont" id="nav-contact">&#xe704;</i>
						联系我们
                    </li>
                </ul>
		    </div>
        );
    }
}

export default Nav;