import React, { Component } from 'react';
import BillPage from './BillPage';
import DevicePage from './DevicePage';
import ContactPage from './ContactPage';
import TakeBill from '../components/TakeBill';
import { connect } from 'react-redux';
import { addBillItem } from '../reducers/reducer';

class Body extends Component {



    handleSubmit (billItem) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.unshift(billItem);
        localStorage.setItem('report_data',JSON.stringify(data));
        if (this.props.onSubmit) {
            this.props.onSubmit(billItem);
        }
    }

    handleClick () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render () {
        switch (this.props.page) {
            case 'Bill':
                return <div className="body"><BillPage list={this.props.list}/><TakeBill page={this.props.page} onSubmit={this.handleSubmit.bind(this)}/></div>
            case 'Device':
                return <div className="body"><DevicePage /><TakeBill page={this.props.page} /></div>
            case 'Contact':
                return <div className="body"><ContactPage /><TakeBill page={this.props.page} /></div>
            default:
                return
        }
    }
}

const mapStateToProps = (state) => {
    return {
        page:state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (billItem) => {
            dispatch(addBillItem(billItem));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Body);