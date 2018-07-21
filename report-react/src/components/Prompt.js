import React, { Component } from 'react';
import Cover from './Cover';
import PropTypes from 'prop-types';

class Prompt extends Component {

    static propTypes = {
        show: PropTypes.bool,
        onClose: PropTypes.func,
        onClick: PropTypes.func
    }

    //点击取消
    handleOnClose() {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    //点击确认
    handleOnConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    }

    render () {
        return (
            <div id="prompt">
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
                <div className="prompt" style={this.props.show ? {'bottom': '50px'} : {}}>
                    <button id="ok" onClick={this.handleOnConfirm.bind(this)}>确定</button>
                    <button id="no" onClick={this.handleOnClose.bind(this)}>取消</button>
                </div> 
            </div>
        )
    }
}

export default Prompt;