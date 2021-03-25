import React, { useEffect, useState } from "react";
import {FOLLOW_USER, UNFOLLOW_USER} from "../redux/ActionTypes";
import {useDispatch, useSelector} from "react-redux";
import { followUser, unfollowUser } from "../redux/ActionCreated";

function UserDetails({match}){
    const[userData, setUserData] = useState({});
    const [isFollowing, setIsFollowing] = useState({});
    const dispatch = useDispatch();
    const following = useSelector(state => state.following)
    
    useEffect(function(){
        const data = following.filter(user => user.login == userData.login)
        if(data.length > 0){
            setIsFollowing(true)
        }else{
            setIsFollowing(false)
        }
    }, [following, userData])

    useEffect(function(){
        async function getUserData(){
            const resp = await fetch(`https://api.github.com/users/${match.params.id}`);
            const data = await resp.json();
            setUserData(data);
        }
        getUserData()
    },[match.params.id])

    return(
        <div className="user-detail-page">
            <div className="big-card">
            <div className="card-image-container">
                <img className="card-image" src={userData.avatar_url}></img>
            </div>
            <div className="card-body">
                <h1>{userData.login}</h1>
                <div className="card-data">
                    <h3>Full Name</h3>
                    <span>{userData.name}</span>
                </div>

                <div className="card-data">
                    <h3>Public gists</h3>
                    <span>{userData.public_gists}</span>
                </div>

                <div className="card-data">
                    <h3>Public Repos</h3>
                    <span>{userData.public_repos}</span>
                </div>
                {!isFollowing ? <button className="card-button"
                        type="button"
                        onClick={()=>{
                            dispatch(followUser(userData))
                        }}>
                    Follow
                </button> : <button className="card-button"
                                    type="button"
                                    onClick={() => {
                                        dispatch(unfollowUser(userData.login))
                                    }}>
                    Unfollow
                    </button>
                }
                
            </div>
            
        </div>
        </div>
        
    )
}

export default UserDetails;