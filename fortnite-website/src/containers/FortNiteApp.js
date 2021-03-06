import React, { Component } from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner';
import News from '../components/News';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { init } from '../reducers/reducer';

class FortNiteApp extends Component {
    
    componentWillMount() {
        this.props.initData({});
    }
    
    render() {
        return(
            <div id="fn-app">
                <Header />
                <Banner />
                <News />
                <Footer />
            </div>
        );
    }
}

const mapStateToprops = (state) => {
    return {
        subnavToggleHover: state.subnavToggleHover
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (data) =>{
            dispatch(init(data));
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(FortNiteApp);