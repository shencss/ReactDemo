import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepairHistory extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    render() {
        return(
            <table id="repair-history-table">
                <tbody>
                    <tr>
                        <th>报单编号</th>
                        <td>{this.props.history.billId}</td>
                    </tr>               
                    <tr>
                        <th>维修时间</th>
                        <td>{this.props.history.time}</td>
                    </tr>                    
                    <tr>
                        <th>维修机构</th>
                        <td>{this.props.history.organization}</td>
                    </tr>                   
                    <tr>
                        <th>故障描述</th>
                        <td>{this.props.history.description}</td>
                    </tr>                   
                    <tr>
                        <th>维修费用</th>
                        <td>{this.props.history.money}</td>
                    </tr>
                </tbody> 
            </table>
        );
    }
}

export default RepairHistory;