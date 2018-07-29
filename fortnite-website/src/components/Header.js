import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div id="fn-header">
                <div className="nav-box">
                    <h3 title="堡垒之夜官网">
                        <a>堡垒之夜官网</a>
                    </h3>
                    <ul className="nav-list">
                        <li>
                            <a href="#" title="官网首页">官网首页</a>
                            <div className="sub-nav">
                                <a href="#" title="游戏下载">游戏下载</a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="新闻活动">新闻活动</a>
                            <div className="sub-nav">
                                <a href="#" title="新闻资讯">新闻资讯</a>
                                <a href="#" title="活动中心">活动中心</a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="攻略视频">攻略视频</a>
                            <div className="sub-nav">
                                <a href="#" title="新手站">新手站</a>
                                <a href="#" title="资料站">资料站</a>
                                <a href="#" title="攻略中心">攻略中心</a>
                                <a href="#" title="视频中心">视频中心</a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="玩家阵地">玩家阵地</a>
                            <div className="sub-nav">
                                <a href="#" title="官方APP">官方APP</a>
                                <a href="#" title="官方微博">官方微博</a>
                                <a href="#" title="官方论坛">官方论坛</a>
                                <a href="#" title="官方微信">官方微信</a>
                            </div>
                        </li>
                        <li>
                            <a href="#" title="用户中心">用户中心</a>
                            <div className="sub-nav">
                                <a href="#" title="客服专区">客服专区</a>
                                <a href="#" title="用户协议">用户协议</a>
                            </div>
                        </li>
                    </ul>
                    <div className="sub-nav-bg"></div>
                </div>
            </div>
        );
    }
}

export default Header;