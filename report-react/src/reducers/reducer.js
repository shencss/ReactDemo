//Action
const PAGING = 'PAGING';


//reducer
export default function (state = { title: '我的报单' }, action) {
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