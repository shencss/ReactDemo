import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cover extends Component {

    static propTypes = {
        show: PropTypes.bool,
        onClick: PropTypes.func
    }

    //点击遮布
    handleOnClick() {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    render() {
        return(
            <div className='cover' style={this.props.show ? {} : {'display': 'none'}}
                onClick={this.handleOnClick.bind(this)}>
            </div>
        );
    }
}

export default Cover;