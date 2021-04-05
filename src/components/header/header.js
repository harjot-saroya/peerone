import {react} from "react"
import testlogo from '../../assets/peerone.jpeg'
import'./header.css'


const Header = () => {

    const screenHandler = () => {
        const size = window.screen.width;
        if (size < 981) {
            window.scrollTo({top:1020,behavior:'smooth'})
        }
        else {
            window.scrollTo({top:750,behavior:'smooth'})
        }
    }
     
    return(
        <div className="elements">
            <div className="browsecomponent">
                <img src={testlogo} id="logo" />
                <a id="browsebutton" href="" onClick={(e)=>{e.preventDefault(); screenHandler();}}>Browse Mentors</a>
            </div>
        </div>
    )
}

export default Header