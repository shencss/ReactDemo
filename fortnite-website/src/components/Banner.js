import React, { Component} from 'react';

class Banner extends Component {

    handleOnLinkClick(e) {

    }

    render() {
        return(
            <div id="fn-banner">
                <div className="banner-link-box">
                    <ul className="banner-link-list">
                        <li id="download-btn">
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon  icon-download">
                                    <i className="link-icon icon-arrow"></i>
                                </i>
                                <span className="f">
                                    <span className="d-cn">下载游戏</span>
                                    <span className="en">download</span>
                                </span>
                            </a>
                        </li>
                        <li id="gray-btn">
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-lottery"></i>
                                <span className="cn">抽取资格</span>
                            </a>
                        </li>
                        <li id="live-btn">
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-newbee"></i>
                                <span className="cn">新手专区</span>
                            </a>
                        </li>
                        <li id="video-btn">
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-video"></i>
                                <span className="cn">视频专区</span>
                            </a>
                        </li>
                        <li id="act-btn">
                            <a href="" target="_blank" title="" onClick={this.handleOnLinkClick.bind(this)}>
                                <i className="link-icon icon-act"></i>
                                <span className="cn">活动专区</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Banner;