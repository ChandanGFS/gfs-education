import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SliderComponent = () => {
  const images = [
    "/Media/Slide1.jpg",
    "/Media/Slide2.jpg",
    "/Media/Slide3.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "5px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        fontSize: "24px",
        color: "#fff",
        background: "rgba(0, 0, 0, 0.5)",
        padding: "5px",
        borderRadius: "90%",
      }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "5px",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 2,
        fontSize: "24px",
        color: "#fff",
        background: "rgba(0, 0, 0, 0.5)",
        padding: "5px",
        borderRadius: "90%",
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export default SliderComponent;
