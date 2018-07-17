import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

    handleOnCancel (index) {
        if (this.props.onCancel) {
            this.props.onCancel(index);
        }
    }

    handleOnCheck (index) {
        if (this.props.onCheck) {
            this.props.onCheck(index);
        }
    }

    render () {
        return (
            <ul className="list">
                {this.props.list.map((item, i) => <Item item={item} key={i} index={i} onCancel={this.handleOnCancel.bind(this)} onCheck={this.handleOnCheck.bind(this)} />)}
            </ul>
        );
    }
}

export default List;