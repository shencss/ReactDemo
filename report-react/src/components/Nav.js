import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Nav extends Component {
    static propTypes = {
        handleClick: PropTypes.func
    }

    constructor () {
        super ();
        this.state = {
            isFocus: 'bill'
        }
    }

    handleClick (id) {
        switch (id) {
            case 'bill':
                this.setState({
                    isFocus: 'bill'
                });
                break;
            case 'device':
                this.setState({
                    isFocus: 'device'
                });
                break;
            case 'contact':
                this.setState({
                    isFocus: 'contact'
                });
                break;
            default:
                this.setState({
                    isFocus: 'bill'
                });
                break;
        }
        if (this.props.onClick) {
            this.props.onClick(id);
        }
    }

    render () {
        return (
            <div className="nav">
                <ul className="nav-list">
                    <li className="nav-item" style={{'color': this.state.isFocus === 'bill' ? '#2196F3' : '#AAA'}} id="nav-bills" onClick={this.handleClick.bind(this,'bill')}>  
                        <span  className="nav-text">我的报单</span>
                    </li>
                    <li className="nav-item" style={{'color': this.state.isFocus === 'device' ? '#2196F3' : '#AAA'}} id="nav-devices" onClick={this.handleClick.bind(this,'device')}>
                        <span  className="nav-text">我的设备</span>
                    </li>
                    <li className="nav-item" style={{'color': this.state.isFocus === 'contact' ? '#2196F3' : '#AAA'}} id="nav-contact" onClick={this.handleClick.bind(this,'contact')}>
                        <span  className="nav-text">联系我们</span>
                    </li>
                </ul>
		    </div>
        );
    }
}

export default Nav;