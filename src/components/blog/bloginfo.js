import {React, useState} from "react"
import {chairgirl} from '../../assets/index'
import "../blog/blog.css"
import data from '../../assets/data.json' 

const BlogInfo = () => {
    const parse = (text) => {
        const ind = text.indexOf('.')
        return text.slice(0,ind)
    }
    const createCells = () => {
        const articles = data.articles
        const res = articles.map(art=>cell(art.title,art.type,null,parse(art.text)))
        return res
    }

    const setArticles = (e) => {
        const allArt = data.articles.map(art => {
            if (e === 'latest')
            {
                return art
            }
            else if (e === art.type) 
            {
                return art
            }
            else
            {
                return null
            }
        })
        console.log(allArt)
        return <div>allArt</div>
    }

    const cell = (name,type,img,news) => {
        return(
        <div className="shell">
                <div className="newscol">
                    <div className="newspic">
                        <img id="newsimg" src={chairgirl}></img>
                    </div>
                    <div className="newstitle">
                        <span>{name}</span>
                    </div>
                    <div className="newstext">
                        <span id="news">{news}</span>
                    </div>
                </div>
                <div className="newsrow">

                </div>
        </div>)
    }
    return (
        <div>
            <div className="bodycontainer">
                <div className="content">
                    <h1 id="header">Latest Blog and news</h1>
                </div>
            </div>
            {setArticles('students')}
            <div className="nav">
                <div><button id="navbutton" onClick={() => {setArticles('latest')}}>Latest</button></div>
                <div><button id="navbutton" onClick={() => {setArticles('admission')}}>Admission</button></div>
                <div><button id="navbutton" onClick={() => {setArticles('university')}}>University</button></div>
                <div><button id="navbutton" onClick={() => {setArticles('famous')}}>Famous</button></div>
                <div><button id="navbutton" onClick={() => {setArticles('recharge')}}>Recharge</button></div>
                <div><button id="navbutton" onClick={() => {setArticles('students')}}>Students</button></div>
            </div>

            <div className="news">
                {createCells()}
            </div>
        </div>
        
    )
}

export default BlogInfo