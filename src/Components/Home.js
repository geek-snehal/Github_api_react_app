import React from "react";
import { useSelector } from "react-redux";
import Usercard from "./Usercard";


export default function Home(){
    const following = useSelector(state => state.following);
    return(
        <div className="card-container">
            {following.map(user => <Usercard name={user.name}
                                             avatar={user.avatar_url}
                                             stars={10}
                                             following={30}
                                             followers={30}/>)}
        </div>
    )
}