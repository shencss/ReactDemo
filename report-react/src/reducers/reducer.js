//Action
const INIT_DATA = 'INIT_DATA';
const PAGE = 'PAGE';
const ADD_BILLITEM = 'ADD_BILLITEM';
const DELETE_BILLITEM = 'DELETE_BILLITEM';
const CANCEL_BILLITEM = 'CANCEL_BILLITEM';
const ADD_DEVICEITEM = 'ADD_DEVICEITEM';
const DELETE_DEVICEITEM = 'DELETE_DEVICEITEM';
const ADD_FEEDBACK = 'ADD_FEEDBACK';


//reducer
export default function (state = {}, action) {
    const billList = state.billList;
    const deviceList = state.deviceList;
    switch (action.type) {
        case 'INIT_DATA':
            return { ...action.data }

        case 'PAGE':
            return { ...state, page: action.page }

        case 'ADD_BILLITEM':
            billList.unshift(action.item);
            return { ...state, billList: [...billList] }

        case 'DELETE_BILLITEM':
            billList.splice(action.index, 1);
            //必须是[...billList]
            return { ...state, billList: [...billList] }

        case 'CANCEL_BILLITEM':
            billList[action.index].billStatus = '已取消';
            return { ...state, billList: [...billList] }

        case 'ADD_DEVICEITEM':
            deviceList.unshift(action.item);
            return { ...state, deviceList: [...deviceList] }

        case 'DELETE_DEVICEITEM':
            deviceList.splice(action.index, 1);
            return { ...state, deviceList: [...deviceList]}

        case 'ADD_FEEDBACK':
            return

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
            return { type: PAGE, page: 'Bill' };
        case 'nav-device':
            return { type: PAGE, page: 'Device' };
        case 'nav-contact':
            return { type: PAGE, page: 'Contact' };
        default:
            return { type: PAGE, page: 'Bill' };
    }
}

export const addBillItem = (billItem) => {
    return {
        type: ADD_BILLITEM,
        item: billItem
    }
}

export const deleteBillItem = (index) => {
    return {
        type: DELETE_BILLITEM,
        index: index
    }
}

export const cancelBillItem = (index) => {
    return {
        type: CANCEL_BILLITEM,
        index: index
    }
}

export const addDeviceItem = (deviceItem) => {
    return {
        type: ADD_DEVICEITEM,
        item: deviceItem
    }
}

export const deleteDeviceItem = (index) => {
    return {
        type: DELETE_DEVICEITEM,
        index: index
    }
}

export const addFeedback = (feedback) => {
    return {
        type: ADD_FEEDBACK,
        feedback: feedback
    }
}


