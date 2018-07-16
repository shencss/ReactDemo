import React, {Component } from 'react';
import List from '../components/List';
import PropTypes from 'prop-types';



class BillPage extends Component {

    static propTypes = {
        billList: PropTypes.array
    }

    componentWillReceiveProps () {
        console.log("KKK");
    }

    render () {
        return (
            <div>
                <List list={this.props.list} />
            </div>
        );
    }
}



export default BillPage;