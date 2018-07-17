import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App() {
    return (
        <div>
            <div style={{color: 'red'}}>
                <h1> App name</h1>
            </div>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default App