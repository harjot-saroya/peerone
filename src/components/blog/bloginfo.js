import {React, useState} from "react"
import {chairgirl} from '../../assets/index'
import "../blog/blog.css"
import data from '../../assets/data.json' 
import Article from './article'
const BlogInfo = () => {

    const [currCategory,setCat] = useState('latest')
    const [artSelected,setArt] = useState(false)
    const [currArt,setCurrArt] = useState({})

    const parse = (text) => {
        const ind = text.indexOf('.')
        return text.slice(0,ind)
    }

    const createCells = (art) => {
        const res = []
        if (art.length > 0)
        {
            art.forEach(item=>
                {   
                    if (item !== null)
                    {   const text = item.text
                        res.push(cell(item.title,item.type,item?.url,text))
                    }
                })
        }

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
        return createCells(allArt)
    }
    const cell = (name,type,image,news) => {
        if (name === "")
        {return ""}

        return(
        <div className="shell">
                <div className="newscol">
                    <div className="newspic">
                        <img id="newsimg" src={image}></img>
                    </div>
                    <div className="newstitle">
                        <span>{name}</span>
                    </div>
                    <div className="newstext">
                        <span id="news">{news.slice(0,1 + news.indexOf('.'))}</span>
                    </div>
                </div>
                <div className="newsrow">
                    <button onClick={() => {setArt(true);setCurrArt({name:name,news:news});}}>Read more</button>
                </div>
        </div>)
    }

    const show = () => {
        if (!artSelected)
        {   
            return setArticles(currCategory)
        }
        else
        {   
            return Article(currArt.name,currArt.news)
        }

    }
    return (
        <div className="blog">
            <div className="bodycontainer">
                <div className="content">
                    <h1 id="header">Latest Blog and news</h1>
                </div>
            </div>
            <div className="nav">
                <div><button id="navbutton" onClick={() => {setCat('latest')}}>Latest</button></div>
                <div><button id="navbutton" onClick={() => {setCat('admission')}}>Admission</button></div>
                <div><button id="navbutton" onClick={() => {setCat('university')}}>University</button></div>
                <div><button id="navbutton" onClick={() => {setCat('famous')}}>Famous</button></div>
                <div><button id="navbutton" onClick={() => {setCat('recharge')}}>Recharge</button></div>
                <div><button id="navbutton" onClick={() => {setCat('students')}}>Students</button></div>
            </div>

            <div className="news">
                {show()}
            </div>
        </div>
        
    )
}

export default BlogInfo