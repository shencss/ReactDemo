import React, { Component } from 'react';
import Cover from './Cover';

class Prompt extends Component {


    handleOnCoverClick () {
        if (this.props.onCoverClick) {
            this.props.onCoverClick();
        }
    }

    handleOnConfirmCancel () {
        if (this.props.onConfirmClick) {
            this.props.onConfirmClick();
        }
    }

    handleOnRecallCancel () {
        if (this.props.onRecallClick) {
            this.props.onRecallClick();
        }
    }

    render () {
        return (
            <div>
                <Cover show={this.props.show} onClick={this.handleOnCoverClick.bind(this)} />
                <div className="prompt" style={this.props.show ? {'bottom': '50px'} : {}}>
                    <button id="ok" onClick={this.handleOnConfirmCancel.bind(this)}>确定</button>
                    <button id="no" onClick={this.handleOnRecallCancel.bind(this)}>取消</button>
                </div> 
            </div>
        )
    }
}

export default Prompt;