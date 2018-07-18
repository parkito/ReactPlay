import React, {Component} from 'react'
import Article from "../Article/index";
import './style.css'

class ArticleList extends Component {
    state = {
        openedArticleId: null
    };

    render() {
        let articleElements = this.props.articles.map(article =>
            <li key={article.id} className='article-list_li'>
                <Article article={article}
                         openedArticleId={this.state.openedArticleId}
                         changeOpenedArticleCallBack={this.changeOpenedArticleId.bind(this, article.id)}/>
            </li>
        );

        return (
            <div>
                <ul>
                    {articleElements}
                </ul>
            </div>
        );
    }

    changeOpenedArticleId = (id) => {
        if (id === this.state.openedArticleId) {
            this.setState({
                openedArticleId: 0
            });
        } else {
            this.setState({
                openedArticleId: id
            });
        }

    }


}

export default ArticleList