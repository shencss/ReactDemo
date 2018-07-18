import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { init, paging } from '../reducers/reducer';
import Body from './Body';

class ReportApp extends Component {

    static propTypes = {
        page: PropTypes.string,
        initData: PropTypes.func,
        onNavClick: PropTypes.func

    }

    //调用_loadData()初始化数据
    componentWillMount() {
        /*  localStorage.setItem('report_data',JSON.stringify({"page":"Bill","deviceList":[{"deviceId":"85FG30UI","deviceStatus":"已维修","deviceName":"联想笔记本","deviceType":"电脑","history":[{"billId":"EBE7344E","time":"2018年7月5日10:58","organization":"A公司","money":"78.00元","description":"无法正常开机"}]}],
            "billList":[
                {"billId":"F6C7F2FA","billTime":"2018年7月5日10:53","billStatus":"受理中","deviceName":"惠普显示屏","deviceType":"配件","description":"颜色无法正常显示","Appointment":"2018-07-06","organization":"A公司","phone":"10010","address":"华南理工大学B8学院楼102","report":{}},
                {"billId":"266852B1","billTime":"2018年7月5日10:54","billStatus":"受理中","deviceName":"戴尔笔记本","deviceType":"电脑","description":"音响失灵，无法正常播音","appointment":"2018-07-08","organization":"C公司","phone":"10010","address":"华南理工大学B8学院楼201","report":{}},
                {"billId":"EBE7344E","billTime":"2018年7月5日10:51","billStatus":"已完成","deviceName":"联想笔记本","deviceType":"电脑","description":"无法正常开机","Appointment":"2018-07-07","organization":"B公司","phone":"1300000000","address":"华南理工大学B8学院楼101","report":{"finishTime":"2018年7月12日14:00","organization":"B公司","reqairer":"No.001","result":"已完成","detail":{"deviceId":"85FG30UI","description":"主板局部短路，导致无法正常开机","money":"78元"}}}
            ]}));

        */
        this._loadData();
    }
 
    //从localStorage中加载数据
    _loadData() {
        let data = localStorage.getItem('report_data');
        data = data ?  JSON.parse(data) : {};
        this.props.initData(data);
    }

    //点击底部导航切换页面
    handleOnNavClick(id) {
        if (this.props.onNavClick) {
            this.props.onNavClick(id);
        }
    }

    render() {
        return(
            <div id="report-app">
                <Header page={this.props.page} />
                <Body />
                <Nav page={this.props.page} onClick={this.handleOnNavClick.bind(this)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (data) => {
            dispatch(init(data));
        },
        onNavClick: (id) => {
            dispatch(paging(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReportApp);


