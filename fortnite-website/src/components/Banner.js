import React, { Component} from 'react';

class Banner extends Component {

    constructor() {
        super();
        this.state = {
            boxStyle: {},
            liStyle: {},
            spanStyle: {}
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnBoxTranform.bind(this));
    }


    handleOnBoxTranform() {
        const H =  document.documentElement.scrollTop || document.body.scrollTop; 
        let flag = true;
        if (H > 400) {
            flag = false;
        } else {
            flag = true;
        }
        if(!flag) {
            this.setState({
                boxStyle: {position: 'fixed', top: '0',left: '0',margin: '0',tranform: 'none',width: '100%',height: '80px'},
                liStyle: {height: '80px',width: '20%',lineHeight: '80px'},
                spanStyle: {lineHeight: '80px'}
            });
        } else {
            this.setState({
                boxStyle: {},
                liStyle: {},
                spanStyle: {}
            });
        }
    }

    handleOnLinkClick() {

    }

    render() {
        return(
            <div id="fn-banner">
                <div className="banner-link-box" ref="link-box" style={this.state.boxStyle}>
                    <ul className="banner-link-list">
                        <li id="download-btn" style={this.state.liStyle}>
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon  icon-download">
                                    <i className="link-icon icon-arrow"></i>
                                </i>
                                <span className="f">
                                    <span className="d-cn" style={this.state.spanStyle}>下载游戏</span>
                                    <span className="en">download</span>
                                </span>
                            </a>
                        </li>
                        <li id="gray-btn" style={this.state.liStyle}>
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-lottery"></i>
                                <span className="cn" style={this.state.spanStyle}>抽取资格</span>
                            </a>
                        </li>
                        <li id="live-btn" style={this.state.liStyle}>
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-newbee"></i>
                                <span className="cn" style={this.state.spanStyle}>新手专区</span>
                            </a>
                        </li>
                        <li id="video-btn" style={this.state.liStyle}>
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-video"></i>
                                <span className="cn" style={this.state.spanStyle}>视频专区</span>
                            </a>
                        </li>
                        <li id="act-btn" style={this.state.liStyle}>
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-act"></i>
                                <span className="cn" style={this.state.spanStyle}>活动专区</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Banner;