import React from "react";
import "./meme.css";
import meme_data from "./meme_data";
export default function Memes() {
    const [meme,setMemeImage]=React.useState({
        topText:"",
        bottomText:"",
        image:"https:\/\/i.imgflip.com\/30b1gx.jpg"
    });
    const [allMemesImages, setAllMemeImages]=React.useState(meme_data);
    function getMemeImage(){
        const randomNumber= Math.floor(Math.random() * allMemesImages.length);
        const url=allMemesImages[randomNumber].url;
       setMemeImage(prevMemeImage=>({ 
           ...prevMemeImage,
            image:url,
        }))
    }
    //  const randomNumber= Math.floor(Math.random() * meme_data.length);
    // const [meme, setMemeFunc]=React.useState(meme_data[0].url)
    // function handleOnclick (){  
    //     setMemeFunc(meme_data[randomNumber].url)
    // }
    return (
        <div className="meme-container">
            <nav className="navbar">
                <h1><i class="fa-solid fa-face-smile-wink"></i>Random Meme Generator <i class="fa-solid fa-face-grin-tongue-wink"></i></h1>
            </nav>
            <section className="form-container">
                <div className="form">
                    <input type="text" className="left-input" placeholder="Left-input" />
                    <input type="text" className="right-input" placeholder="right-input" />
                    {/* <input type="submit" className="btn" value="Get me a Meme" onClick={handleOnclick} /> */}
                    <input type="submit" className="btn" value="Get me a Meme" onClick={getMemeImage} />
                </div>
            </section>
            <div className="meme-img">
              <img src={meme.image} alt="image is loading"/>
            </div>

        </div>
    )
};