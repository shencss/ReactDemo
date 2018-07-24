import React, { Component } from 'react';
import Cover from './Cover';
import PropTypes from 'prop-types';

class Suggestion extends Component {

    static propTypes = {
        show: PropTypes.bool,
        onSubmit: PropTypes.func,
        onClose: PropTypes.func
    }
    
    constructor() {
        super();
        this.state = {
            suggestion: ''
        }
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
            suggestion: e.target.value
        });
    }

    //点击提交反馈
    handleOnSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.suggestion);
        }
        this.handleOnClose();
        return false;
    }

    render() {
        return(
            <div id="suggtion" style={this.props.show ? {} : {'display': 'none'}}>
                <iframe name='suggestion-frame' title="frame" style={{'display': 'none'}}></iframe>
                <form action="" className="suggestion-form" target="suggestion-frame" onSubmit={this.handleOnSubmit.bind(this)}>
                    <span className="iconfont" id="close-btn" onClick={this.handleOnClose.bind(this)}>&#xe6df;</span>
                    <span className="form-title">感谢您的投诉与建议</span><hr/>
                    <label htmlFor="suggestion">投诉建议: </label>
                    <textarea name="suggestion" cols="23" rows="6" placeholder="请输入投诉或建议" required="required"
                        value={this.state.suggestion} onChange={this.handleOnchange.bind(this)}>
                    </textarea><br/>
                    <input type="submit" id="suggestion-submit" value="提交"/>
                </form>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
            </div>
        )
    }
}

export default Suggestion;