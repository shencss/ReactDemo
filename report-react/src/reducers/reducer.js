//Action
const INIT_DATA = 'INIT_DATA';
const PAGE = 'PAGE';
const ADD_BILLITEM = 'ADD_BILLITEM';
const DELETE_BILLITEM = 'DELETE_BILLITEM';
const CANCEL_BILLITEM = 'CANCEL_BILLITEM';
const ADD_DEVICEITEM = 'ADD_DEVICEITEM';
const DELETE_DEVICEITEM = 'DELETE_DEVICEITEM';
const ADD_FEEDBACK = 'ADD_FEEDBACK';
const ADD_SUGGESTION = 'ADD_SUGGESTION';


//reducer
export default function (state = {}, action) {
    const billList = state.billList;
    const deviceList = state.deviceList;
    const suggestions = state.suggestions;
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
            return { ...state, deviceList: [...deviceList] }

        case 'ADD_FEEDBACK':
            billList[action.index].feedbacks.push(action.feedback);
            return { ...state, billList: [...billList] } 

        case 'ADD_SUGGESTION':
            suggestions.push(action.suggestion);
            return { ...state, suggestions: suggestions}

        default:
            return state;
    }
}

//初始化数据
export const init = (data) => {
    return {
        type: INIT_DATA,
        data
    }
}

//切换页面
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

//添加报单
export const addBillItem = (item) => {
    return {
        type: ADD_BILLITEM,
        item
    }
}

//删除报单
export const deleteBillItem = (index) => {
    return {
        type: DELETE_BILLITEM,
        index
    }
}

//撤销报单
export const cancelBillItem = (index) => {
    return {
        type: CANCEL_BILLITEM,
        index
    }
}

//添加设备
export const addDeviceItem = (item) => {
    return {
        type: ADD_DEVICEITEM,
        item
    }
}

//删除设备
export const deleteDeviceItem = (index) => {
    return {
        type: DELETE_DEVICEITEM,
        index
    }
}

//添加反馈
export const addFeedback = (index,feedback) => {
    return {
        type: ADD_FEEDBACK,
        index,
        feedback,
    }
}

//添加投诉或建议
export const addSuggestion = (suggestion) => {
    return {
        type: ADD_SUGGESTION,
        suggestion
    }
}


