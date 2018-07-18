import React, { Component } from 'react';
import TakeBill from '../components/TakeBill';
import List from '../components/List';
import Contact from '../components/Contact';
import Prompt from '../components/Prompt'
import BillDetail from '../containers/BillDetail';
import DeviceDetail from '../containers/DeviceDetail';
import { connect } from 'react-redux';
import { addBillItem, deleteBillItem } from '../reducers/reducer';

class Body extends Component {

    constructor () {
        super ();
        this.state = {
            takeBill: false,
            index: undefined,
            showPrompt: false,
            showDetail: false
        }
    }

    _addBillItem (item) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.unshift( item);
        localStorage.setItem('report_data',JSON.stringify(data));
    }

    //在localstorage中删除一条报单
    _deleteBillItem (index) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.splice(index, 1);
        localStorage.setItem('report_data',JSON.stringify(data));
    }


    handleOnSubmit (billItem) {
        this._addBillItem (billItem);
        if (this.props.onAddBillItem) {
            this.props.onAddBillItem(billItem);
        }
        this.setState({
            takeBill: false
        })
    }

    //点击撤销
    handleOnCancel (index) {
        this.setState({
            showPrompt: true,
            index: index
        });
    }

     //点击查看
     handleOnCheck (index) {
        this.setState({
            index: index,
            showDetail: true
        });
    }

    handleOnBill () {
        this.setState({
            takeBill: true,
            showDetail: false
        });
    }

    handleOnClose () {
        this.setState({
            index: undefined,
            takeBill: false,
            showDetail: false,
            showPrompt: false
        })
    }

     //确认撤销
     handleOnConfirmCancel () {
        this._deleteBillItem (this.state.index);
        if (this.props.onDeleteBillItem) {   
            this.props.onDeleteBillItem(this.state.index);
        }
        this.setState({
            showPrompt: false,
            index: undefined
        });
    }

     //取消撤销
     handleOnRecallCancel () {
        this.setState({
            showPrompt: false,
            index: undefined
        });
    }


    render () {
        switch (this.props.page) {
            case 'Bill':
                return (
                    <div className="body">
                        <div id="bill-page">
                            <List list={this.props.billList} onCancel={this.handleOnCancel.bind(this)} onCheck={this.handleOnCheck.bind(this)} />
                            <BillDetail show={this.state.showDetail} index={this.state.index} 
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
                return (
                    <div className="body">
                        <div id="device-page">
                            <List list={this.props.deviceList} onCheck={this.handleOnCheck.bind(this)} />
                            <DeviceDetail show={this.state.showDetail} index={this.state.index} onClose={this.handleOnClose.bind(this)} />
                        </div>
                        <TakeBill show={this.state.takeBill} page={this.props.page} 
                            onSubmit={this.handleOnSubmit.bind(this)} onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                        />
                    </div>
                );
            case 'Contact':
                return (
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