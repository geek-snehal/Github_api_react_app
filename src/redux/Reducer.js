import { FOLLOW_USER, UNFOLLOW_USER} from "./ActionTypes"

const intialState = {
    following: []
}

export default function rootReducer(state=intialState, action){
    switch(action.type){
        case FOLLOW_USER:
            return {
                ...state,
                following: [...state.following, action.payload]
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                following: state.following.filter(userData => userData.login != action.payload)
            } 
        default: 
            return state;       
    }
}