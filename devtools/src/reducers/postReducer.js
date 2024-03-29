import { ADD_POST, GET_POST, POST_LOADING } from '../actions/types';

const initialState = {
    posts: [],
    post: {},
    loading: false ,
    username: '' 
}

export default function(state = initialState, action) {
    switch(action.type) {
        case POST_LOADING: 
        return {
            ...state,
            loading: true
        }
        case GET_POST:
            return {
                ...state, 
                posts: action.payload,
                loading: false
            }
        case ADD_POST: 
        console.log("res",action.payload);
        return {
            ...state,
            posts: [action.payload, ...state.posts]
        }
    default: 
        return state;
    }
}