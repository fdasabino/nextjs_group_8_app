/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="left">
        <h1>COOLEST NFT SHOP</h1>
        <div className="display_mobile">
          <Button buttonType="btnWhite">BUY NFT</Button>
        </div>
        <p>
          WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT
          AND JOIN OUR COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
        </p>
        <img
          className="circle_element"
          src="/circle_element.png"
          alt="circle_element"
        />
      </div>
      <div className="right">
        <div className="right_bg">
          <img
            className="hero_circle"
            src="/hero_circle.png"
            alt="hero_circle"
          />
          <img className="hero_img" src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
