import React, { Component } from 'react';
import ItemContainer from '../containers/ItemContainer';
import PropTypes from 'prop-types';

class List extends Component {

    static propType = {
        list: PropTypes.array,
        onCancel: PropTypes.func,
        onCheck: PropTypes.func
    }

    //点击再次/立即报修
    handleOnBill(e,item) {
        if (this.props.onBill) {
            this.props.onBill(e,item);
        }
    }

    render() {
        return(
            <ul className="list">
                {this.props.list.map((item, i) => <ItemContainer item={item} key={i} index={i} onBill={this.handleOnBill.bind(this)} />)}
            </ul>
        );
    }
}

export default List;