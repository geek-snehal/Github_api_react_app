import React,{useEffect, useState} from "react";
import Usercard from "./Usercard";

function Users(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUserData(){
            const response = await fetch(`https://api.github.com/users`);
            const data = await response.json();
            const followerPromises = data.map(user=>{
                async function getFollowersList(){
                    return await fetch(user.followers_url)
                }
                return getFollowersList();
            })
            const followersResponse = await Promise.all(followerPromises);
            const followersJsonPromise = followersResponse.map(response =>{
                async function getJson(){
                    return await response.json();
                }
                return getJson();
            })
            const followers = await Promise.all(followersJsonPromise);
            setUser(data.map((e,i)=>{
                return{name: e.login,avatar: e.avatar_url,numFollowers: followers[i].length}
            }))
        }
        getUserData();    
    },[])
    return(
        <div className="card-container">
           
          {
               
              user.map(e => <Usercard name={e.name} avatar={e.avatar} numFollowers={e.numFollowers} numFollowing={10} stars={5}/>)
          }
        </div>
    )
}
export default Users;