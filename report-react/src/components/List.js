import React, { Component } from 'react';
import ItemContainer from '../containers/ItemContainer';
import PropTypes from 'prop-types';

class List extends Component {

    static propType = {
        list: PropTypes.arrayOf(PropTypes.object),
        onAddBill: PropTypes.func,
    }

    //点击再次/立即报修
    handleOnAddBill(e,item) {
        if (this.props.onAddBill) {
            this.props.onAddBill(e,item);
        }
    }

    render() {
        return(
            <ul className="list">
                {this.props.list.map((item, i) => <ItemContainer item={item} key={i} index={i} onAddBill={this.handleOnAddBill.bind(this)} />)}
            </ul>
        );
    }
}

export default List;