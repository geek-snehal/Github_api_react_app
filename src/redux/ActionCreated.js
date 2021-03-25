import {FOLLOW_USER, UNFOLLOW_USER } from "./ActionTypes";

export function followUser(userDetails){
    return{
        type: FOLLOW_USER,
        payload: userDetails
    }
}

export function unfollowUser(name){
    return{
        type: UNFOLLOW_USER,
        payload: name
    }
}