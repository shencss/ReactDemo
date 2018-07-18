import React, { Component } from 'react';
import TakeBill from '../components/TakeBill';
import List from '../components/List';
import Contact from '../components/Contact';
import Prompt from '../components/Prompt'
import BillDetail from '../containers/BillDetail';
import DeviceDetail from '../containers/DeviceDetail';
import { connect } from 'react-redux';
import { addBillItem, deleteBillItem } from '../reducers/reducer';
import PropTypes from 'prop-types';

class Body extends Component {

    static propTypes = {
        page: PropTypes.string,
        billList: PropTypes.arrayOf(PropTypes.object),
        deviceList: PropTypes.arrayOf(PropTypes.object),
        onAddBillItem: PropTypes.func,
        onDeleteBillItem: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            index: -1,
            takeBill: false,
            showPrompt: false,
            showDetail: false
        }
    }

    //往localstorage中添加一条报单
    _addBillItem(item) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.unshift(item);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //在localstorage中删除一条报单
    _deleteBillItem(index) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.splice(index, 1);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //处理报单的提交
    handleOnSubmit(billItem) {
        this._addBillItem(billItem);
        if (this.props.onAddBillItem) {
            this.props.onAddBillItem(billItem);
        }
        this.setState({
            takeBill: false
        });
    }

    //在列表项中点击撤销
    handleOnCancel(index) {
        this.setState({
            index: index,
            showDetail: false,
            showPrompt: true
        });
    }

     //在列表项中点击查看
     handleOnCheck(index) {
        this.setState({
            index: index,
            showDetail: true
        });
    }

    //在详细信息中点击再次/马上报修
    handleOnBill() {
        this.setState({
            takeBill: true,
            showDetail: false
        });
    }

    //点击遮布或者关闭按钮
    handleOnClose() {
        this.setState({
            index: -1,
            takeBill: false,
            showDetail: false,
            showPrompt: false
        });
    }

     //确认撤销
     handleOnConfirmCancel() {
        this._deleteBillItem(this.state.index);
        if (this.props.onDeleteBillItem) {   
            this.props.onDeleteBillItem(this.state.index);
        }
        this.setState({
            showPrompt: false,
            index: -1
        });
    }

     //取消撤销
     handleOnRecallCancel() {
        this.setState({
            showPrompt: false,
            index: -1
        });
    }


    render() {
        switch (this.props.page) {
            case 'Bill':
                return(
                    <div className="body">
                        <div id="bill-page">
                            <List list={this.props.billList} onCancel={this.handleOnCancel.bind(this)} onCheck={this.handleOnCheck.bind(this)} />
                            <BillDetail show={this.state.showDetail} index={this.state.index} list={this.props.billList}
                                onClose={this.handleOnClose.bind(this)} onCancel={this.handleOnCancel.bind(this)} onBill={this.handleOnBill.bind(this)}
                            />
                            <Prompt show={this.state.showPrompt} onConfirmClick={this.handleOnConfirmCancel.bind(this)} 
                                onRecallClick={this.handleOnRecallCancel.bind(this)} onClose={this.handleOnClose.bind(this)}   
                            />
                        </div>
                        <TakeBill show={this.state.takeBill} page={this.props.page} 
                            onSubmit={this.handleOnSubmit.bind(this)} onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                        />
                    </div>
                );
            case 'Device':
                return(
                    <div className="body">
                        <div id="device-page">
                            <List list={this.props.deviceList} onCheck={this.handleOnCheck.bind(this)} />
                            <DeviceDetail show={this.state.showDetail} index={this.state.index} list={this.props.deviceList} 
                                onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                            />
                        </div>
                        <TakeBill show={this.state.takeBill} page={this.props.page} 
                            onSubmit={this.handleOnSubmit.bind(this)} onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                        />
                    </div>
                );
            case 'Contact':
                return(
                    <div className="body">
                        <div id="contact-page">
                            <Contact />
                        </div>
                        <TakeBill show={this.state.takeBill} page={this.props.page} 
                            onSubmit={this.handleOnSubmit.bind(this)} onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                        />
                    </div>
                );
            default:
                return
        }
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        billList: state.billList,
        deviceList: state.deviceList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBillItem: (billItem) => {
            dispatch(addBillItem(billItem));
        },
        onDeleteBillItem: (index) => {
            dispatch(deleteBillItem(index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);