import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class List extends Component {

    static propType = {
        list: PropTypes.array,
        onCancel: PropTypes.func,
        onCheck: PropTypes.func
    }

    //点击撤销按钮
    handleOnCancel(index) {
        if (this.props.onCancel) {
            this.props.onCancel(index);
        }
    }

    //点击删除按钮
    handleOnDelete(index) {
        if (this.props.onDelete) {
            this.props.onDelete(index);
        }
    }

    //点击查看按钮
    handleOnCheck(index) {
        if (this.props.onCheck) {
            this.props.onCheck(index);
        }
    }

    render() {
        return(
            <ul className="list">
                {this.props.list.map((item, i) => <Item item={item} key={i} index={i} 
                    onCancel={this.handleOnCancel.bind(this)} onCheck={this.handleOnCheck.bind(this)} onDelete={this.handleOnDelete.bind(this)} />)
                }
            </ul>
        );
    }
}

export default List;