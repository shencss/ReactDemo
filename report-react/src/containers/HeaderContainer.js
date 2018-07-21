import React, { Component } from 'react';
import Header from '../components/Header';
import AddDevice from '../components/AddDevice';
import PropTypes from 'prop-types';
import { addDeviceItem } from '../reducers/reducer';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

    static propTypes ={
        page: PropTypes.string,
        onAddDevice: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            addDevice: false
        }
    }

    //在localstorage中添加一个设备
    _addDeviceItem(item) {
        const data = JSON.parse(localStorage.report_data);
        data.deviceList.unshift(item);
        localStorage.setItem('report_data', JSON.stringify(data)); 
    }

    //点击右上角的+号添加设备
    handleOnAddDevice() {
        this.setState({
            addDevice: true
        });
    }

    //点击遮布或关闭按钮
    handleOnClose() {
        this.setState({
            addDevice: false
        });
    }

    //处理设备的添加
    handleOnSubmitDevice(deviceItem) {
        console.log(deviceItem);
        this._addDeviceItem(deviceItem);
        if (this.props.onAddDevice) {
            this.props.onAddDevice(deviceItem);
        }
        this.setState({
            addDevice: false
        });
    }

    render() {
        return(
            <div id="header-container">
                <Header page={this.props.page} onAddDevice={this.handleOnAddDevice.bind(this)}/>
                <AddDevice show={this.state.addDevice} onClose={this.handleOnClose.bind(this)} onSubmit={this.handleOnSubmitDevice.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddDevice: (deviceItem) => {
            dispatch(addDeviceItem(deviceItem));
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);