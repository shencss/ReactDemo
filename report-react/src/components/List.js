import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

    render () {
        return (
            <ul className="list">
                {this.props.list.map((item, i) => <Item item={item} key={i} />)}
            </ul>
        );
    }
}

export default List;