import React, {Component } from 'react';
import List from '../components/List';
import Contact from '../components/Contact';
import Prompt from '../components/Prompt'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cancelBill } from '../reducers/reducer';



class Page extends Component {

    static propTypes = {
        page: PropTypes.string,
        billList: PropTypes.array,
        deviveList: PropTypes.array
    }

    constructor () {
        super ();
        this.state = {
            showPrompt: false,
            index: undefined
        }
    }

    //在localstorage中删除一条报单
    _cancelBill (index) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.splice(index, 1);
        localStorage.setItem('report_data',JSON.stringify(data));
    }

    //处理撤销发起
    handleOnCancel (index) {
        this.setState({
            showPrompt: true,
            index: index
        });
    }

    //确认撤销
    handleOnConfirmCancel () {
        this._cancelBill (this.state.index);
        if (this.props.onCancel) {   
            this.props.onCancel(this.state.index);
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
                    <div id="page">
                        <List list={this.props.billList}  onCancel={this.handleOnCancel.bind(this)} />
                        <Prompt show={this.state.showPrompt} onConfirmClick={this.handleOnConfirmCancel.bind(this)} onRecallClick={this.handleOnRecallCancel.bind(this)} />
                    </div>
                );
            case 'Device':
                return (
                    <div id="page">
                        <List list={this.props.deviceList}  />
                    </div>
                );
            case 'Contact':
                return (
                    <div id="page">
                        <Contact />
                    </div>
                )
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