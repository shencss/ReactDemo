import React, { Component } from 'react';
import Cover from '../components/Cover';
import PropTypes from 'prop-types';

class TakeBill extends Component {
    
    static propTypes = {
        show: PropTypes.bool,
        page: PropTypes.string,
        load: PropTypes.object,
        onClose: PropTypes.func,
        onSubmit: PropTypes.func,
        onBill: PropTypes.func
    }

    constructor() {
        super ();
        this.state = {
            billId: 'KKKKKKKK',
            billTime: '2018年7月15日12:00',
            billStatus: '受理中',
            deviceName: '',
            deviceType: '电脑',
            description: '',
            appointment: '',
            organization: 'A公司',
            phone: '',
            address: '',
            remark: '',
            report: {}
        }
    }
 
    componentWillReceiveProps(props) {  
        //再次/立即报修时将信息加载尽来 
        console.log(props.load)
        if (props.load) {
            this.setState({
                deviceName: props.load.deviceName,
                deviceType: props.load.deviceType,
                description: props.load.description,
                organization: props.load.organization,
                phone: props.load.phone,
                address: props.load.address,
                remark: props.load.remark
            });
        } else {
            this.setState({
                billId: 'KKKKKKKK',
                billTime: '2018年7月15日12:00',
                billStatus: '受理中',
                deviceName: '',
                deviceType: '电脑',
                description: '',
                appointment: '',
                organization: 'A公司',
                phone: '',
                address: '',
                remark: '',
                report: {}
            });
        }
    }


    //点击悬浮按钮报修
    handleOnBill(e,load = {}) {
        this.setState({
            ...load
        })
        if (this.props.onBill) {
            this.props.onBill();
        }
    }

    //点击遮布或关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //获取表单数据
    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //点击提交按钮
    handleOnSubmit() {
        const billItem = {
            billId: this.state.billId,
            billTime: this.state.billTime,
            billStatus: this.state.billStatus,
            deviceName: this.state.deviceName,
            deviceType: this.state.deviceType,
            description: this.state.description,
            appointment: this.state.appointment,
            organization: this.state.organization,
            phone: this.state.phone,
            address: this.state.address,
            remark: this.state.remark,
            report: {}
        }
        if (this.props.onSubmit) {
            this.props.onSubmit(billItem)
        }
        return false;
    }

    render() {
        return(
            <div id="take-bill">
                {/* 为了提交form时不刷新*/}
                <iframe name='my-frame' title="frame" style={{'display': 'none'}}></iframe>
                <form id="bill-form" target="my-frame" style={this.props.show? {} : {'display': 'none'}}
                    >
                    <span id="close-btn" onClick={this.handleOnClose.bind(this)}>X</span>
                    <span className="form-title">请填写报单信息</span>
                    <hr/>
                    <label htmlFor="deviceName">设备名称: </label>
                    <input type="text" name="deviceName" placeholder="请输入设备名称" value={this.state.deviceName || ''} 
                        required="required" onChange={this.handleOnChange.bind(this)}
                    /><br/>
                    <label htmlFor="deviceType">设备类型: </label>
                    <select name="deviceType" value={this.state.deviceType}
                        onChange={this.handleOnChange.bind(this)}>
                        <option value="电脑">电脑</option>
                        <option value="电视">电视</option>
                        <option value="冰箱">冰箱</option>
                        <option value="空调">空调</option>
                        <option value="配件">配件</option>
                        <option value="其他">其他</option>
                    </select><br/>
                    <label htmlFor="description">故障描述: </label>
                    <textarea name="description" cols="23" rows="4" placeholder="请输入故障描述" value={this.state.description} 
                        required="required" onChange={this.handleOnChange.bind(this)}>
                    </textarea><br/>
                    <label htmlFor="appointment">预约时间: </label>
                    <input type="datetime-local" name="appointment" placeholder="请输入预约时间" value={this.state.appointment} 
                        required="required" onChange={this.handleOnChange.bind(this)}
                    /><br/>
                    <label htmlFor="organization">维修公司: </label>
                    <select name="organization" value={this.state.organization}
                        onChange={this.handleOnChange.bind(this)}>
                        <option value="A公司">A公司</option>
                        <option value="B公司">B公司</option>
                        <option value="C公司">C公司</option>
                    </select><br/>
                    <label htmlFor="phone">联系电话: </label>
                    <input type="phone" name="phone" placeholder="请输入联系电话" value={this.state.phone || ''} 
                        required="required" onChange={this.handleOnChange.bind(this)}
                    /><br/>
                    <label htmlFor="address">维修地址: </label>
                    <input type="address" name="address" placeholder="请输入维修地址" value={this.state.address || ''} 
                        required="required" onChange={this.handleOnChange.bind(this)}
                    /><br/>
                    <label htmlFor="remark">其他备注: </label>
                    <textarea name="remark" cols="23" rows="4" placeholder="请输入备注信息"value={this.state.remark}
                        onChange={this.handleOnChange.bind(this)}>
                    </textarea><br/>
                    <input type="submit" id="bill-submit"onClick={this.handleOnSubmit.bind(this)}/>
			    </form>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
                <button id="take-bill-now"
                    style={this.props.page === 'Contact'? {'bottom': '-10px'} : {}} 
                    onClick={this.handleOnBill.bind(this)}>报修
                </button>
            </div>
        );
    }
}

export default TakeBill;