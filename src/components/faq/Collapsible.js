import React from "react"
import Collapsible from './react-collapsible/react-collapsible';
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