import React, { Component } from 'react';
import Cover from './Cover';
import PropTypes from 'prop-types';

class Company extends Component {

    static propTypes = {
        companies: PropTypes.arrayOf(PropTypes.object),
        onClose: PropTypes.func
    }

    //点击右上角关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    render() {
        const companies = this.props.companies;
        return(
            <div id="company-information" style={this.props.show ? {} : {'display': 'none'}}>
                <div className="card">  
                    <i className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</i>
                    <span className="card-title">维修机构信息</span>
                    <hr/>
                    <div className="table-container">
                    {companies.map((company,i) => 
                        
                            <table id="company-information-table" key={i}>
                                <tbody>
                                    <tr>
                                        <th>公司名称</th>
                                        <td>{company.name}</td>
                                    </tr>
                                    <tr>
                                        <th>公司介绍</th>
                                        <td>{company.description}</td>
                                    </tr>
                                    <tr>
                                        <th>公司地址</th>
                                        <td>{company.address}</td>
                                    </tr>
                                    <tr>
                                        <th>公司电话</th>
                                        <td>{company.phone}</td>
                                    </tr>
                                </tbody>
                            </table>        
                    )}
                    </div>
                    <hr/>
                </div>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
            </div>
        )
    }
}

export default Company;