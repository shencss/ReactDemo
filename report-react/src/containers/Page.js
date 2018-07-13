import React, { Component } from 'react';
import BillPage from './BillPage';
import { Route } from 'react-router-dom';

class Page extends Component {

    render () {
        return (
            <Route path='/bill' component={BillPage} />
        );
    }
}

export default Page;