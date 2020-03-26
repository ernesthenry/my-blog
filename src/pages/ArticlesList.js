import React from 'react'
import { Link } from 'react-router-dom'
import articles from './article-content'


const ArticlesList = () => (
    <>
    
    <h1>Articles List</h1>

       
       {articles.map((article, key) => 
       <Link  className="article-list-item" key={key} to={`/article/${article.name}`}>
           <h3>{article.title}</h3>
           <p>{article.content[0].substring(0,150)}...</p>
        </Link>
       )}
    </>
 
        
)

export default ArticlesList;