import React from "react"
import "../body/body.css"

const Article = (title,text) => {

    return (
        <div className="article">
            <div className="toptext">
                <div className="artHeader">
                <h1>{title}</h1>
                </div>
            </div>
            <div>
                <span>{text}</span>
            </div>
        </div>)
}

export default Article