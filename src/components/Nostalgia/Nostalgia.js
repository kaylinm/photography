import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

import GoToTop from "../GoToTop";

import nostalgia1 from "./full-size/nostalgia1.JPG";
import nostalgia2 from "./full-size/nostalgia2.jpg";
import nostalgia3 from "./full-size/nostalgia3.JPG";
import nostalgia4 from "./full-size/nostalgia4.JPG";
import nostalgia5 from "./full-size/nostalgia5.jpg";
import nostalgia6 from "./full-size/nostalgia6.JPG";
import nostalgia7 from "./full-size/nostalgia7.jpg";
import nostalgia8 from "./full-size/nostalgia8.jpg";
import nostalgia9 from "./full-size/nostalgia9.JPG";
import nostalgia10 from "./full-size/nostalgia10.jpg";
import nostalgia11 from "./full-size/nostalgia11.jpg";
import nostalgia12 from "./full-size/nostalgia12.jpg";
import nostalgia13 from "./full-size/nostalgia13.jpg";
import nostalgia14 from "./full-size/nostalgia14.jpg";
import nostalgia15 from "./full-size/nostalgia15.jpg";
import nostalgia16 from "./full-size/nostalgia16.jpg";
import nostalgia17 from "./full-size/nostalgia17.jpeg";
import nostalgia18 from "./full-size/nostalgia18.JPG";

import nostalgia1thumbnail from "./thumbnails/nostalgia1thumbnail.jpg";
import nostalgia2thumbnail from "./thumbnails/nostalgia2thumbnail.jpg";
import nostalgia3thumbnail from "./thumbnails/nostalgia3thumbnail.jpg";
import nostalgia4thumbnail from "./thumbnails/nostalgia4thumbnail.jpg";
import nostalgia5thumbnail from "./thumbnails/nostalgia5thumbnail.jpg";
import nostalgia6thumbnail from "./thumbnails/nostalgia6thumbnail.jpg";
import nostalgia7thumbnail from "./thumbnails/nostalgia7thumbnail.jpg";
import nostalgia8thumbnail from "./thumbnails/nostalgia8thumbnail.jpg";
import nostalgia9thumbnail from "./thumbnails/nostalgia9thumbnail.jpg";
import nostalgia10thumbnail from "./thumbnails/nostalgia10thumbnail.jpg";
import nostalgia11thumbnail from "./thumbnails/nostalgia11thumbnail.jpg";
import nostalgia12thumbnail from "./thumbnails/nostalgia12thumbnail.jpg";
import nostalgia13thumbnail from "./thumbnails/nostalgia13thumbnail.jpg";
import nostalgia14thumbnail from "./thumbnails/nostalgia14thumbnail.jpg";
import nostalgia15thumbnail from "./thumbnails/nostalgia15thumbnail.jpeg";
import nostalgia16thumbnail from "./thumbnails/nostalgia16thumbnail.jpeg";
import nostalgia17thumbnail from "./thumbnails/nostalgia17thumbnail.jpeg";
import nostalgia18thumbnail from "./thumbnails/nostalgia18thumbnail.jpg";

const Nostalgia = () => {
  return (
    <section className="gallery">
      <SRLWrapper>
        <a href={nostalgia1}>
          <img
            src={nostalgia1thumbnail}
            alt="Timeless - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={nostalgia12}>
          <img
            src={nostalgia12thumbnail}
            alt="Future Selfs - Cacique, Colon, Panama"
          />
        </a>

        <a href={nostalgia2}>
          <img
            src={nostalgia2thumbnail}
            alt="Minuscule Monumental Tendencies - Poughkeepsie, New York"
          />
        </a>

        <a href={nostalgia3}>
          <img
            src={nostalgia3thumbnail}
            alt="Ephemeral Recollections - Cornwall, New York"
          />
        </a>

        <a href={nostalgia4}>
          <img
            src={nostalgia4thumbnail}
            alt="Recurring Dreams - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={nostalgia5}>
          <img
            src={nostalgia5thumbnail}
            alt="Our Last Sunrise - Amelia Island, Florida"
          />
        </a>
        <a href={nostalgia14}>
          <img
            src={nostalgia14thumbnail}
            alt="Golden Reflections - Cacique, Colon, Panama"
          />
        </a>

        <a href={nostalgia6}>
          <img src={nostalgia6thumbnail} alt="Youth - Huger, South Carolina" />
        </a>

        <a href={nostalgia7}>
          <img
            src={nostalgia7thumbnail}
            alt="Long Term Memory - Mount Pleasant, South Carolina"
          />
        </a>
        <a href={nostalgia11}>
          <img
            src={nostalgia11thumbnail}
            alt="Flowing Fantasies - Cacique, Colon, Panama"
          />
        </a>

        <a href={nostalgia8}>
          <img
            src={nostalgia8thumbnail}
            alt="Chai Leaves - Saint Peter, Minnesota"
          />
        </a>

        <a href={nostalgia9}>
          <img
            src={nostalgia9thumbnail}
            alt="Happy Hour - Mount Pleasant, South Carolina"
          />
        </a>

        <a href={nostalgia13}>
          <img
            src={nostalgia13thumbnail}
            alt="REM Sleep - Cacique, Colon, Panama"
          />
        </a>
        <a href={nostalgia15}>
          <img
            src={nostalgia15thumbnail}
            alt="Grounded Oscillations - Rum Point, Cayman Islands"
          />
        </a>

        <a href={nostalgia10}>
          <img
            src={nostalgia10thumbnail}
            alt="Fabric of Fairytales - Cacique, Colon, Panama"
          />
        </a>
        <a href={nostalgia16}>
          <img
            src={nostalgia16thumbnail}
            alt="Familiar Embrace - Rum Point, Cayman Islands"
          />
        </a>

        <a href={nostalgia17}>
          <img
            src={nostalgia17thumbnail}
            alt="Iridescence - New River, Todd,  NC"
          />
        </a>
        <a href={nostalgia18}>
          <img
            src={nostalgia18thumbnail}
            alt="Polar Dawn - Isle of Palms, SC"
          />
        </a>
      </SRLWrapper>
      <GoToTop />
    </section>
  );
};

export default Nostalgia;
