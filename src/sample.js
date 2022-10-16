// 4.Travel_Journel(Component) Rendering Code.
import React from "react";
import "./App.css";
import TravelBlog from "./components/Travel_Journel/travel";
import travel_data from "./components/Travel_Journel/travel_data";
export default function App (){
    const data=travel_data.map(item=>{
        return <TravelBlog key={item.id} {...item}  />
    })
    return (
        <div className="app-container">
             <nav className="navbar">
                <h2><i class="fa-solid fa-globe"></i>My Travel Journel</h2>
             </nav>
             {data}
         </div>
    )
};
// ************************************\\


// 0.Sample mapping Code.
let arr = [3, 4, 5, 6];
console.log(arr.map(a => a * a));
let arr4 = ['arun', 'myself', 'murari'];
console.log(arr4.map(a => a[0].toUpperCase() + a.slice(1)));
console.log(arr4.map(a => `"<p>${a}</p>"`))
// ************************************\\

// 1.Card(Component) Rendering Code.
import React from "react";
import "./App.css";
import Card from "./components/card/card";
export default function App() {
    return (
        <div className="app-container">
            <Card />
        </div>
    )
};
// ************************************\\

// 2.RandomUsers(Component) Rendering Code.
// Code for the Implementation of Random Users
import React from "react";
import "./App.css";
import RandomUsers from "./components/RandomUsers/random";
import data from "./components/RandomUsers/user";
export default function App() {
    const user = data.map(item => {
        return <RandomUsers
            fullname={item.fullname} post={item.post} hobby={item.hobby} />
    })
    return (
        <div className="app-container">
            {user}
        </div>
    )
};
// ************************************\\

// 3.RandomJokes(Component) Rendering Code.
// Code for the Implementation of Random Jokes
import React from "react";
import "./App.css";
import data from "./components/Jokes/jokes_data";
import RandomJokes from "./components/Jokes/jokes";
export default function App() {
    const Jokes = data.map(item => {
        return <RandomJokes key={item.id} id={item.id} setup={item.setup} punchline={item.punchline} />
    })
    return (
        <div className="app-container">
            <h3>Random Jokes</h3>
            {Jokes}
        </div>
    )
};
// ************************************\\