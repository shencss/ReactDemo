import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from '../components/Cover';
import RepairHistory from '../components/RepairHistory';

class DeviceDetail extends Component {

    static propTypes = {
        show: PropTypes.bool,
        index: PropTypes.number,
        list: PropTypes.arrayOf(PropTypes.object),
        onClose: PropTypes.func,
        onBill: PropTypes.func
    }

    //点击遮布或关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击立即报修
    handleOnBill(e) {
        if (this.props.onBill) {
            console.log(this.props.list[this.props.index])
            this.props.onBill(e,this.props.list[this.props.index]);
        }
    }

    render() {
        if (this.props.show && this.props.index !== -1 ) {
            const item = this.props.list[this.props.index];
            return(
                <div id="device-detail">
                    <div className="card">
                        <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>X</span>
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
                                        <th>维修历史</th>
                                        <td>{item.history.length > 0 ? '∨' : '无'}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                {item.history.map((item, i) => <RepairHistory historyItem={item} key={i} />)}
                            </div>                       
                        </div>
                        <hr/>
                        <div className="card-btns">
                            <button id="check-warranty">保修状况</button>
                            <button id="bill-now" onClick={this.handleOnBill.bind(this)}>立即报修</button>
                        </div>
                    </div>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)}/>
                </div>
            );
        } else {
            return <div id="device-detail"></div>
        }
    }
}

export default DeviceDetail;