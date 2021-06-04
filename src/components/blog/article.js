import React from "react"
import "../body/body.css"

const Article = (title,text) => {
    console.log(text)
    return (
        <div className="article">
            <div className="toptext">
                <div className="artHeader">
                <h1>{title}</h1>
                </div>
            </div>
            <div className="bottext">
                <span>{text}</span>
            </div>
        </div>)
}

export default Article