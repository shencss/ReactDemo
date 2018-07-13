import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    static propTypes = {
        item: PropTypes.object
    }

    render () {
        return (
            <li className="item">
                <span className="item-title" >{this.props.item.billId}</span>
                <span className="item-status">{this.props.item.billStatus}</span><br/>
                <span className="item-time">{this.props.item.deviceName+' '+this.props.item.billTime.substr(5)}</span>
                <span className="control">
                    <button id="checkBill" >查看</button>
                    <button id="cancelBill">撤销</button>
                </span>
            </li>
        );
    }
}

export default Item;