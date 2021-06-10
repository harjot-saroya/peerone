import React, { useState } from "react"
import Typed from "react-typed"
import {row1, row2, row3, row4} from '../../assets/index.js'
import styles from "./schools.css"

const Schools = () => {
    return(
        <div className="schoolspage">
            <div className="schoolheader">
                <span className="schooltitle">Gain access to 2000+ Peer Mentors from over 130+ different colleges across North America including …</span>
            </div>
            <div className="pics">
                <img src={row1}></img>
                <img src={row2}></img>
                <img src={row3}></img>
                <img src={row4}></img>
            </div>
        </div>
    )
}

export default Schools