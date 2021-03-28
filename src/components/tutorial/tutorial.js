import react from "react"
import styles from './tutorial.css'
import {beanbag, seperator, discuss, confused} from '../../assets/index'
const Tutorial = () => {

    const bullet = (t1,t2,pic) =>{
        return(
            <div className="bullet">
                        <div className="textone">
                            <span id="topic">{t1}</span>
                            <br />
                            <span id="desc">{t2}</span>
                        </div>
                        <div>
                            <img src={pic}></img>
                        </div>
            </div>
        )
    }

    const revbullet = (t1,t2,pic) => {
        return(
            <div className="bullet">
                        <div classname="photo">
                            <img src={pic}></img>
                        </div>
                        <div className="texttwo">
                            <span id="topic">{t1}</span>
                            <br />
                            <span id="desc">{t2}</span>
                        </div>
            </div>
        )
    }
    return(
        <div className="tutorial">
            <div className="header">
                <span id="tutheader">HOW IT WORKS</span>
            </div>
            <div className="bullets">
                {bullet('1. Find your perfect Peer Mentor','Use our easy-to-use filter search to find your perfect Peer Mentor within PeerOne’s extensive network based on school, major, career aspirations and more.', beanbag)}
                <div>
                    <img src={seperator}></img>
                </div>
                {revbullet('2. Make the first move','Once you find your Peer Mentor, make the first move. Whether you want to schedule a one-on-one video call, start a quick question thread or simply submit your essay for review, send in your request and wait for your Peer Mentor to confirm.',discuss)}
                <div>
                    <img id="rev" src={seperator}></img>
                </div>
                {bullet('3. Get the facts','Peer Mentors know the ins and outs of the application process because they’ve done it before. They’ll guide you through every step of their application journey so you too can succeed on yours. Ask your mentor any questions you have about their application experience or their campus life and get the facts you need to make the best decisions for you.',confused)}
            </div>
        </div>
    )
}

export default Tutorial