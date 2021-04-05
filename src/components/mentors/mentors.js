import React, { useState } from "react"
import {julia,kath,desmond,filo,joey,kelly,ryan,york,sam} from '../../assets/index.js'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./mentors.css"


const Mentors = () => {
    return (
        <div className="carousel">
            <div className="mentortext">
                <span id="special">Real advice </span>
                <span>from</span>
                <span id="special"> real college students</span>
                <br />
                <span>Featured mentors</span>
            </div>
            <div className="caro-container">
                <Carousel centerSlidePercentage={33} centerMode showStatus={false} showArrows={true}>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={julia} />
                            </div>
                            <div className="textcont">
                                <span id="top">JULIA LI</span>
                                <br />
                                <span>New York University</span>
                                <br />
                                <span>Data Science and Management</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={kath} />
                            </div>
                            <div className="textcont">
                                <span id="top">KATHERON INTSON</span>
                                <br />
                                <span>Queens University</span>
                                <br />
                                <span>NSERC Canada Graduate Scholar (Doctoral)</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={desmond} />
                            </div>
                            <div className="textcont">
                                <span id="top">DESMOND SIADAT</span>
                                <br />
                                <span>Harvard University</span>
                                <br />
                                <span>Law</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={filo} />
                            </div>
                            <div className="textcont">
                                <span id="top">FILOMENA HARMANTAS</span>
                                <br />
                                <span>University Of Toronto</span>
                                <br />
                                <span>Juris Doctor Program, Law</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={joey} />
                            </div>
                            <div className="textcont">
                                <span id="top">JOEY HUANG</span>
                                <br />
                                <span>University Of British Columbia</span>
                                <br />
                                <span>Marketing & Business Management</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={kelly} />
                            </div>
                            <div className="textcont">
                                <span id="top">KELLY CHONG</span>
                                <br />
                                <span>University Of Western Ontario</span>
                                <br />
                                <span>Management And Organizational Studies</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={ryan} />
                            </div>
                            <div className="textcont">
                                <span id="top">RYAN TIAN</span>
                                <br />
                                <span>Carnegie Mellon University</span>
                                <br />
                                <span>Architecture And Mathematics</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={york} />
                            </div>
                            <div className="textcont">
                                <span id="top">YORK WANG</span>
                                <br />
                                <span>John Hopkins University</span>
                                <br />
                                <span>Molecular & Cellular Biology</span>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="photo-cont">
                            <img id="photos"src={sam} />
                            </div>
                            <div className="textcont">
                                <span id="top">SAM WIEDER</span>
                                <br />
                                <span>New York University</span>
                                <br />
                                <span>Finance & Data Science</span>
                            </div>
                        </div>
                </Carousel>
            </div>

        </div>
    )
}

export default Mentors