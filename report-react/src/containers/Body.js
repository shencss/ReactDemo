import React, { Component } from 'react';
import Page from './Page';
import TakeBill from '../containers/TakeBill';
import { connect } from 'react-redux';
import { addBillItem, toggleCover } from '../reducers/reducer';

class Body extends Component {


    _addBill (item) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.unshift( item);
        localStorage.setItem('report_data',JSON.stringify(data));
    }


    handleSubmit (billItem) {
        this._addBill (billItem);
        if (this.props.onSubmit) {
            this.props.onSubmit(billItem);
        }
    }

    handleCoverClick () {
        if (this.props.onCoverClick) {
            this.props.onCoverClick();
        }
    }

    render () {
        return (
            <div className="body">
                <Page toggleCover={this.handleCoverClick.bind(this)}/>
                <TakeBill page={this.props.page} onSubmit={this.handleSubmit.bind(this)}/>
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        cover: state.cover,
        billList: state.billList,
        deviceList: state.deviceList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (billItem) => {
            dispatch(addBillItem(billItem));
        },
        onCoverClick: () => {
            dispatch(toggleCover())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);