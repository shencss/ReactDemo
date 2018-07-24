import React, { Component } from 'react';
import Contact from '../components/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSuggestion } from '../reducers/reducer';

class ContactContainer extends Component {

    static propTypes = {
        companies: PropTypes.arrayOf(PropTypes.object),
        onSubmit: PropTypes.func
    }

    _addSuggestion(suggestion) {
        const data = JSON.parse(localStorage.report_data);
        data.suggestions.push(suggestion);
        localStorage.setItem('report_data', JSON.stringify(data));
    }

    handleOnSubmit(suggestion) {
        this._addSuggestion(suggestion);
        if (this.props.onSubmit) {
            this.props.onSubmit(suggestion);
        }
    }

    render() {
        return(
            <Contact companies={this.props.companies} onSubmit={this.handleOnSubmit.bind(this)} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.companies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (suggestion) => {
            dispatch(addSuggestion(suggestion));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);