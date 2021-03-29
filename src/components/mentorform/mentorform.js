import {React, useState, useRef, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './mentorform.css'
import {chairgirl} from '../../assets/index.js'


const MentorForm = () => {
    let ref = useRef()
    let schoolRef = useRef()
    const [open,toggleOpen] = useState(false)
    const [school,setSchool] = useState("")
    const [major,setMajor] = useState("")
    const [showSubmit,setShow] = useState(false)
    const [schoolType,setType] = useState("Please select one")
    const [email,setEmail] = useState("")

    const handleShow = () => {
        setShow(!showSubmit)
    }

    const handleSchool = e => {
        setSchool(e)
    }

    const handleMajor = e => {
        setMajor(e)
    }

    const handleSchoolType = e => {
        setType(e)
        toggleOpen(false)
    }

    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(email)
    }

    const handleOpen = () => {
        toggleOpen(!open)
    }
    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            toggleOpen(false)
        }
    }
    useEffect(() =>{
        document.addEventListener("mousedown", handleClickOutside);
    })
    useEffect(() => {
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const submitMsg = showSubmit ? (
        <div>
            <span>Form submitted!</span>
        </div>
    ) : ("")

    return(
            <div className="mentorform">
                <div className="form-group">
                    <span id="question">What university are you looking for?</span>
                    <br />
                    <input id="forminputbox" className="form-control" required="required"/>
                    <br />
                    <span id="question">What major are you looking for?</span>
                    <br />
                    <input id="forminputbox" className="form-control"/>
                    <br />
                    <span id="question">Are you in highschool or post-secondary?</span>
                    <br />
                    <div className="ddowncontainer" ref={ref}>
                        <a className="dropdownbutton" onClick={handleOpen}>
                                <span ref={schoolRef} id="schoolstatus">{schoolType}  </span>
                                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </a>
                        {open &&(
                            <div className="dropdown">
                                <div className="listitem">
                                    <a id="option" onClick={() => {handleSchoolType("Post Secondary")}}>Post secondary</a>
                                </div>
                                <div className="listitem">
                                <a id="option" onClick={() => {handleSchoolType("High School")}}>High school</a>

                                </div>
                            </div>
                        )}
                    </div>
                    <br />
                    <span id="question">What is your email?</span>
                    <br />
                    <input id="forminputbox" onSubmit={handleEmail} placeholder="So we can notify you when we find a mentor" className="form-control"/>
                    <br />
                    <div className="submitcontainer">
                        <a id="submitbutton" for="email" type="submit" onClick={handleShow}>Submit</a>
                    </div>
                    {submitMsg}
                </div>
                <div className="photo">
                        <img id="pic" src={chairgirl}></img>
                </div>
            </div>
    )
}

export default MentorForm