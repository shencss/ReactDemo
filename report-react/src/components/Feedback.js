import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFeedback } from '../reducers/reducer';

class Feedback extends Component {

    static propTypes = {
        onSubmit: PropTypes.func,
        onClick: PropTypes.func
    }
    
    constructor() {
        super();
        this.state = {
            feedback: ''
        }
    }

    //往localstorage中添加一条反馈
    _addFeedback(feedback) {
        const data = JSON.parse(localStorage.report_data);
        data.feedback.push(feedback);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //点击关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //监听textarea输入
    handleOnchange(e) {
        this.setState({
            feedback: e.target.value
        });
    }

    //点击提交反馈
    handleOnSubmit() {
        console.log(this.state.feedback);
        this._addFeedback(this.state.feedback);
        if (this.props.onSubmit) {
            console.log(this.state.feedback);
            this.props.onSubmit(this.state.feedback);
            this.props.onClose();
        }
    }

    render() {
        return(
            <div id="feedback">
                <iframe name='feedback-frame' title="frame" style={{'display': 'none'}}></iframe>
                <form action="" className="feedback-form" target="feedback-frame" onSubmit={this.handleOnSubmit.bind(this)}>
                    <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</span>
                    <span className="form-title">感谢您的积极反馈</span><hr/>
                    <label htmlFor="feedback">反馈: </label>
                    <textarea name="feedback" cols="23" rows="6" placeholder="请输入反馈" required="required"
                        value={this.state.feedback} onChange={this.handleOnchange.bind(this)}>
                    </textarea><br/>
                    <input type="submit" id="feedback-submit" value="提交"/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (feedback) => {
            dispatch(addFeedback(feedback));
        }
    }
}

export default connect(null,mapDispatchToProps)(Feedback);