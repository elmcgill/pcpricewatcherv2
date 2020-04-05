import {GET_PARTS, POST_LIST} from '../actions/types';

const initialState = {
    id: '',
    links: {},
    parts: []
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_PARTS:
            return {
                ...state,
                parts: [...state.parts, action.payload]
            };
        case POST_LIST:
            return{
                ...state,
                id: action.payload
            };
        default:
            return state;
    }
}