import React from "react";
export default function RandomUsers(props){
   return(
    <div className="user-container">
       <h2>{props.fullname}</h2>
       <p>{props.post} </p>
       <p>{props.hobby} </p>
    </div>
   )
}