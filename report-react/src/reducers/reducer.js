//Action
const PAGING = 'PAGING';


//reducer
export default function (state = { title: '我的报单',billList: [{"billId":"EBE7344E","billTime":"2018年7月5日10:51","billStatus":"已完成","deviceName":"联想笔记本","deviceType":"电脑","description":"无法正常开机","Appointment":"2018-07-07","organization":"B公司","phone":"1300000000","address":"华南理工大学B8学院楼101","report":{"finishTime":"2018年7月12日14:00","organization":"B公司","reqairer":"No.001","result":"已完成","detail":{"deviceId":"85FG30UI","description":"主板局部短路，导致无法正常开机","money":"78元"}}},{"billId":"F6C7F2FA","billTime":"2018年7月5日10:53","billStatus":"受理中","deviceName":"惠普显示屏","deviceType":"配件","description":"颜色无法正常显示","Appointment":"2018-07-06","organization":"A公司","phone":"10010","address":"华南理工大学B8学院楼102","report":{}},{"billId":"266852B1","billTime":"2018年7月5日10:54","billStatus":"受理中","deviceName":"戴尔笔记本","deviceType":"电脑","description":"音响失灵，无法正常播音","Appointment":"2018-07-08","organization":"C公司","phone":"10010","address":"华南理工大学B8学院楼201","report":{}}] }, action) {
    switch (action.type) {
        case 'PAGING':
            return { title: action.title}

        default:
            return state;
    }
}


export const paging = (id) => {
    switch (id) {
        case 'bill':
            return { type: PAGING, title: '我的报单' };
        case 'device':
            return { type: PAGING, title: '我的设备' };
        case 'contact':
            return { type: PAGING, title: '联系我们' };
        default:
            return { type: PAGING, title: '我的报单' };
    }
}