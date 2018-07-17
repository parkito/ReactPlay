import React from 'react'

function Article() {
    const body = <section>body</section>
    return (
        <div style={{color: 'blue'}}>
            <h2>title</h2>
            {body}
            <h3>Creation date {new Date().toDateString()}</h3>
        </div>
    )
}

export default Article