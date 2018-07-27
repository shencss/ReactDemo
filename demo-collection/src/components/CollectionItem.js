import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CollectionItem extends Component {

    static propTypes = {
        demo: PropTypes.object
    }

    render() {
        return(
        <div className="collection-item">
            <div className="item-frame">
                <iframe title="item-collection" scrolling="no" name="myframe"
                    frameBorder="0" src={this.props.demo.url}>您的浏览器不支持iframe!
                </iframe>
            </div>
            <div className="item-introduction">
                <h4 className="item-title">{this.props.demo.title}</h4>
                <hr/>
                <p className="item-decription">{this.props.demo.description}</p>
                <a className="item-link" href={this.props.demo.url} target="_blank">Go</a>
            </div>
        </div>
       )
    }
}

export default CollectionItem;