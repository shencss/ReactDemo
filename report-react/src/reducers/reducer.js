//Action
const INIT_DATA = 'INIT_DATA';
const PAGE_BILL = 'PAGE_BILL';
const PAGE_DEVICE = 'PAGE_DEVICE';
const PAGE_CONTACT = 'PAGE_CONTACT';
const ADD_BILLITEM = 'ADD_BILLITEM';



//reducer
export default function (state = {}, action) {
    switch (action.type) {
        case 'INIT_DATA':
            console.log(action.data);
            return {list: action.data.billList}
        case 'PAGE_BILL':
            return {...state, page: 'Bill' , title: '我的报单'}
        case 'PAGE_DEVICE':
            return {...state, page: 'Device' , title: '我的设备'}
        case 'PAGE_CONTACT':
            return {...state, page: 'Contact' , title: '联系我们'}
        case 'ADD_BILLITEM':
            const billList = state.billList;
            billList.unshift(action.billItem);
            return {...state, billList, title:'PP'}
        default:
            return state;
    }
}

export const init = (data) => {
    return {
        type: INIT_DATA,
        data: data
    }
}

export const paging = (id) => {
    switch (id) {
        case 'bill':
            return { type: PAGE_BILL};
        case 'device':
            return { type: PAGE_DEVICE};
        case 'contact':
            return { type: PAGE_CONTACT};
        default:
            return { type: PAGE_BILL};
    }
}

export const addBillItem = (billItem) => {
    return {
        type: ADD_BILLITEM,
        billItem: billItem
    }
}
