import "./card.css";
import itsme from "./images/mypic.jpg"
export default function Card() {
    return (
        <div className="card-container">
            <div className="card">
              <img className="card-img" alt="loading" src={itsme} />
            {/* Description */}
              <div className="desc-bg"></div>
              <p className="name">Murari Thakur</p>
              <p className="role">Frontend Developer</p>
              <p className="website">itsme.website</p>
              <button className="btn-left"><span className="mail-text">Email</span></button>
              <button className="btn-right"><span className="link-text">Linkedin</span></button>
              <p className="about">About</p>
              <p className="about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
              <p className="interests">Interests</p>
              <p className="interests-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
              {/* Card Footer */}
                <div className="social-icon-bg"></div>
               <a className="twitter-icon" href="#"> <i class="fa-brands fa-square-twitter"></i></a>
               <a className="facebook-icon" href="#"> <i class="fa-brands fa-square-facebook"></i></a>
               <a className="instagram-icon" href="#"> <i class="fa-brands fa-square-github"></i></a>
               <a className="github-icon" href="#"> <i class="fa-brands fa-square-instagram"></i></a>
            </div>
        </div>
    )
}