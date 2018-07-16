import React, {Component } from 'react';
import List from '../components/List';
import Contact from '../components/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cancelBill } from '../reducers/reducer';



class Page extends Component {

    static propTypes = {
        page: PropTypes.string,
        billList: PropTypes.array,
        deviveList: PropTypes.array
    }

    //在localstorage中删除一条报单
    _cancelBill (index) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.splice(index, 1);
        localStorage.setItem('report_data',JSON.stringify(data));
    }

    handleOnCancel (index) {
        this._cancelBill (index);
        console.log("kkk")
        if (this.props.onCancel) {   
            this.props.onCancel(index);
        }
    }

    render () {
        switch (this.props.page) {
            case 'Bill':
                return (
                        <List list={this.props.billList}  onCancel={this.handleOnCancel.bind(this)}/>
                );
            case 'Device':
                return (
                        <List list={this.props.deviceList}  />
                );
            case 'Contact':
                return <Contact />
            default:
                return

        }
    }
}

const mapStateToProps =  (state) => {
    return {
        page: state.page,
        billList: state.billList,
        deviceList: state.deviceList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCancel: (index) => {
            dispatch(cancelBill(index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);