import React, { Component } from 'react';

class News extends Component {

    constructor() {
        super();
        this.state = {
            news: [
                {title: "国服#1胜利挑战活动-胜利名单公布", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180728/37659638168272.png", text: "国服#1胜利挑战活动-胜利名单公布", time: "7/28"},
                {title: "好友招募扩招计划已开启",src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180727/76011865168606.jpg", text: "为了让大家更灵活的招募好友，让更多热爱游戏的玩家进入游戏。我们计划从本周末起开启好友招募扩招计划，由每周只能招募1人提升至每周可招募3人。", time: "7/28"},
                {title: "《堡垒之夜》7月27日不停服组队语音修复公告", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180727/7107068171033.jpg", text: "", time: "7/27"},
                {title: "熊猫大师杯《堡垒之夜》明星主播挑战赛", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180726/88077153038349.jpg", text: "秀就完事儿了！老孟、王师傅、瓦莉拉、师维、DDD……超强主播领衔决战！熊猫直播大师杯《堡垒之夜》最强主播对抗赛正式开启！看谁才是真正的锄地大师！", time: "7/26"},
                {title: "《堡垒之夜》公告：生日庆典活动&训练场模式", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180725/57930997592806.jpg", text: "《堡垒之夜》训练场模式在7月25日晚上20:00将闪亮登场，拉上你的好友一起训练场中尽情发挥", tiem: "7/25"},
                {title: "《堡垒之夜》11:00不停服更新出现错误的尝试解决办法", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180725/86716832532491.jpg", text: "当前不停服更新出现了网络波动。在更新期间玩家遇到了更新失败，更新不了的问题，可以通过以下的办法尝试解决", time: "7/25"},
                {title: "企鹅电竞：百万签约基金寻找最强主播", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180725/6753533133264.jpg", text: "《堡垒之夜》国服限量测试正式开启，“锄宗们”也在第五赛季激战正酣。企鹅电竞发起系列“开播”冲榜活动，助各位玩家们在新赛季一往无前！", time: "7/25"},
                {title: "【已修复】训练场模式匹配BUG说明", src: "http://ossweb-img.qq.com/upload/webplat/info/fn/20180725/39122565413090.jpg", text: "当前的训练场模式存在匹配时填充路人的BUG，正在修复中。", time: "7/25"}
        
            ],
            index: 1,
            speed: 1,
            marginLeft: 0
        }
    }

    handleOnPreNews() {
        if (this.state.index > 1) {
            this.setState({
                speed: 1,
                marginLeft: this.state.marginLeft + 1400,
                index: this.state.index - 2
            });
        }
    }

    handleOnNextNews() {
        if (this.state.index < (this.state.news.length - 2)) {
            this.setState({
                speed: 1,
                marginLeft: this.state.marginLeft - 1400,
                index: this.state.index + 2
            });
        }
    }

    handleOnNav(e) {
        switch (e.target.title) {
            case '1':
                this.setState({
                    speed: .3,
                    marginLeft: 0,
                    index: 1
                });
                break;
            case '2':
                this.setState({
                    speed: .3,
                    marginLeft: -1400,
                    index: 3
                });
                break;
            case '3':
                this.setState({
                    speed: .3,
                    marginLeft: -2800,
                    index: 5
                });
                break;
            case '4':
                this.setState({
                    speed: .3,
                    marginLeft: -4200,
                    index: 7
                });
                break;
            default:
                this.setState({
                    speed: .3,
                    marginLeft: 0,
                    index: 1
                });
        }
    }

    render() {
        return(
            <div id="fn-news">
                <div className="news-box">
                    <div className="news">
                        <div className="roll-box">
                            <div style={{overflow: "hidden",width: "3500px",float: "left"}}>
                                <ul style={{marginLeft: this.state.marginLeft + 'px',transition: 'all '+this.state.speed+'s linear'}}>
                                    {this.state.news.map((item, i) => 
                                        <li key={i}>
                                            <div className="news-link">
                                                <a title={item.titel} target="_blank" className="news-pic">
                                                    <img src={item.src} alt={item.titel} />
                                                </a>
                                                <div className="news-text">
                                                    <dl>
                                                        <dt>
                                                            <a  title="国服#1胜利挑战活动" target="_blank">{item.title}</a>
                                                        </dt>
                                                        <dd>
                                                            <p>{item.text}</p>
                                                        </dd>
                                                        <dd className="news-time">{item.time}</dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </li>
                                    )}
                            
                                </ul>
                            </div>   
                        </div>
                        <a className="arrow arrow1" onClick={this.handleOnPreNews.bind(this)}>上一页</a>
                        <a className="arrow arrow2" onClick={this.handleOnNextNews.bind(this)}>下一页</a>
                        <div className="news-nav">
                            <span className={this.state.index === 1 ? "navItemOn" : ''} title="1" onClick={this.handleOnNav.bind(this)}></span>
                            <span className={this.state.index === 3 ? "navItemOn" : ''} title="2" onClick={this.handleOnNav.bind(this)}></span>
                            <span  className={this.state.index === 5 ? "navItemOn" : ''} title="3" onClick={this.handleOnNav.bind(this)}></span>
                            <span  className={this.state.index === 7 ? "navItemOn" : ''} title="4" onClick={this.handleOnNav.bind(this)}></span>
                        </div>
                        <a target="_blank" className="newscenter">进入新闻中心</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;