import React, { Component } from 'react';
import Suggestion from './Suggestion';
import PropTypes from 'prop-types';
import Company from './Company';

class Contact extends Component {

    static propTypes  = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super();
        this.state ={
            addSuggestion: false,
            checkCompanies: false
        }
    }

    //点击遮布或右上角关闭按钮关闭投诉与建议
    handleOnClose() {
        this.setState({
            addSuggestion: false,
            checkCompanies: false
        });
    }

    //点击查看维修机构
    handleOnCheckCompanies() {
        this.setState({
            checkCompanies: true
        });
    }

    //点击投诉与建议
    handleOnAddSuggestion() {
        this.setState({
            addSuggestion: true
        });
    }

    //点击提交建议
    handleOnSubmit(suggestion) {
        if (this.props.onSubmit) {
            this.props.onSubmit(suggestion);
        }
        this.handleOnClose();
    }

    render() {
        return(
            <div id="contact-page">
                <div id="contact">
                    <div id="service"><i className="iconfont">&#xe6f0;</i><span>联系客服</span></div>
                    <div id="company" onClick={this.handleOnCheckCompanies.bind(this)}><i className="iconfont">&#xe6ff;</i><span>查看维修机构</span></div>
                    <div id="suggestion" onClick={this.handleOnAddSuggestion.bind(this)}><i className="iconfont">&#xe6e5;</i><span>投诉与建议</span></div>		
                </div>
                <Company show={this.state.checkCompanies} companies={this.props.companies} onClose={this.handleOnClose.bind(this)} />
                <Suggestion show={this.state.addSuggestion} onClose={this.handleOnClose.bind(this)} onSubmit={this.handleOnSubmit.bind(this)} />
            </div>
        );
    }
}

export default Contact;
