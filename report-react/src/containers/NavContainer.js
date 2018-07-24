import React, { Component } from 'react';
import Nav from '../components/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { paging } from '../reducers/reducer';

class NavContainer extends Component {

    static propTypes = {
        page: PropTypes.string,
        onNav: PropTypes.func
    }

    //点击底部导航切换页面
    handleOnNav(id) {
        if (this.props.onNav) {
            this.props.onNav(id);
        }
    }

    render() {
        return(
            <Nav page={this.props.page} onNav={this.handleOnNav.bind(this)} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNav: (id) => {
            dispatch(paging(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);