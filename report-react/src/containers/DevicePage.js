import React, {Component } from 'react';
import List from '../components/List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



class DevicePage extends Component {

    static propTypes = {
        deviceList: PropTypes.array
    }

    componentWillMount () {
        
    }

    render () {
        return (
            <div>
                <List list={this.props.deviceList} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        deviceList:state.deviceList
    }
}

export default connect(mapStateToProps,null)(DevicePage);