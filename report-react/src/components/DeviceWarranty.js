import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeviceWarranty extends Component {

    static propsTypes = {
        item: PropTypes.object,
        onClose: PropTypes.func
    }

    //点击右上角关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const item = this.props.item;
        return(
            <div id="device-warranty">
                <div className="card">  
                    <i className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</i>
                    <span className="card-title">零件保修信息</span>
                    <hr/>
                    <div className="table-container" >
                        {item.components.length > 0 ? item.components.map((component,i) => 
                            
                                <table id="device-warranty-table" key={i}>
                                    <tbody>
                                        <tr>
                                            <th>零件名称</th>
                                            <td>{component.name}</td>
                                        </tr>
                                        <tr>
                                            <th>开始时间</th>
                                            <td>{component.startTime}</td>
                                        </tr>
                                        <tr>
                                            <th>结束时间</th>
                                            <td>{component.endTime}</td>
                                        </tr>
                                        <tr>
                                            <th>保修状态</th>
                                            <td>{component.status === 0 ? '保修中' : '已过保'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                        ) : '无'}
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default DeviceWarranty;