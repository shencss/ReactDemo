import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Feedback from '../components/Feedback';
import { connect } from 'react-redux';
import { addFeedback } from '../reducers/reducer';

class FeedbackContainer extends Component {

    static propTypes = {
        show: PropTypes.bool,
        index: PropTypes.number,
        onClose: PropTypes.func,
        onSubmit: PropTypes.func
    }
    
    //往localstorage中添加一条反馈
    _addFeedback(index,feedback) {
        const data = JSON.parse(localStorage.report_data);
        data.billList[index].feedbacks.push(feedback);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    //点击右上角关闭按钮
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击提交反馈
    handleOnSubmit(feedback) {
        this._addFeedback(this.props.index,feedback);
        if (this.props.onSubmit) {
            this.props.onSubmit(this.props.index,feedback);
            this.handleOnClose();
        }
    }

    render() {
        return(
            <Feedback show={this.props.show} onClose={this.handleOnClose.bind(this)} onSubmit={this.handleOnSubmit.bind(this)} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (index,feedback) => {
            dispatch(addFeedback(index,feedback));
        }
    }
}

export default connect(null, mapDispatchToProps)(FeedbackContainer);