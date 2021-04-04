import React from "react"
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import * as styles from './faq.css';

const Collaplse = (props) => {
    
    return(
        <Collapsible trigger={props.title} triggerStyle={styles.troll} className="Closed">
            <span className="collaspableText">
                {props.children}
            </span>
        </Collapsible>
    )
}

export default Collaplse