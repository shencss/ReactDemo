import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {

    static propTypes = {
        item: PropTypes.object,
        key: PropTypes.number,
        index: PropTypes.number,
        onCancel: PropTypes.func,
        onCheck: PropTypes.func
    }

    //构造函数只在第一次实例化时调用

    //点击撤销按钮
    handleOnCancel() {
        if (this.props.onCancel) {
            this.props.onCancel(this.props.index);
        }
    }

    //点击查看按钮
    handleOnCheck() {
        if (this.props.onCheck) {
            this.props.onCheck(this.props.index);
        }
    }

    render() {
        return(
            <li className="item">
                <span className="item-title" >{this.props.item.billId ? this.props.item.billId : this.props.item.deviceName}</span>
                <span className="item-status">{this.props.item.billId ? this.props.item.billStatus : this.props.item.deviceStatus}</span><br/>
                <span className="item-time">{this.props.item.billId ? this.props.item.deviceName + ' '+ this.props.item.billTime.substr(5) : '设备编号:'+this.props.item.deviceId}</span>
                <span className="control">
                    <button id="check-btn" onClick={this.handleOnCheck.bind(this)}>查看</button>
                    <button id="cancel-btn" style={(this.props.item.billId && this.props.item.billStatus !== '已完成')? {} : {'display': 'none'} }
                        onClick={this.handleOnCancel.bind(this)}>撤销
                    </button>
                </span>
            </li>
        );
    }
}

export default Item;