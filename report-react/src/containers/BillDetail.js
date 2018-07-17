import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from '../components/Cover';
import { connect } from 'react-redux';

class BillDetail extends Component {

    static propTypes = {
        list: PropTypes.array
    }

    handleOnClose () {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    handleOnCancel () {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }

    render () {
        if (this.props.index !== undefined ) {
            let item = this.props.list[this.props.index];
            return  (
                <div id="billDetail">
                    <div className="card"  style={this.props.show ? {'display': 'block'} : {'display': 'none'}}>
                        <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>X</span>
                        <span className="card-title">订单详细信息</span><hr/>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>订单编号</th>
                                        <td>{item.billId}</td>
                                    </tr>

                                    <tr>
                                        <th>订单时间</th>
                                        <td>{item.billTime}</td>
                                    </tr>

                                    <tr>
                                        <th>订单状态</th>
                                        <td>{item.billStatus}</td>
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
                                        <th>维修机构</th>
                                        <td>{item.organization}</td>
                                    </tr>

                                    <tr>
                                        <th>预约时间</th>
                                        <td>{item.appointment}</td>
                                    </tr>

                                    <tr>
                                        <th>维修地址</th>
                                        <td>{item.address}</td>
                                    </tr>

                                    <tr>
                                        <th>联系电话</th>
                                        <td>{item.phone}</td>
                                    </tr>

                                    <tr>
                                        <th>故障描述</th>
                                        <td>{item.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <hr/>
                        <div className="card-btns">
                            <button id="billAgain" style={item.billStatus === '已完成' ? {} : {'display': 'none'}}>再次报修</button>
                            <button id="contactService">联系客服</button>
                            <button id="cancelBill" 
                                style={item.billStatus === '已完成' ? {'display': 'none'} : {}}
                                onClick={this.handleOnCancel.bind(this)}>撤销报单
                            </button>
                            <button id="checkFinish" 
                                style={item.billStatus === '已完成' ? {} : {'display': 'none'}}>完工报告
                            </button>
                        </div>
                    </div>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)}/>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.billList
    }
}

export default connect(mapStateToProps,null)(BillDetail);