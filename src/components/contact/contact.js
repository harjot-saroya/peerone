import {React, useState} from "react"
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// const key = "AIzaSyCJw6qBKY0HrGtDWnH29gbBUCyjwoMoWvk"


const ContactForm = () => {
    const [showSubmit,setShow] = useState(false)

    const handleShow = () => {
        setShow(!showSubmit)
    }
    return( 
            <div className="contact">                       
                <span id="cont-header">CONTACT US</span>


                <div className="items">
                    <div className="cont-form">
                        <div className="leftside">
                            <div className="cont-text">
                                <span id="innerhead">We want to hear from you!</span>
                                <span id="innerdesc">Interested in becoming a Peer Mentor? Want to help? Have any questions, suggestions or comments? Send us an email at info@peeroneacademy.com</span>
                            </div>
                            <div className="cont-form-group">

                                <div className="userinfo">
                                    <input id="inpbox" className="form-control" required="required" placeholder="Full Name"/>
                                    <input id="inpbox" className="form-control" placeholder="Email Address"/>
                                </div>

                                <textarea id="message" placeholder="Message"></textarea>
                                <div className="submitcontainer">
                                <a id="submitbutton" for="email" type="submit" onClick={handleShow}>Submit</a>
                                </div>
                                <div className="bulleticon">
                                    <div className="icon">
                                        <FontAwesomeIcon id="iconitem" icon={faEnvelope} color={'white'}></FontAwesomeIcon>
                                    </div>
                                    <div class="icontextcont">
                                        <span id="topicon">Email</span>
                                        <span id="bottomicon">info@peeroneacademy.com</span>
                                    </div>
                                </div>
                                <div className="bulleticon">
                                    <div className="icon">
                                        <FontAwesomeIcon id="iconitem" icon={faMapMarkerAlt} color={'white'}></FontAwesomeIcon>
                                    </div>
                                    <div class="icontextcont">
                                        <span id="topicon">Address</span>
                                        <span id="bottomicon">Vancouver, BC Canada</span>
                                    </div>
                                </div>

                                
                            </div>
                        </div>

                    </div>
                    <div className="map">
                    <iframe id="map" style={{border:0}} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?zoom=11&center=49.2827%2C-123.1207&key=AIzaSyCJw6qBKY0HrGtDWnH29gbBUCyjwoMoWvk"></iframe>
                    </div>

                </div>
            </div>
            
    )
}

export default ContactForm