import React from "react"
import {suit,hand,speak} from '../../assets/index.js'
import "./infobar.css"

const Infobar = () => {
    return(
            <div className="icon-background">
                <div className="icons">
                            <div className="cell">
                                <img src={suit}></img>
                                <div className="text">
                                    <span>
                                    Gain Access to 1000s of Mentors All Over North America
                                    </span>
                                    <span id="bottext">
                                    With over 1000+ mentors to choose from. From a variety of fields, schools, and programs. The mentor for you is just a click away.
                                    </span>
                                </div>
                            </div>
                            <div className="cell">
                                <img src={hand}></img>
                                <div className="text">
                                    <span>
                                    Stand Out on Your Essay and Application
                                    </span>
                                    <span id="bottext">
                                    Get advice from those that have already done it. Walked the walk so now they can tell you exactly what they did. Get access to insider tips and tactics to stand apart from the crowd.
                                    </span>
                                </div>
                            </div>
                            <div className="cell">
                                <img src={speak}></img>
                                <div className="text">
                                    <span>
                                    Actionable Insights For Your Clarity and Peace of Mind
                                    </span>
                                    <span id="bottext">
                                    With one of the biggest decisions of your life, make sure you get all the information you need so you can make the right decision for yourself.
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                    </div>
            </div>
    )
}

export default Infobar