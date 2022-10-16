import "./jokes.css"
import React from "react";
export default  function RandomJokes(props){

    return(
        <section className="jokes">
            <h5>{props.id +1}:{props.setup}</h5>
            <h5>{props.punchline}</h5>
            <br/>
        </section>
    )
};