import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { cardAvatars } from "/data.js";

const Card = ({ showModal }) => {
  return (
    <div className="card_wrapper">
      <div className="card_header">
        <div className="avatars">
          {cardAvatars.map((item) => (
            <div key={item.id}>
              <Image
                className="avatars"
                src={item.img}
                alt={item.alt}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
        <div className="card_info">
          <p>Remaining Time</p>
          <p>09H : 11M : 07S </p>
        </div>
      </div>
      <div className="card_main_img">
        <Image src="/hero.png" alt="placeholder" width={400} height={400} />
      </div>
      <div className="card_footer">
        <div className="footer_info">
          <p>Current Bid</p>
          <p>7 ETH</p>
        </div>
        <Button buttonType="btnPurple" type="button" onClick={showModal}>
          Bid Now
        </Button>
      </div>
    </div>
  );
};

export default Card;
