import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import NavContainer from '../containers/NavContainer';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { init } from '../reducers/reducer';
import Body from './Body';

class ReportApp extends Component {

    static propTypes = {
        page: PropTypes.string,
        initData: PropTypes.func,
        onNavClick: PropTypes.func

    }

    //调用_loadData()初始化数据
    componentWillMount() {
         /*localStorage.setItem('report_data',JSON.stringify({"page":"Bill","suggestions":[],"companies":[{"name":"广州飞元维修公司","description":"广州飞元信息科技有限公司旗下的维修公司，建于2000年4月，发展至今，飞元维修公司维修人员经验丰富、设备齐全，全心全意为广大广州家庭用户24小时的电器维修服务。","address":"广东省广州市番禺区大学城","phone":"020-8888"},{"name":"广州葆力维修公司","description":"广州市最大的家庭维修服务公司，拥有十多年售后维修经验，空调维修、空调移机、空调加氟、空调清洗等专业维修，承接家用电器维修以及政府机关、公司、学校、酒楼、医院等事业单位的各种制冷设备的维修、年保等业务。","address":"广东省广州市番禺区大学城","phone":"020-6666"},{"name":"广州峰星维修公司","description":"峰星维修公司建立至今已有10年，作为广州地区知名维修公司，我们技术力量雄厚，人员素质高、服务质量好，第一时间上门为您排忧解难。峰星维系公司将秉承诚信维修，诚信服务到永远！","address":"广东省广州市番禺区大学城","phone":"020-4444"}],
            "deviceList":[{"deviceId":"H9SD78TR","deviceStatus":"入库中","deviceName":"美的智能空调","deviceType":"空调","model":"MD301","manufacture":"美的(中国)有限公司","components":[{"name":"蒸发板","partId":3231,"startTime":"2018年1月1日","endTime":"2018年6月1日","status":1},{"name":"空气过滤器","partId":3232,"startTime":"2018月4月1日","endTime":"2018年11月1日","status":0}],"history":[]},{"deviceId":"85FG30UI","deviceStatus":"已维修","deviceName":"联想笔记本","deviceType":"电脑","model":"B50","manufacture":"联想(中国)有限公司","components":[{"name":"内存条","partId":3221,"startTime":"2018年1月1日","endTime":"2018年7月1日","status":1},{"name":"显示屏","partId":3222,"startTime":"2018年3月1日","endTime":"2018年12月7日","status":0}],"history":[{"billId":"EBE7344E","time":"2018年7月5日10:58","organization":"A公司","money":"78.00元","description":"无法正常开机"},{"billId":"EBE7344E","time":"2018年7月5日10:58","organization":"A公司","money":"78.00元","description":"无法正常开机"}]}],
           "billList":[
                {"billId":"F6C7F2FA","billTime":"2018年7月5日10:53","billStatus":"受理中","deviceName":"惠普显示屏","deviceType":"配件","description":"颜色无法正常显示","appointment":"2018年7月6日13:00","organization":"广州飞元维修公司","phone":"13033333333","address":"华南理工大学B8学院楼102","remark":"请尽快上门维修","report":{},"feedbacks": []},
                {"billId":"OP56M23","billTime":"2018年7月4日11:54","billStatus":"派单中","deviceName":"海尔冰箱","deviceType":"冰箱","description":"冰箱开门内灯不亮","appointment":"2018年7月6日13:00","organization":"广州飞元维修公司","phone":"13022222222","address":"华南理工大学B8学院楼102","remark":"这个灯是时好时坏","report":{},"feedbacks": []},
                {"billId":"266852B1","billTime":"2018年7月1日10:23","billStatus":"已取消","deviceName":"戴尔笔记本","deviceType":"电脑","description":"音响失灵，无法正常播音","appointment":"2018年7月1日14:30","organization":"广州峰星维修公司","phone":"13011111111","address":"华南理工大学B8学院楼201","remark":"无","report":{},"feedbacks": []},
                {"billId":"EBE7344E","billTime":"2018年6月10日12:05","billStatus":"已完成","deviceName":"联想笔记本","deviceType":"电脑","description":"无法正常开机","appointment":"2018年6月11日14:00","organization":"广州葆力维修公司","phone":"1300000000","address":"华南理工大学B8学院楼101","remark":"曾经维修过一次","report":{"finishTime":"2018年7月12日14:00","organization":"B公司","repairer":"No.001","result":"已完成","detail":{"deviceId":"85FG30UI","description":"主板局部短路，导致无法正常开机","money":"78元"}},"feedbacks": []}
            ]}));
            
        */
        this._loadData();
    }
 
    //从localStorage中加载数据
    _loadData() {
        let data = localStorage.getItem('report_data');
        data = data ?  JSON.parse(data) : {};
        this.props.initData(data);
        console.log(data)
    }

    render() {
        return(
            <div id="report-app">
                <HeaderContainer />
                <Body />
                <NavContainer />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initData: (data) => {
            dispatch(init(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(ReportApp);


