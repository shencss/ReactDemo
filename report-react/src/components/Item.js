import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    static propTypes = {
        item: PropTypes.object
    }
    //构造函数只在第一次实例化时调用

    handleCancel () {
        console.log(this.props.index)
        if (this.props.onCancel) {
            this.props.onCancel(this.props.index);
        }
    }

    render () {
        return (
            <li className="item">
                <span className="item-title" >{this.props.item.billId ? this.props.item.billId : this.props.item.deviceName}</span>
                <span className="item-status">{this.props.item.billId ? this.props.item.billStatus : this.props.item.deviceStatus}</span><br/>
                <span className="item-time">{this.props.item.billId ? this.props.item.deviceName + ' '+ this.props.item.billTime.substr(5) : '设备编号:'+this.props.item.deviceId}</span>
                <span className="control">
                    <button id="checkBtn" >查看</button>
                    <button id="cancelBtn" style={(this.props.item.billId && this.props.item.billStatus !== '已完成')? {} : {'display': 'none'} }
                        onClick={this.handleCancel.bind(this)}>撤销</button>
                </span>
            </li>
        );
    }
}

export default Item;