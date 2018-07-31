import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CollectionItem extends Component {

    static propTypes = {
        collection: PropTypes.object
    }

    render() {
        return(
        <div className="collection-item">
            <div className="item-frame">
                <iframe title="item-collection" scrolling="no" name="myframe"
                    frameBorder="0" src={this.props.collection.url}>您的浏览器不支持iframe!
                </iframe>
            </div>
            <div className="item-introduction">
                <h4 className="item-title">{this.props.collection.title}</h4>
                <hr/>
                <p className="item-decription">{this.props.collection.description}</p>
                <a className="item-link" href={this.props.collection.url} target="_blank">Go</a>
            </div>
        </div>
       )
    }
}

export default CollectionItem;