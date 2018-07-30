import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <div id="fn-footer">
                <div className="footer-link-box">
                    <ul>
                        <li>
                            <a target="_blank">
                                <img className="i" src="http://game.gtimg.cn/images/fn/web201806/ft_link/ft_logo_app.png" alt="掌上堡垒"/>
                                <p>掌上堡垒</p>
                            </a>
                            <div className="footer-link-pop">
                                <span></span>
                                <img src="http://game.gtimg.cn/images/fn/web201806/ft_link/app_gr_code.jpg" alt="掌上堡垒二维码"/>
                            </div>
                        </li>
                        <li>
                            <a target="_blank">
                                <img className="i" src="http://game.gtimg.cn/images/fn/web201806/ft_link/ft_logo_sina.png" alt="官方微博"/>
                                <p>官方微博</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank">
                                <img className="i" src="http://game.gtimg.cn/images/fn/web201806/ft_link/ft_logo_bbs.png" alt="官方论坛"/>
                                <p>官方论坛</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank">
                                <img className="i" src="http://game.gtimg.cn/images/fn/web201806/ft_link/ft_logo_qzone.png" alt="QQ空间"/>
                                <p>QQ空间</p>
                            </a>
                        </li>
                        <li>
                            <a target="_blank">
                                <img className="i" src="http://game.gtimg.cn/images/fn/web201806/ft_link/ft_logo_weixin.png" alt="官方微信"/>
                                <p>官方微信</p>
                            </a>
                            <div className="footer-link-pop">
                                <span></span>
                                <img src="http://game.gtimg.cn/images/fn/web201806/ft_link/wx_gr_code.jpg" alt="官方微信二维码"/>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Footer;