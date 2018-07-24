import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from './Cover';
import RepairHistory from './RepairHistory';
import DeviceWarranty from './DeviceWarranty';

class DeviceDetail extends Component {

    static propTypes = {
        show: PropTypes.bool,
        item: PropTypes.object,
        onClose: PropTypes.func,
        onDelete: PropTypes.func,
        onAddBill: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            showWarranty: false
        }
    }

    //点击遮布或关闭按钮
    handleOnClose() {
        this.setState({
            showWarranty: false
        });
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击删除设备
    handleOnDelete() {
        if (this.props.onDelete) {
            this.props.onDelete();
        }
    }

    //点击保修状况
    handleOnCheckWarranty() {
        this.setState({
            showWarranty: true
        });
    }

    //点击立即报修
    handleOnAddBill(e) {
        console.log("PPP")
        if (this.props.onAddBill) {
            this.props.onAddBill(e,this.props.item);
        }
    }

    render() {
        if (this.props.show) {
            const item = this.props.item;
            if (!this.state.showWarranty) {
                return(
                    <div id="device-detail">
                        <div className="card">
                            <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</span>
                            <span className="card-title">设备详细信息</span><hr/>
                            <div className="table-container">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>设备编号</th>
                                            <td>{item.deviceId}</td>
                                        </tr>
                                        <tr>
                                            <th>设备名称</th>
                                            <td>{item.deviceName}</td>
                                        </tr>
                                        <tr>
                                            <th>设备类型</th>
                                            <td>{item.deviceType}</td>
                                        </tr>
                                        <tr>
                                            <th>设备型号</th>
                                            <td>{item.model}</td>
                                        </tr>
                                        <tr>
                                            <th>设备厂商</th>
                                            <td>{item.manufacture}</td>
                                        </tr>
                                        <tr>
                                            <th>维修历史</th>
                                            <td>{item.history.length > 0 ? '∨' : '无'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div id="repair-history">
                                    {item.history.map((item, i) => <RepairHistory history={item} key={i} />)}
                                </div>                       
                            </div>
                            <hr/>
                            <div className="card-btns">
                                <button id="check-warranty" onClick={this.handleOnCheckWarranty.bind(this)}>保修状况</button>
                                <button id="bill-now" onClick={this.handleOnAddBill.bind(this)}>立即报修</button>
                                <button id="delete-btn" onClick={this.handleOnDelete.bind(this)}>删除设备</button>
                            </div>
                        </div>
                    <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)}/>
                    </div>
                );
            } else {
                return(
                    <div id="device-detail">
                    <DeviceWarranty item={this.props.item} onClose={this.handleOnClose.bind(this)} />
                    <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
                    </div>
                );
            }
        } else {
            return <div id="device-detail"></div>
        }
    }
}

export default DeviceDetail;