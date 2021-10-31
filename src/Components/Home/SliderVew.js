import React from "react";
import { Carousel } from "react-bootstrap";
import img2 from "../../img/img2.jpg";
import img1 from "../../img/img1.jpg";
import img3 from "../../img/img3.jpg";
const SliderVew = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            style={{ height: "80vh" }}
            className=" fluid  w-100"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption >
            <h3>Get Traveler Booking</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={img1}
            style={{ height: "80vh" }}
            className=" fluid  w-100"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Get Safe Journey</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "80vh" }}
            className=" fluid  w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Save Your Amount</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderVew;
