import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
    static propTypes = {
        handleClick: PropTypes.func
    }

    constructor () {
        super ();
        this.state = {
            isFocus: 'nav-bill'
        }
    }

    handleClick (e) {
        this.setState({
            isFocus: e.target.id
        })

        if (this.props.onClick) {
            this.props.onClick(e.target.id);
        }
    }

    render () {
        return (
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item" style={{'color': this.state.isFocus === 'nav-bill' ? '#2196F3' : '#AAA'}} id="nav-bill" onClick={this.handleClick.bind(this)}>  
                    我的报单
                    </li>
                    <li className="nav-item" style={{'color': this.state.isFocus === 'nav-device' ? '#2196F3' : '#AAA'}} id="nav-device" onClick={this.handleClick.bind(this)}>
                    我的设备
                    </li>
                    <li className="nav-item" style={{'color': this.state.isFocus === 'nav-contact' ? '#2196F3' : '#AAA'}} id="nav-contact" onClick={this.handleClick.bind(this)}>
                    联系我们
                    </li>
                </ul>
		    </div>
        );
    }
}

export default Nav;