import React, { useState } from "react"
import Typed from "react-typed"
import {suit,hand,speak} from '../../assets/index.js'
import styles from "./infobar.css"

const Infobar = () => {
    return(
            <div className="icon-background">
                <div className="icons">
                    <table>
                        <tr>
                            <th>
                                <img src={suit}></img>
                            </th>
                            <th>
                                <img src={hand}></img>
                            </th>
                            <th>                        
                                <img src={speak}></img>
                            </th>
                        </tr>
                        <tr id="toptext">
                            <td>
                                Gain Access to 1000s of Mentors All Over North America
                            </td>
                            <td>
                                Stand Out on Your Essay and Application
                            </td>
                            <td>
                                Actionable Insights For Your Clarity and Peace of Mind
                            </td>
                        </tr>
                        <tr id="bottomtext">
                            <td>
                            With over 1000+ mentors to choose from. From a variety of fields, schools, and programs. The mentor for you is just a click away.
                            </td>
                            <td>
                            Get advice from those that  have already done it. Walked the walk so now they can tell you exactly what they did. Get access to insider tips and tactics to stand apart from the crowd.
                            </td>
                            <td>
                            With one of the biggest decisions of your life, make sure you get all the information you need so you can make the right decision for yourself.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
    )
}

export default Infobar