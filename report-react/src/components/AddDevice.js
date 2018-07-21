import React, { Component } from 'react';
import Cover from './Cover';
import PropTypes from 'prop-types';

class AddDevice extends Component {

    static propTypes = {
        show: PropTypes.bool,
        onClose: PropTypes.func,
        onSubmit: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            name: '',
            type: '电脑',
            model: '',
            manufacture: ''
        }
    }
    
    //监听表单输入
    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //点击遮布或关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击提交设备
    handleOnSubmit(e) {
        const deviceItem = {
            deviceId: "J45H32P4",
            deviceStatus: "入库中",
            deviceName: this.state.name,
            deviceType: this.state.type,
            model: this.state.model,
            manufacture: this.state.manufacture,
            history: []
        }
        console.log(deviceItem);
        if (this.props.onSubmit) {
            this.props.onSubmit(deviceItem);
        }
    }

    render() {
        return(
            <div id="add-device" style={this.props.show ? {} : {'display': 'none'}}>
                <iframe name='device-frame' title="frame" style={{'display': 'none'}}></iframe>
                <form action="" id="device-form" target="device-frame" onSubmit={this.handleOnSubmit.bind(this)}>
                    <i className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</i>
                    <span className="form-title">请填写设备信息</span><hr/>
                    <label htmlFor="name">设备名称:</label>
                    <input type="text" name="name" placeholder="请输入设备名称" required="required" 
                        value={this.state.name} onChange={this.handleOnChange.bind(this)}
                    /><br/>
                    <label htmlFor="type">设备类型:</label>
                    <select name="type" value={this.state.type} required="required" 
                        onChange={this.handleOnChange.bind(this)}>
                        <option value="电脑">电脑</option>
                        <option value="电视">电视</option>
                        <option value="冰箱">冰箱</option>
                        <option value="空调">空调</option>
                        <option value="配件">配件</option>
                        <option value="其他">其他</option>
                    </select><br/>
                    <label htmlFor="model">设备型号:</label>
                    <input type="text" name="model" placeholder="请输入设备型号" value={this.state.model} 
                        required="required" onChange={this.handleOnChange.bind(this)}
                    /><br/>
                    <label htmlFor="manufacture">设备厂商:</label>
                    <textarea name="manufacture" cols="23" rows="4" placeholder="请输入设备厂商信息" required="required" 
                        value={this.state.manufacture} onChange={this.handleOnChange.bind(this)}
                    ></textarea><br/>
                    <input type="submit" id="equipment-submit" value="提交"/>
                </form>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
            </div>
        );
    }
}

export default AddDevice;