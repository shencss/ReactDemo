import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    static propTypes = {
        item: PropTypes.object
    }
    constructor (props) {
        super (props);
        this.state = {
            item: props.item
        }
    }

    render () {
        return (
            <li className="item">
                <span className="item-title" >{this.state.item.billId ? this.state.item.billId : this.state.item.deviceName}</span>
                <span className="item-status">{this.state.item.billId ? this.state.item.billStatus : this.state.item.deviceStatus}</span><br/>
                <span className="item-time">{this.state.item.billId ? this.state.item.deviceName + ' '+ this.state.item.billTime.substr(5) : '设备编号:'+this.state.item.deviceId}</span>
                <span className="control">
                    <button id="checkBill" >查看</button>
                    <button id="cancelBill">撤销</button>
                </span>
            </li>
        );
    }
}

export default Item;