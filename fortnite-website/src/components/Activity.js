import React, { Component } from 'react';

class Activity extends Component {

    constructor() {
        super();
        this.state = {
            on: false
        }
    }

    handleOnCollect () {
        this.setState({
            on: !this.state.on
        });
    }

    render() {
        return(
            <div id="fn-activity">
                <div className="content">
                    <div className="page-position">
                        <i className="icon-house"></i>
                        <a>首页 </a>
                         > 活动中心 
                    </div>
                    <div className="activity-nav clearfix">
                        <ul>
                            <li data-type="progress" className="comm">进行中</li>
                            <li data-type="over">已结束</li>
                            <li data-type="not">未开始</li>
                            <li data-type="forever">永久</li>
                        </ul>
                    </div>
                    <div className="activity-list">
                        <ul className="fn-act">
                            <li>
                                <a href="#" target="_blank" className="activity-img">
                                    <img src="http://ossweb-img.qq.com/images/clientpop/act/fn_1532426066_sSmallImgUrl.jpg" />
                                    <span className="activity-status comm">进行中</span>
                                    <p>预约与回归奖励领取</p>
                                </a>
                                <p className="activity-time">活动时间：2018.7.24 - 2018.9.24</p>
                                <p>预约与回归玩家奖励领取处</p>
                                <a className="activity-collection" onClick={this.handleOnCollect.bind(this)}>
                                    <i className="icon-star comm" style={this.state.on ? {'backgroundPosition': '-235px -328px'} : {}}></i>
                                    点击收藏
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="activity-img">
                                    <img src="http://ossweb-img.qq.com/images/clientpop/act/fn_1532592920_sSmallImgUrl.png"/>
                                    <span className="activity-status comm">进行中</span>
                                    <p>好友招募</p>
                                </a>
                                <p className="activity-time">活动时间：2018.7.24 - 2018.9.24</p>
                                <p>领专属背饰</p>
                                <a className="activity-collection">
                                    <i className="icon-star comm"></i>
                                    点击收藏
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="activity-img">
                                    <img src="http://ossweb-img.qq.com/images/clientpop/act/fn_1532426088_sSmallImgUrl.jpg"/>
                                    <span className="activity-status comm">进行中</span>
                                    <p>领取测试资格</p>
                                </a>
                                <p className="activity-time">活动时间：2018.7.24 - 2018.8.16</p>
                                <p>累计登陆领英雄勋章，快来抽取资格！</p>
                                <a className="activity-collection">
                                    <i className="icon-star comm"></i>
                                    点击收藏
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" className="activity-img">
                                    <img src="http://ossweb-img.qq.com/images/clientpop/act/fn_1532507360_sSmallImgUrl.jpg"/>
                                    <span className="activity-status comm">进行中</span>
                                    <p>国服#1胜利挑战活动</p>
                                </a>
                                <p className="activity-time">活动时间：2018.7.24 - 2018.8.1</p>
                                <p>获得胜利的前10000名玩家刮分百万奖励</p>
                                <a className="activity-collection">
                                    <i className="icon-star comm"></i>
                                    点击收藏
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Activity;