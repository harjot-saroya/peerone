import React from "react"
import Collaplse from './Collapsible';
import './faq.css';
import { firstBoxText1, firstBoxText2, secondBoxText1, secondBoxText2, secondBoxText3, secondBoxText4, 
    thirdBoxText1, thirdBoxText2, thirdBoxText3 ,fourthBoxText1, fourthBoxText2, fourthBoxText3, 
    fourthBoxText4, fiffthBoxText1, fiffthBoxText2, sixthBoxText1, sixthBoxText2 } from "./constants"

const Faq = () => {
    return(
        <div className="faqContainer">
            <div className="faqTitle">
                <span>Frequent Asked Questions</span>
            </div>
            <Collaplse title="What is PeerOne">
                {firstBoxText1}
                {firstBoxText2}
            </Collaplse>
            <Collaplse title="Why PeerOne">
                {secondBoxText1}
                {secondBoxText2}
                {secondBoxText3}
                {secondBoxText4}
            </Collaplse>
            <Collaplse title="How does PeerOne work?">
                {thirdBoxText1}
                {thirdBoxText2}
                {thirdBoxText3}
            </Collaplse>
            <Collaplse title="Who are the Peer Mentors?">
                {fourthBoxText1}
                {fourthBoxText2}
                {fourthBoxText3}
                {fourthBoxText4}
            </Collaplse>
            <Collaplse title="What if I don’t like my Peer Mentor?">
                {fiffthBoxText1}
                {fiffthBoxText2}
            </Collaplse>
            <Collaplse title="When are you launching?">
                {sixthBoxText1}
                {sixthBoxText2}
            </Collaplse>
        </div>
    )
}

export default Faq