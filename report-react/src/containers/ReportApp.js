import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { paging } from '../reducers/reducer';
import Body from './Body';
import { Route } from 'react-router-dom';


class ReportApp extends Component {

    static propTypes = {
        title: PropTypes.string
    }

    render () {
        return(
                <div>
                    <Header title={this.props.title} />
                    <Route path='/' component={Body} />
                    <Nav onClick={this.props.onClick} />
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            dispatch(paging(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReportApp);


