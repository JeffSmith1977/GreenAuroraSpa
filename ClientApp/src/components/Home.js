import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import MenuImagen from "./controls/MenuImagen";

export function Home(props) {

  const sliders = [
    {
      img: 1,
      title: "Welcome to Green Aura Spa",
      subtitle: "Text Pending."
    },
    {
      img: 2,
      title: "Shiatsu Massages",
      subtitle: "Shiatsu Massage is an alternative technique that involves manual pressure applied to specific points on the body in an attempt to relieve tension and pain."
    },
    {
      img: 3,
      title: "Couples Massage",
      subtitle: "Text Pending."
    },
  ];

  

  return (
    <>
      <Carousel variant="dark" fade={true}>

        {
          sliders.map((slider, index) => {

            const { title, subtitle, img } = slider;

            return <Carousel.Item key={index}>
              <img className="d-block w-100"
                src={require(`../svg/slide-${img}.jpg`).default}
                alt="First slide" />
              <Carousel.Caption>
                <h5>{title}</h5>
                <p>{subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>

          })
        }

      </Carousel>
       <MenuImagen {...props} />
    </>
  );

}
