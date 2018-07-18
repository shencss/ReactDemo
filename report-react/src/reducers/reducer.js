//Action
const INIT_DATA = 'INIT_DATA';
const PAGE_BILL = 'PAGE_BILL';
const PAGE_DEVICE = 'PAGE_DEVICE';
const PAGE_CONTACT = 'PAGE_CONTACT';
const ADD_BILLITEM = 'ADD_BILLITEM';
const DELETE_BILLITEM = 'DELETE_BILLITEM';


//reducer
export default function (state = {}, action) {
    const billList = state.billList;
    switch (action.type) {
        case 'INIT_DATA':
            return {...action.data}

        case 'PAGE_BILL':
            return {...state, page: 'Bill' , title: '我的报单'}

        case 'PAGE_DEVICE':
            return {...state, page: 'Device' , title: '我的设备'}

        case 'PAGE_CONTACT':
            return {...state, page: 'Contact' , title: '联系我们'}

        case 'ADD_BILLITEM':
            billList.unshift(action.billItem);
            return {...state, billList: [...billList]}

        case 'DELETE_BILLITEM':
            billList.splice(action.index,1);
            //必须是[...billList]
            return {...state, billList: [...billList]}

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
        case 'nav-bill':
            return { type: PAGE_BILL};
        case 'nav-device':
            return { type: PAGE_DEVICE};
        case 'nav-contact':
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

export const deleteBillItem = (index) => {
    return {
        type: DELETE_BILLITEM,
        index: index
    }
}


