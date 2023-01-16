import React from "react";
import Button from "../Button/Button";
import { groupMembers } from "../../data";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="buttons">
        {groupMembers.map((member) => (
          <a
            href={member.link}
            target="_blank"
            rel="noreferrer"
            key={member.id}
          >
            <Button buttonType="btnBlack" type="button">
              <Image
                src={member.img}
                alt={member.title}
                width={300}
                height={300}
              />
              {member.title}
            </Button>
          </a>
        ))}
      </div>
      <div className="copyright">
        <p>
          © 2023 ⎟ Made by Group 8 in the course, The First Single-Page App,
          from Frontend Developer program FED24 in Hyper Island
        </p>
      </div>
    </div>
  );
};

export default Footer;
