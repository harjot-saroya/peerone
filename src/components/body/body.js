import React, { useState } from "react"
import Typed from "react-typed"
import {studychick} from '../../assets/index.js'
import "./body.css"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Body = () => {
    const [email, setEmail] = useState('');
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const SimpleForm = () => <MailchimpSubscribe url={"https://peeroneacademy.us1.list-manage.com/subscribe/post?u=d7424f9b94edc1c716d3ffd6d&amp;id=cec63eed43"}/>
    return (
        <div className="bodycontainer">
            <div className="bodycontent">

                <h1 id="header">College applications can be stressful, but they don't have to be.</h1>

                <span id="description"> High school students: meet 1-on-1 with current undergrads at the colleges you’re applying to. </span>
                <br />

                <span id="help">I need help with </span>

                <div className="infobox">
                    
                    <Typed
                        strings={["My Admission essays","Interview prep","Financial Aid","Campus Life", "Sports Recruitment", "Scholarship", "My college application"]}
                        typeSpeed={60}
                        loop
                    />
                </div>
                <div className="form-group-body">
                <MailchimpSubscribe render={({ subscribe, status, message }) => (
                    <div>
                        <SimpleForm onSubmitted={formData => subscribe(formData)} />
                    </div>
                    )} url={"https://peeroneacademy.us1.list-manage.com/subscribe/post?u=d7424f9b94edc1c716d3ffd6d&amp;id=cec63eed43"} />
                <br />
                
                </div>
                <div>
                    <span id="description2">PeerOne is available to a limited number of students as Mentors will be available on a first-come, first-serve basis.</span>
                </div>
                
            </div>
            <div className="imagecontainer">
                    <img src={studychick} id="bodyimage">
                    </img>
            </div>
        </div>
    )
}

export default Body