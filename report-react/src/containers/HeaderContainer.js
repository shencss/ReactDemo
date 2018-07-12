import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderContainer extends Component {

    static propTypes = {
        title: PropTypes.string
    }

    render () {
        return (
                <Header title={this.props.title}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}

export default connect(mapStateToProps,null)(HeaderContainer);