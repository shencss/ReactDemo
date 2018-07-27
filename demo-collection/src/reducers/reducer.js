const INIT_DATA = 'INIT_DATA';

//reducer
export default function(state = {}, action) {
    switch (action.type) {
        case 'INIT_DATA':
        console.log(action.data)
            return { ...action.data }
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