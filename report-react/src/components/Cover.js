import React, { Component } from 'react';


class Cover extends Component {


    handleOnClick () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render () {
        return (
            <div  className='cover' style={this.props.show ? {'display': 'block'} : {'display': 'none'}}
                    onClick={this.handleOnClick.bind(this)}>
            </div>
        );
    }
}

export default Cover;