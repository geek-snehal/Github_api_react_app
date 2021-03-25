import React from "react";
import { UserCard } from "react-ui-cards";
import {useHistory} from "react-router-dom";

function Usercard({name,avatar,numFollowers,numFollowing,stars}){
  const history = useHistory();
    return(
        <UserCard
          float
          onClick={event => {
            history.push(`user/${name}`)
          }}
          header='https://i.imgur.com/w5tX1Pn.jpg'
          avatar={avatar}
          name={name}
          positionName='Software Developer'
          stars={[
            {
              name: 'followers',
              value: numFollowers
            },
            {
              name: 'following',
              value: numFollowing
            },
            {
              name: 'stars',
              value: stars
            }
          ]}
        />
    )
}

export default Usercard;