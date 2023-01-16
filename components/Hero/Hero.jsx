import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="left">
        <h1>COOLEST NFT SHOP</h1>
        <div className="display_mobile">
          <Button
            buttonType="btnWhite"
            onClick={() => {
              window.location.href = "#marketplace";
            }}
          >
            BUY NFT
          </Button>
        </div>
        <p>
          WELCOME TO Monaki! MEET OUR COLLECTION OF 3.333 UNIQUE NFT. SUPPORT AND JOIN OUR
          COMMUNITY, A NEW WORLD ARE WAITING FOR YOU.
        </p>
        <Image
          className="circle_element"
          src="/circle_element.png"
          alt="circle_element"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="right">
        <div className="right_bg">
          <Image
            className="hero_circle"
            src="/hero_circle.png"
            alt="hero_circle"
            width={500}
            height={500}
            priority
          />
          <Image
            className="hero_img"
            src="/hero.png"
            alt="hero"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
