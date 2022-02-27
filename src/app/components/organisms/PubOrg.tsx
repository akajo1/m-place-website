import React from "react";
import PubItem from "../molecules/PubItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Props = {};

export default function PubOrg({}: Props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="pub__container">
      <PubItem
        lien=""
        uri="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_1280.jpg"
      />
      <PubItem
        lien=""
        uri="https://cdn.pixabay.com/photo/2019/11/07/20/48/cinema-4609877__340.jpg"
      />
      <PubItem
        lien=""
        uri="https://cdn.pixabay.com/photo/2016/03/03/10/17/social-media-1233873__340.jpg"
      />
    </Slider>
  );
}
