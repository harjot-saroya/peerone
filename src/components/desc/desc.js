import './desc.css'
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
                    A world of admissions knowledge at your fingertips,</span> <span id="bold"> without the world-class cost </span>
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
                            <span>The average cost of a private counselor is approximately</span> <span id="bold">$250 per hour and can range up to $100,000+
on college advising packages</span>
                        </li>
                    </ul>

                    <div className="textblock">
                        <span>
                        Avoid making the same mistakes by learning from our Peer Mentors’ experience and find out how you can succeed in the college application process at </span>
                        <span id="bold">less than 10% of the cost compared to private counselors</span>
                        <span> to ultimately</span>
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