import React from "react"
import "../body/body.css"

const Article = (title,text,url, setArt) => {
    return (
        <div className="article">
            <div className="toptext">
                <div className="artHeader">
                <button className="back" onClick={() => setArt(false)}>Back to articles</button>
                <h1>{title}</h1>
                <div className="photocont">
                    <img id="artphoto" src={url}></img>
                </div>
                </div>
            </div>
            <div className="bottext">
                <span>{text}</span>
            </div>
        </div>)
}

export default Article