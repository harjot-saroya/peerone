import react from "react"
import styles from './desc.css'
import {descpic} from '../../assets/index'
const Description = () => {

    return(
        <div className="descpage">
            <div className="descheader">
                <span>WHY PEERONE?</span>
            </div>
            <div className="descitems">
                <div className="lefttext">
                    <div className="textblock">
                    <span>
                    A world of admissions knowledge at your fingertips,</span> <span id="bold"> the world-class cost</span>
                    </div>

                    <span id="bold">Did you know …</span>
                    <ul id="desclist">
                        <li>
                            <span>Most high schools in the US have a student-to-counselor ratio of</span> <span id="bold"> 482-to-1</span> <span> (NACAC) </span>
                        </li>
                        <li>
                            <span>The numbers are not much better in Canada with an average student-to-counselor ratio of <span id="bold"> 396-to-1</span> and sometimes as high as <span id="bold"> 826-to-1</span> (People for Education)</span>
                        </li>
                        <li>
                             <span id="bold">26% of high achieving seniors </span> <span> in the US hire a private college counselor (IECA)</span>
                        </li>
                        <li>
                            <span>The average cost of a private counselor is approximately</span> <span id="bold">$250 per hour</span>
                        </li>
                    </ul>

                    <div className="textblock">
                        <span id="bold">
                            College applications can be stressful, especially without any help.
                        </span> 
                        
                        <span>The unfortunate reality is that schools don’t have the resources to give every high-schooler one-on-one attention, not everyone can afford visits to multiple college campuses, and hiring private help can get verrrry expensive so… then what?
                        </span>
                    </div>

                    <div className="textblock">
                        <span>
                        PeerOne connects you to undergraduate college student Mentors who are exactly where you want to be next year. As current students, they will be able to give you the most relevant, up-to-date information at </span>
                        <span id="bold">less than 10% of the cost compared to private counselors.</span>
                    </div>
                    
                    <div className="textblock">
                        <span>
                        Avoid making the same mistakes by learning from our Peer Mentors’ experience and find out how you can succeed in the college application process and ultimately</span> 
                        <span id="bold"> gain acceptance to the school that’s just right for you.</span>
                    </div>

                </div>
                <div className="descpic">
                    <img src={descpic}></img>
                </div>
            </div>
        </div>

    )
}

export default Description