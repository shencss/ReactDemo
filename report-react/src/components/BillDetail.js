import React, { Component } from 'react';
import Cover from '../components/Cover';
import BillReport from '../components/BillReport';
import PropTypes from 'prop-types';

class BillDetail extends Component {

    static propTypes = {
        show: PropTypes.bool,
        item: PropTypes.object,
        onClose: PropTypes.func,
        onCancel: PropTypes.func,
        onDelete: PropTypes.func,
        onAddBill: PropTypes.func
    }
    
    constructor() {
        super();
        this.state = {
            showReport: false
        }
    }

    //点击遮布或关闭按钮
    handleOnClose() {
        this.setState({
            showReport: false
        })
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击撤销报单
    handleOnCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }

    //点击再次报修
    handleOnAddBill(e) {
        if (this.props.onAddBill) {
            //this.props.item是为了将这个报单的信息传给表单
            this.props.onAddBill(e,this.props.item);
        }
    }

    //点击完工报告
    handleOnReport() {
        this.setState({
            showReport: true
        });
    }

    render() {
        if (this.props.show) {
            const item = this.props.item
            if (!this.state.showReport) {
                return(
                    <div id="bill-detail">
                        <div className="card">
                        
                            <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</span>
                            <span className="card-title">订单详细信息</span>
                            <hr/>
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
                                        <tr>
                                            <th>备注信息</th>
                                            <td>{item.remark}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <hr/>
                            <div className="card-btns">
                                <button id="bill-again" style={item.billStatus === '已完成' ? {} : {'display': 'none'}}
                                    onClick={this.handleOnAddBill.bind(this)}>再次报修
                                </button>
                                <button id="contact-service">联系客服</button>
                                <button id="cancel-bill" 
                                    style={item.billStatus === '已完成' ? {'display': 'none'} : {}}
                                    onClick={this.handleOnCancel.bind(this)}>撤销报单
                                </button>
                                <button id="check-report" style={item.billStatus === '已完成' ? {} : {'display': 'none'}}
                                    onClick={this.handleOnReport.bind(this)}>完工报告
                                </button>
                            </div>
                        </div>
                        <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />                       
                    </div>
                );
            } else {
                return(
                    <div id="bill-detail">
                        <BillReport item={this.props.item} onClose={this.handleOnClose.bind(this)}/>
                        <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
                    </div>
                )
            }
        } else {
            return(
                <div id="bill-detail">
                </div>
            )
        }
    }
}

export default BillDetail;