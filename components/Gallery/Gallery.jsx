import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../data.js";
import Banner from "../Banner/Banner";
import Image from "next/image";

const Gallery = () => {
  // todo: add 1 of 10 to the bottom
  return (
    <div id="gallery">
      <Banner headingType="gallery" />
      <section className="gallery">
        <div className="carousel-wrapper">
          <Carousel
            axis={"horizontal"}
            showArrows={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            showStatus={false}
          >
            {images.map((img) => (
              <div className="carousel" key={img.id}>
                <Image
                  className="carousel_img"
                  src={img.link}
                  alt={img.title}
                  width={400}
                  height={400}
                />
                <div className="carousel_info">
                  <h3>{img.title}</h3>
                  <h4>{img.role}</h4>
                  <p>{img.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
