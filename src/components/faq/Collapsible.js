import React from "react"
import Collapsible from 'react-collapsible';
import './faq.css';

const Collaplse = (props) => {
    return(
        <Collapsible trigger={props.title} className="Closed">
            <span className="collaspableText">
                {props.children}
            </span>
        </Collapsible>
    )
}

export default Collaplse