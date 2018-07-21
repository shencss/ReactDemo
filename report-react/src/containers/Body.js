import React, { Component } from 'react';
import TakeBill from '../components/TakeBill';
import List from '../components/List';
import Contact from '../components/Contact';
import { connect } from 'react-redux';
import { addBillItem } from '../reducers/reducer';
import PropTypes from 'prop-types';

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
            takeBill: false,
            load: {}
        }
    }

    //往localstorage中添加一条报单
    _addBillItem(item) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.unshift(item);
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

    //在详细信息中点击再次/马上报修
    handleOnBill(e,load) {
        this.setState({
            takeBill: true,
            //load是为了实现再次/立即报修时将信息load进表单中
            load: load
        });
    }

    //点击遮布或者关闭按钮或点击取消
    handleOnClose() {
        this.setState({
            takeBill: false,
            load: {}
        });
    }

    

    render() {
        if (this.props.page !== 'Contact') {
            return(
                <div className="body">
                    <div id={this.props.page === 'Bill' ? "bill-page" : 'device-page'}>
                        <List list={this.props.page === 'Bill' ? this.props.billList : this.props.deviceList} onBill={this.handleOnBill.bind(this)} />
                    </div>
                    <TakeBill show={this.state.takeBill} page={this.props.page} load={this.state.load}
                        onSubmit={this.handleOnSubmit.bind(this)} onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                    />
                </div>
            );
        } else {
            return(
                <div className="body">
                    <div id="contact-page">
                        <Contact />
                    </div>
                    <TakeBill page={this.props.page}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(Body);