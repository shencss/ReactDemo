import React, {Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class BillPage extends Component {

    static propTypes = {
        billList: PropTypes.array
    }

    render () {
        return (
            <div>
                <List list={this.props.billList} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        billList:state.billList
    }
}

export default connect(mapStateToProps,null)(BillPage);