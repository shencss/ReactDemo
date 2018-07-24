import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackContainer from '../containers/FeedbackContainer';

class BillReprot extends Component {

    static propTypes = {
        item: PropTypes.object,
        onClose: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            goFeedback: false
        }
    }

    //点击关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击我要反馈
    handleOnFeedback() {
        this.setState({
            goFeedback: true
        });
    }

    render() {
        if (!this.state.goFeedback) {
            return(
                <div id="bill-report">
                    <div className="card">
                        <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</span>
                        <span className="card-title">完工报告信息</span>
                        <hr/>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>完工时间</th>
                                        <td>{this.props.item.report.finishTime}</td>
                                    </tr>
                                    <tr>
                                        <th>维修机构</th>
                                        <td>{this.props.item.report.organization}</td>
                                    </tr>
                                    <tr>
                                        <th>维修人员</th>
                                        <td>{this.props.item.report.repairer}</td>
                                    </tr>
                                    <tr>
                                        <th>维修结果</th>
                                        <td>{this.props.item.report.result}</td>
                                    </tr>
                                    <tr>
                                        <th>维修明细</th>
                                        <td>∨</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div id="repair-detail">
                                <table id="repair-detail-table">
                                    <tbody>
                                        <tr>
                                            <th>报单编号</th>
                                            <td>{this.props.item.billId}</td>
                                        </tr>               
                                        <tr>
                                            <th>设备编号</th>
                                            <td>{this.props.item.report.detail.deviceId}</td>
                                        </tr>                    
                                        <tr>
                                            <th>设备故障</th>
                                            <td>{this.props.item.report.detail.description}</td>
                                        </tr>                   
                                        <tr>
                                            <th>维修费用</th>
                                            <td>{this.props.item.report.detail.money}</td>
                                        </tr>                   
                                    </tbody> 
                                </table>
                            </div>
                        </div>
                        <hr/>
                        <div className="card-btns">
                            <button id="feedback-btn" onClick={this.handleOnFeedback.bind(this)}>我要反馈</button>
                        </div>	
                    </div>
                </div>
            );
        } else {
            return(
                <div id="bill-report">
                    <FeedbackContainer index={this.props.index} onClose={this.handleOnClose.bind(this)} />
                </div>
            );
        }
    }
}

export default BillReprot;