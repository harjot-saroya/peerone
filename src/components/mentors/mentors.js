import React, { useState } from "react"
import {julia,kath,desmond,filo,joey,kelly,ryan,york,sam} from '../../assets/index.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from "./mentors.css"
const slideImages = [julia,kath,desmond,filo,joey,kelly,ryan,york,sam];


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Mentors = () => {
    return (
        <div>
            <div className="mentortext">
                <span id="special">Real advice </span>
                <span>from</span>
                <span id="special"> real college students</span>
                <br />
                <span>Featured mentors</span>
            </div>


            <div className="carousel">
                <Carousel
                className="photos"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={3000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                    <div className="container">
                        <img id="image" src={julia}></img>
                        <span id="name">JULIA</span>
                        <span id="school">New York University</span>
                        <span id="program">Data Science and Management</span>
                    </div>
                    <div className="container">
                        <img id="image" src={desmond}></img>
                        <span id="name">DESMOND</span>
                        <span id="school">Harvard University</span>
                        <span id="program">Law</span>
                    </div>
                    <div className="container">
                        <img id="image" src={kath}></img>
                        <span id="name">KATHERON INTSON</span>
                        <span id="school">Queens University</span>
                        <span id="program">NSERC Canada Graduate Scholar (Doctoral)</span>
                    </div>
                    <div className="container">
                        <img id="image" src={filo}></img>
                        <span id="name">FILOMENA HARMANTAS</span>
                        <span id="school">University Of Toronto</span>
                        <span id="program">Juris Doctor Program, Law</span>
                    </div>
                    <div className="container">
                        <img id="image" src={joey}></img>
                        <span id="name">JOEY HUANG</span>
                        <span id="school">University Of British Columbia</span>
                        <span id="program">Marketing & Business Management</span>
                    </div>
                    <div className="container">
                        <img id="image" src={kelly}></img>
                        <span id="name">KELLY CHONG</span>
                        <span id="school">University Of Western Ontario</span>
                        <span id="program">Management And Organizational Studies</span>
                    </div>
                    <div className="container">
                        <img id="image" src={ryan}></img>
                        <span id="name">RYAN TIAN</span>
                        <span id="school">Carnegie Mellon University</span>
                        <span id="program">Architecture And Mathematics</span>
                    </div>
                    <div className="container">
                        <img id="image" src={york}></img>
                        <span id="name">YORK WANG</span>
                        <span id="school">New York University</span>
                        <span id="program">Data Science and Management</span>
                    </div>
                    <div className="container">
                        <img id="image" src={sam}></img>
                        <span id="name">SAM WIEDER</span>
                        <span id="school">New York University</span>
                        <span id="program">Finance & Data Science</span>
                    </div>
                    </Carousel>
            </div>
        </div>
    )
}

export default Mentors