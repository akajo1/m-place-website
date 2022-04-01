import React from "react";
import PubItem from "../molecules/PubItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { pubType } from "../../config";
type Props = {
  lists: pubType[]
};

export default function PubOrg({lists}: Props) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings} className="pub__container">
       {
            lists.length > 0 && lists.map((item,index)=>  <PubItem
            lien={item.lien}
            uri={item.image}
            key={index}
          />)
        }
       
  
    </Slider>
  );
}
