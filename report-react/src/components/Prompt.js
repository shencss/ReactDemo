import React, { Component } from 'react';
import Cover from './Cover';

class Prompt extends Component {

    constructor () {
        super ();
        this.state = {
            showPrompt: false
        }
    }
    componentWillReceiveProps (props) {
        this.setState({
            showPrompt: props.show
        });
    }

    handleCoverClick () {
        this.setState({
            showPrompt: !this.state.showPrompt
        })
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
                <Cover show={this.state.showPrompt} onClick={this.handleCoverClick.bind(this)} />
                <div className="prompt" style={this.state.showPrompt ? {'bottom': '50px'} : {}}>
                    <button id="ok" onClick={this.handleOnConfirmCancel.bind(this)}>确定</button>
                    <button id="no" onClick={this.handleOnRecallCancel.bind(this)}>取消</button>
                </div> 
            </div>
        )
    }
}

export default Prompt;