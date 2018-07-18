import React, {Component} from 'react'
import Article from "../Article/index";
import './style.css'

class ArticleList extends Component {
    static NOT_EXISTED_ID = 0;

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
        var openedArticle = id === this.state.openedArticleId ? ArticleList.NOT_EXISTED_ID : id;

        this.setState({
            openedArticleId: openedArticle
        });

    }

}

export default ArticleList