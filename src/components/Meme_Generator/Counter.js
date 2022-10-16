import React from "react";
import "./meme.css";
export default function Memes() {
    function handleOnclick(){
      let randomNumber= Math.floor(Math.random() * 10 + 1);
       console.log(randomNumber)
    }
    let [count,setCount]=React.useState(0)
    function handleOnclickInc(){
        setCount(count + 1);
    }
    function handleOnclickDec(){
        setCount(prevCount => prevCount -1);
        // the above code is the best practice to write react code
    }
    return (
        <div className="meme-container">
            <nav className="navbar">
                <h1><i class="fa-solid fa-face-smile-wink"></i>Random Meme Generator <i class="fa-solid fa-face-grin-tongue-wink"></i></h1>
            </nav>
            <section className="form-container">
                <div className="form">
                    <input type="text" className="left-input" placeholder="Left-input" />
                    <input type="text" className="right-input" placeholder="right-input" />
                    <input type="submit" className="btn" value="Get me a Meme" onClick={handleOnclick} />
                </div>
            </section>
            <div className="meme-img">
              <h1>Counter</h1>
              <div>
                <span className="dec-counter" onClick={handleOnclickDec}>-</span>
                <span className="counter">{count}</span>
                <span className="inc-counter" onClick={handleOnclickInc}>+</span>
              </div>
            </div>

        </div>
    )
};