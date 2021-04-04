import React, { useState } from "react"
import Typed from "react-typed"
import {studychick} from '../../assets/index.js'
import "./body.css"

const Body = () => {
    const [email, setEmail] = useState('');
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    return (
        <div className="bodycontainer">
            <div className="bodycontent">

                <h1 id="header">College applications can be stressful, but they don't have to be.</h1>

                <span id="description"> High school students: meet 1-on-1 with current undergrads at the colleges you’re applying to. </span>
                <br />

                <span id="help">I need help with </span>

                <div className="infobox">
                    
                    <Typed
                        strings={["This is a test string bro","Get rekt",'Here you can find anything', "Test 1 2 3 4", ]}
                        typeSpeed={60}
                        loop
                    />
                </div>
                <div className="form-group-body">
                <input id="inputbox" placeholder="Email me when its ready" type="text" className="form-control" onChange={emailHandler}/>
                <a id="emailbutton" for="email" type="submit" href="google.ca" onSubmit={emailHandler}>Reserve my spot</a>
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