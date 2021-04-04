import {react} from "react"
import testlogo from '../../assets/peerone.jpeg'
import styles from './header.css'


const Header = () => {
     
    return(
        <div className="elements">
            <div className="browsecomponent">
                <img src={testlogo} id="logo" />
                <a id="browsebutton" href="" onClick={(e)=>{e.preventDefault();window.scrollTo({top:800,behavior:'smooth'})}}>Browse Mentors</a>
            </div>
        </div>
    )
}

export default Header