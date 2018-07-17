import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cover from '../components/Cover';
import RepairHistory from '../components/RepairHistory';
import { connect } from 'react-redux';

class DeviceDetail extends Component {

    

    static propTypes = {
        list: PropTypes.array
    }

    handleOnClose () {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render () {
        if (this.props.index !== undefined ) {
            let item = this.props.list[this.props.index];
            return  (
                <div id="DeviceDetail">
                    <div className="card"  style={this.props.show ? {'display': 'block'} : {'display': 'none'}}>
                        <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>X</span>
                        <span className="card-title">设备详细信息</span><hr/>
                        <div className="table-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>设备编号</th>
                                        <td>{item.deviceId}</td>
                                    </tr>

                                    <tr>
                                        <th>设备名称</th>
                                        <td>{item.deviceName}</td>
                                    </tr>

                                    <tr>
                                        <th>设备类型</th>
                                        <td>{item.deviceType}</td>
                                    </tr>

                                    <tr>
                                        <th>维修历史</th>
                                        <td>∨</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                {item.history.map((item, i) => <RepairHistory historyItem={item} key={i} />)}
                            </div>                       
                        </div>
                        
                        <hr/>
                        <div className="card-btns">
                            <button id="checkWarranty">报修状况</button>
                            <button id="billNow">立即报修</button>
                        </div>
                    </div>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)}/>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.deviceList
    }
}

export default connect(mapStateToProps,null)(DeviceDetail);