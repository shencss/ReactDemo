const INIT_DATA = 'INIT_DATA';
const ADD_COLLECTION = 'ADD_COLLECTION';

//reducer
export default function(state = {}, action) {
    switch (action.type) {
        case 'INIT_DATA':
            return { ...action.data }
        case 'ADD_COLLECTION':
            const collections = state.collections;
            collections.push(action.collection);
            return { ...state, collections: [...collections]}
        default:
            return state
    }
  }


export const init = (data) => {
    return {
        type: INIT_DATA,
        data
    }
}

export const addCollection = (collection) => {
    return {
        type: ADD_COLLECTION,
        collection
    }
}