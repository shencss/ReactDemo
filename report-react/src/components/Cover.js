import React, { Component } from 'react';


class Cover extends Component {


    handleClick () {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render () {
        console.log(this.props.show)
        return (
            <div  className='cover' style={this.props.show ? {'display': 'block'} : {'display': 'none'}}
                    onClick={this.handleClick.bind(this)}>
            </div>
        );
    }
}

export default Cover;