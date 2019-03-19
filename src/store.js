import { createStore } from 'redux';


const initState = {
    display: 'hello'
}

const displayReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_HELLO':
            return {...state, display: action.payload.display};
        default:
            return state;
    }
}

const store = createStore(displayReducer)

export default store;