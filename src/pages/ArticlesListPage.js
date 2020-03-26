import React from 'react'
import ArticlesList from '../components/ArticlesLIst'
import articles from './article-content'


const ArticlesListPage = () => (
    <>
    <h1>Articles List</h1>
    <ArticlesList  articles={articles}/>

    
    </>
 
        
)

export default ArticlesListPage;