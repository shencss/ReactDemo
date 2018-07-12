import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
class ReportApp extends Component {

    render () {
        return(
                <div>
                    <HeaderContainer />
                    <NavContainer />
                </div>
        );
    }
}

export default ReportApp;


