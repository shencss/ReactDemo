import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepairHistory extends Component {

    static propTypes = {
        historyItem: PropTypes.object
    }

    render() {
        return(
            <table id="repair-history">
                <tbody>
                    <tr>
                        <th>报单编号</th>
                        <td>{this.props.historyItem.billId}</td>
                    </tr>               
                    <tr>
                        <th>维修时间</th>
                        <td>{this.props.historyItem.time}</td>
                    </tr>                    
                    <tr>
                        <th>维修机构</th>
                        <td>{this.props.historyItem.organization}</td>
                    </tr>                   
                    <tr>
                        <th>故障描述</th>
                        <td>{this.props.historyItem.description}</td>
                    </tr>                   
                    <tr>
                        <th>维修费用</th>
                        <td>{this.props.historyItem.money}</td>
                    </tr>
                </tbody> 
            </table>
        );
    }
}

export default RepairHistory;