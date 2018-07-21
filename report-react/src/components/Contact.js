import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return(
            <div id="contact">
                <div id="service"><i className="iconfont">&#xe6f0;</i><span>联系客服</span></div>
                <div id="company"><i className="iconfont">&#xe6ff;</i><span>查看维修机构</span></div>
                <div id="complaints"><i className="iconfont">&#xe6e5;</i><span>投诉与建议</span></div>		
			</div>
        );
    }
}

export default Contact;
