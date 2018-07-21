import React, { Component } from 'react';
import Item from '../components/Item';
import BillDetail from '../components/BillDetail';
import DeviceDetail from '../components/DeviceDetail';
import Prompt from '../components/Prompt'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBillItem, cancelBillItem, deleteDeviceItem } from '../reducers/reducer';

class ItemContainer extends Component {

    static propTypes = {
        page: PropTypes.string,
        item: PropTypes.object,
        index: PropTypes.number,
        onBill: PropTypes.func,
        onCancelBillItem: PropTypes.func,
        onDeleteBillItem: PropTypes.func,
        onDeleteDeviceItem: PropTypes.func
    }

    constructor() {
        super();
        this.state = {
            //定义操作类型 cancel：撤销 delete：删除
            opType: '',
            showDetail: false,
            showPrompt: false
        }
    }

    //在localstorage中取消一条报单
    _cancelBillItem(index) {
        const data = JSON.parse(localStorage.report_data);
        data.billList[index].billStatus = '已取消';
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //在localstorage中删除一条报单
    _deleteBillItem(index) {
        const data = JSON.parse(localStorage.report_data);
        data.billList.splice(index, 1);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //在localstorage中删除一个设备
    _deleteDeviceItem(index) {
        const data = JSON.parse(localStorage.report_data);
        data.deviceList.splice(index, 1);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //在列表项中点击查看
    handleOnCheck() {
        this.setState({
            showDetail: true
        });
    }

    //在列表项中点击撤销
    handleOnCancel() {
        this.setState({
            opType: 'cancel',
            showDetail: false,
            showPrompt: true
        });
    }

    //在列表项点击删除
    handleOnDelete() {
        this.setState({
            opType: 'delete',
            showDetail: false,
            showPrompt: true
        });
    }

    //点击遮布或者关闭按钮或点击取消
    handleOnClose() {
        this.setState({
            opType: '',
            showDetail: false,
            showPrompt: false,
        });
    }

    //在提示中点击确认
    handleOnConfirm() {
        if (this.state.opType === 'delete') {
            if (this.props.page === 'Bill') {
                this._deleteBillItem(this.props.index);
                if (this.props.onDeleteBillItem) {   
                    this.props.onDeleteBillItem(this.props.index);
                }
            } else if (this.props.page === 'Device') {
                this._deleteDeviceItem(this.props.index);
                if (this.props.onDeleteDeviceItem) {   
                    this.props.onDeleteDeviceItem(this.props.index);
                }
            }
        } else if (this.state.opType === 'cancel') {
            this._cancelBillItem(this.props.index);
            if (this.props.onCancelBillItem) {   
                this.props.onCancelBillItem(this.props.index);
            }
        }
        this.setState({
            showPrompt: false
        });
    }

    //在详细信息中点击再次/马上报修
    handleOnBill(e,item) {
        if (this.props.onBill) {
            this.props.onBill(e,item);
        }
        this.setState({
            showDetail: false
        });
    } 

    render() {
        if (this.props.page === 'Bill') {
            return(
                <div id="item-container">
                    <Item item={this.props.item} index={this.props.index} onCheck={this.handleOnCheck.bind(this)}
                        onCancel={this.handleOnCancel.bind(this)} onDelete={this.handleOnDelete.bind(this)}    
                    />
                    <BillDetail show={this.state.showDetail} item={this.props.item} onDelete={this.handleOnDelete.bind(this)}
                        onClose={this.handleOnClose.bind(this)} onCancel={this.handleOnCancel.bind(this)} onBill={this.handleOnBill.bind(this)}
                    />
                    <Prompt show={this.state.showPrompt} onConfirm={this.handleOnConfirm.bind(this)} onClose={this.handleOnClose.bind(this)}  />
                </div>
            );
        } else {
            return(
                <div id="item-container">
                    <Item item={this.props.item} index={this.props.index} onCheck={this.handleOnCheck.bind(this)}
                         onDelete={this.handleOnDelete.bind(this)}    
                    />
                    <DeviceDetail show={this.state.showDetail} item={this.props.item} onDelete={this.handleOnDelete.bind(this)}
                        onClose={this.handleOnClose.bind(this)} onBill={this.handleOnBill.bind(this)}
                    />
                    <Prompt show={this.state.showPrompt} onConfirm={this.handleOnConfirm.bind(this)} onClose={this.handleOnClose.bind(this)}  />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteBillItem: (index) => {
            dispatch(deleteBillItem(index));
        },
        onCancelBillItem: (index) => {
            dispatch(cancelBillItem(index));
        },
        onDeleteDeviceItem: (index) => {
            dispatch(deleteDeviceItem(index));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer);