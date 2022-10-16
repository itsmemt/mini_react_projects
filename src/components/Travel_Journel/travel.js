import React from "react";
import "./travel.css";
export default function TravelBlog(props){
    // console.log(props.img)
    return (
        <section className="travel-container">
            <div className="img-container">
                <img className="pic" src={props.img} alt="Image is loading..."/>
            </div>
            <div className="desc-container">
            <h4 className="country"><i class="fa-solid fa-location-dot"></i>{props.country}</h4>
                <h2 className="place">{props.place} </h2>
                <p className="date">{props.date} </p>
                <p className="desc">{props.desc} </p>
            </div>
        </section>
    )
}