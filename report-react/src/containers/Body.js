import React, { Component } from 'react';
import AddBill from '../components/AddBill';
import List from '../components/List';
import { connect } from 'react-redux';
import { addBillItem } from '../reducers/reducer';
import PropTypes from 'prop-types';
import ContactContainer from './ContactContainer';

class Body extends Component {

    static propTypes = {
        page: PropTypes.string,
        billList: PropTypes.arrayOf(PropTypes.object),
        deviceList: PropTypes.arrayOf(PropTypes.object),
        onAddBillItem: PropTypes.func,
    }

    constructor() {
        super();
        this.state = {
            addBill: false,
            addDevice: false,
            load: {}
        }
    }

    //往localstorage中添加一条报单
    _addBillItem(item) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.unshift(item);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //点击报修或在详细信息中点击再次/马上报修
    handleOnAddBill(e,load) {
        this.setState({
            addBill: true,
            //load是为了实现再次/立即报修时将信息load进表单中
            load: load
        });
    }

    //处理报单的提交
    handleOnSubmitBill(billItem) {
        this._addBillItem(billItem);
        if (this.props.onAddBillItem) {
            this.props.onAddBillItem(billItem);
        }
        this.setState({
            addBill: false
        });
    }

    //点击右上角+号添加按钮
    handleOnAddDevice() {
        this.setState({
            addDevice: true
        })
    }

    //处理设备的添加
    handleOnSubmitDevice(deviceItem) {
        this._addDeviceItem(deviceItem);
        if (this.props.onAddDeviceItem) {
            this.props.onAddDeviceItem(deviceItem);
        }
    }

    //点击遮布或者关闭按钮或点击取消
    handleOnClose() {
        this.setState({
            addBill: false,
            addDevice: false,
            load: {}
        });
    }

    render() {
        if (this.props.page !== 'Contact') {
            return(
                <div className="body">
                    <div id={this.props.page === 'Bill' ? "bill-page" : "device-page"}>
                        <List list={this.props.page === 'Bill' ? this.props.billList : this.props.deviceList} onAddBill={this.handleOnAddBill.bind(this)} />
                    </div>
                    <AddBill show={this.state.addBill} load={this.state.load}
                        onSubmit={this.handleOnSubmitBill.bind(this)} onClose={this.handleOnClose.bind(this)} onAddBill={this.handleOnAddBill.bind(this)}
                    />
                </div>
            );
        } else {
            return(
                <div className="body">
                    <ContactContainer />
                    <AddBill page={this.props.page}/>
                </div>
            );
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);