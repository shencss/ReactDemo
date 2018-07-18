import React, { Component } from 'react';
import Cover from './Cover';

class Prompt extends Component {


    handleOnClose () {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    handleOnConfirmCancel () {
        if (this.props.onConfirmClick) {
            this.props.onConfirmClick();
        }
    }

    render () {
        return (
            <div>
                <Cover show={this.props.show} onClick={this.handleOnClose.bind(this)} />
                <div className="prompt" style={this.props.show ? {'bottom': '50px'} : {}}>
                    <button id="ok" onClick={this.handleOnConfirmCancel.bind(this)}>确定</button>
                    <button id="no" onClick={this.handleOnClose.bind(this)}>取消</button>
                </div> 
            </div>
        )
    }
}

export default Prompt;