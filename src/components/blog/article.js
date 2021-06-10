import React from "react"
import "../body/body.css"

const Article = (title,text,url) => {
    return (
        <div className="article">
            <div className="toptext">
                <div className="artHeader">
                <div className="photocont">
                    <img id="artphoto" src={url}></img>
                </div>
                <h1>{title}</h1>
                </div>
            </div>
            <div className="bottext">
                <span>{text}</span>
            </div>
        </div>)
}

export default Article