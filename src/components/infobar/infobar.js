import React from "react"
import {list,magnify,paperfold} from '../../assets/index.js'
import "./infobar.css"

const Infobar = () => {
    return(
            <div className="icon-background">
                <div className="title">
                    What we help with
                </div>
                <div className="subtitle">
                    We help you get the information you need to submit your application with confidence
                </div>
                <div className="icons">
                            <div className="cell">
                                <img className="info-img" src={list}></img>
                                <div className="text">
                                    <span>
                                    Building a school list
                                    </span>
                                    <span id="bottext">
                                    Need help deciding which schools & programs to apply to? Talk to a Peer Mentor about your interests.
                                    </span>
                                </div>
                            </div>
                            <div className="cell">
                                <img className="info-img" src={magnify}></img>
                                <div className="text">
                                    <span>
                                    Essay Writing/Feedback
                                    </span>
                                    <span id="bottext">
                                    Avoid common essay mistakes by learning from the experience of our Peer Mentors. Figure out how you can write the most compelling narrative that is authentically yours.
                                    </span>
                                </div>
                            </div>
                            <div className="cell">
                                <img className="info-img" src={paperfold}></img>
                                <div className="text">
                                    <span>
                                    Choosing a college
                                    </span>
                                    <span id="bottext">
                                    Don’t be unpleasantly surprised by campus & student life after committing and arriving at school. It’s too late. Make the best, informed decision for you.
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