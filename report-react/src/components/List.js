import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

    hanldeCancel (index) {
        console.log("PPP")
        if (this.props.onCancel) {
            this.props.onCancel(index);
        }
    }


    render () {
        return (
            <ul className="list">
                {this.props.list.map((item, i) => <Item item={item} key={i} index={i} onCancel={this.hanldeCancel.bind(this)} />)}
            </ul>
        );
    }
}

export default List;