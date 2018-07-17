import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from './Cover';

class BillDetail extends Component {

    static propTypes = {
        item: PropTypes.object
    }

    render () {
        if (this.props.item !== undefined ) {
            return  (
                <div id="billDetail">
                    <div className="card"  style={this.props.show ? {'display': 'block'} : {'display': 'none'}}>
                        <span className="iconfont" id="close-btn">X</span>
                        <span className="card-title">订单详细信息</span><hr/>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>订单编号</th>
                                        <td id="billId">{this.props.item.billId}</td>
                                    </tr>

                                    <tr>
                                        <th>订单时间</th>
                                        <td id="billTime">{this.props.item.billTime}</td>
                                    </tr>

                                    <tr>
                                        <th>订单状态</th>
                                        <td id="billStatus">{this.props.item.billStatus}</td>
                                    </tr>

                                    <tr>
                                        <th>设备名称</th>
                                        <td id="deviceName">{this.props.item.deviceName}</td>
                                    </tr>

                                    <tr>
                                        <th>设备类型</th>
                                        <td id="deviceType">{this.props.item.deviceType}</td>
                                    </tr>

                                    <tr>
                                        <th>维修机构</th>
                                        <td id="organization">{this.props.item.organization}</td>
                                    </tr>

                                    <tr>
                                        <th>预约时间</th>
                                        <td id="appointment">{this.props.item.appointment}</td>
                                    </tr>

                                    <tr>
                                        <th>维修地址</th>
                                        <td id="address">{this.props.item.address}</td>
                                    </tr>

                                    <tr>
                                        <th>联系电话</th>
                                        <td id="phone">{this.props.item.phone}</td>
                                    </tr>

                                    <tr>
                                        <th>故障描述</th>
                                        <td id="description">{this.props.item.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <hr/>
                        <div className="card-btns">
                            <button id="billAgain">再次报修</button>
                            <button id="contactService">联系客服</button>
                            <button id="cancelBill" 
                                style={this.props.item.billTime === '已完成' ? {'display': 'none'} : {}}>撤销报单
                            </button>
                            <button id="checkFinish" 
                                style={this.props.item.billTime === '已完成' ? {} : {'display': 'none'}}>撤销报单
                            </button>
                        </div>
                    </div>
                <Cover show={this.props.show} />
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default BillDetail;