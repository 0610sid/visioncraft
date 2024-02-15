import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { useTimer } from "react-timer-hook";
import cross from "../assets/cross.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import AOS from "aos"
import 'aos/dist/aos.css';

const Home = () => {
  const [show, setshow] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 70) {
        document.querySelector("#nav").classList.add("navbar-border");
      } else {
        if (
          document.querySelector("#nav").classList.contains("navbar-border")
        ) {
          document.querySelector("#nav").classList.remove("navbar-border");
        }
      }
    };
  });

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  useEffect(() => {
    setTimeout(() => {
      setshow(true);
    }, 15000);
    AOS.init({
      easing : "ease"
    })
  }, []);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => console.log("Timer expired"),
  });

  var hero = document.getElementById("hero")
  var founder = document.getElementById("founder")
  var steps = document.getElementById("steps")
  var cta = document.getElementById("cta")

  return (
    <div className="container">
      <div className="navbar" id="nav">
        <p className="nav-title">VisionCraft</p>
        <div className="navbar-allign">
          <div onClick={() => {hero.scrollIntoView({behavior : "smooth" , block : "start"})}} className="link">
            Home
          </div>
          <div className="link" onClick={() => {steps.scrollIntoView({behavior : "smooth" , block : "start"})}}>
            Proficiency
          </div>
          <div onClick={() => {founder.scrollIntoView({behavior : "smooth" , block : "start"})}} className="link">
            About Founder
          </div>
          <div onClick={() => {cta.scrollIntoView({behavior : "smooth" , block : "start"})}} className="link">
            Buy
          </div>
        </div>
      </div>

      <div className="main-page" id="hey">
        <div className="hero-outer" id="hero">
          <div className="hero-left">
            <div className="title">
              <span style={{ "--i": 0 }}>V</span>
              <span style={{ "--i": 1 }}>i</span>
              <span style={{ "--i": 2 }}>s</span>
              <span style={{ "--i": 3 }}>i</span>
              <span style={{ "--i": 4 }}>o</span>
              <span style={{ "--i": 5 }}>n</span>
              <span style={{ "--i": 6 }}>C</span>
              <span style={{ "--i": 7 }}>r</span>
              <span style={{ "--i": 8 }}>a</span>
              <span style={{ "--i": 9 }}>f</span>
              <span style={{ "--i": 10 }}>t</span>
            </div>
            <p className="tagline">Crafted for you, delivered by us.</p>
          </div>
        </div>

        <div className="card" id="founder" data-aos = "flip-left" data-aos-delay="300" data-aos-once = "false" data-aos-duration="500">
          <div className="additional">
            <div className="user-card">
              <div className="founder-img"></div>
            </div>
            <div className="more-info">
              <p className="founder-name">Darsheel Savla</p>
              <div className="coords">
                <p className="text-left">Founder :</p>
                <p className="text-left">PatilKaki</p>
              </div>
              <div className="coords">
                <p className="text-left">Key Contribution :</p>
                <p className="text-left">Forbes 40 Under 40</p>
              </div>
              <div className="stats">
                <SocialIcon url="/" network="instagram" />
                <SocialIcon url="/" network="linkedin" />
                <SocialIcon url="/" network="x" />
                <SocialIcon url="/" network="email" />
              </div>
            </div>
          </div>
          <div className="general">
            <p className="founder-name">Darsheel Savla</p>
            <p className="founder-info">
              A charismatic and creative powerhouse who infuses his passion for
              food, people, and brand building into everything he does. With an
              unshakable drive and an insatiable appetite for culinary
              exploration, he's determined to bring the legendary recipes of
              PatilKaki to the world. Also, a visionary leader with a passion
              for building D2C businesses, Darsheel is rolling out his new
              consultancy programme.
            </p>
            <p className="more">Hover over the image for more info</p>
          </div>
        </div>

        <div className="steps" id="steps" data-aos = "zoom-in" data-aos-delay="300" data-aos-once = "false" data-aos-duration="500">
          <div className="steps-inner">
            <p className="steps-title">Unique Expertise</p>

            <div className="num-flex">
              <div className="num-ctn">
                <div className="num-num">01</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>

              <div className="num-ctn">
                <div className="num-num">02</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>
            </div>

            <div className="num-flex">
              <div className="num-ctn">
                <div className="num-num">03</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>

              <div className="num-ctn">
                <div className="num-num">04</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cta" id="cta" data-aos = "flip-right" data-aos-delay="300" data-aos-once = "false" data-aos-duration="500">
          <div className="inner-cta-left">
            <p className="cta-txt">This was made for you</p>
            <p className="cta-txt">What are you waiting for ?</p>
          </div>
          <div className="inner-cta-right">
            <div className="timer-outer">
              <div>
                <p>{hours}</p>
                <p>Hours</p>
              </div>
              :
              <div>
                <p>{minutes}</p>
                <p>Minutes</p>
              </div>
              :
              <div>
                <p>{seconds}</p>
                <p>Seconds</p>
              </div>
            </div>

            <div className="btn-container">
              <button className="btn">Buy Now</button>
            </div>

            <p className="timer-tag">
              **Offer valid for limited time period only
            </p>
          </div>
        </div>
      </div>

      {show && (
        <div className="popupform">
          <button
            className="closebtn"
            onClick={() => {
              setshow(false);
            }}
          >
            <img src={cross} className="cross" />
          </button>
          
          <p className="form-text">Kindly fill the below form</p>
          <div className="field-ctn">
            <div className="fields">
              <img src={email} className="img"/>
              <input className="input" placeholder='Email' type='text' />
            </div>
            <div className="fields">
              <img src={phone} className="img"/>
              <input className="input" placeholder='Number' type='text' />
            </div>
          </div>
          <div className="btn-container"><button className="yellow-btn">Submit</button></div>
        </div>
      )}
    </div>
  );
};

export default Home;
