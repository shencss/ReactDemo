import React, { Component } from 'react';
import Nav from '../components/Nav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { paging } from '../reducers/reducer'

class NavContainer extends Component {

    static propTypes = {
        handleClick: PropTypes.func
    }

    handleClick (id) {
        if (this.props.onClick) {
            this.props.onClick(id);
        }
    }

    render () {
        return (
            <Nav onClick={this.handleClick.bind(this)}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(paging(id));
        }
    }
}

//第一个参数null不能省略
export default connect(null,mapDispatchToProps)(NavContainer);