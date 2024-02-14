import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

import heroimg from "../assets/homepage.png";

const Home = () => {
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

  return (
    <div className="container">
      <div className="navbar" id="nav">
        <div className="navbar-allign">
          <a href="/#hero" className="link">
            Home
          </a>
          <a className="link" href="/#steps">
            Why Us ?
          </a>
          <a href="/#bye" className="link">
            Buy
          </a>
          <a href="/#founder" className="link">
            About Founder
          </a>
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
            <p className="tagline">Crafting D2C Success Together</p>
          </div>

          <div className="hero-right">
            <img src={heroimg} />
          </div>
        </div>

        <div className="about" id="#founder">
          <div className="card">
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
                  <p className="text-left">Stays at :</p>
                  <p className="text-left">India</p>
                </div>
                <div className="stats">
                  <SocialIcon url="/" network="instagram" />
                  <SocialIcon url="/" network="linkedin" />
                  <SocialIcon url="/" network="x" />
                  <SocialIcon url="/" network="github" />
                </div>
              </div>
            </div>
            <div className="general">
              <p className="founder-name">Darsheel Savla</p>
              <p className="founder-info">
                A charismatic and creative powerhouse who infuses his passion
                for food, people, and brand building into everything he does.
                With an unshakable drive and an insatiable appetite for culinary
                exploration, he's determined to bring the legendary recipes of
                PatilKaki to the world. Also, a visionary leader with a passion
                for building D2C businesses, Darsheel is rolling out his new
                consultancy programme.
              </p>
              <p className="more">Hover over the image for more info</p>
            </div>
          </div>
        </div>

        <div className="steps" id="#steps">
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
                <div className="num-num">01</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>
            </div>

            <div className="num-flex">
              <div className="num-ctn">
                <div className="num-num">01</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>

              <div className="num-ctn">
                <div className="num-num">01</div>
                <div className="numinfo">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam cum neque dicta assumenda ipsam.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
