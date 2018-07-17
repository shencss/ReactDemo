import React, { Component } from 'react';


class Cover extends Component {

    constructor () {
        super ();
        this.state = {
            showCover: false
        }
    }

    componentWillReceiveProps (props) {
        this.setState({
            showCover: props.show
        });
    }

    handleOnClick () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render () {
        return (
            <div  className='cover' style={this.state.showCover ? {'display': 'block'} : {'display': 'none'}}
                    onClick={this.handleOnClick.bind(this)}>
            </div>
        );
    }
}

export default Cover;