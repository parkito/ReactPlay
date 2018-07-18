import React, {Component} from 'react'

class Article extends Component {

    state = {
        isCurrentArticleOpened: false
    };

    render() {
        const {article, openedArticleId} = this.props;
        this.state.isCurrentArticleOpened = openedArticleId === article.id;
        const body = this.state.isCurrentArticleOpened && <section className='card-text'>{article.text}</section>;

        return (
            <div className='card mx-auto' style={{width: '50%'}}>
                <div className='card-header'>
                    <h2>{article.title}</h2>
                    <button className='btn btn-primary btn-lg float-right'
                            onClick={this.handleClick}>
                        {this.state.isCurrentArticleOpened ? 'Close' : 'Open'}
                    </button>
                </div>
                <div className='card-body'>
                    {body}
                </div>
                <h6 className='card-subtitle'>Report created {new Date().toTimeString()}</h6>
            </div>
        )
    }

    handleClick = () => this.props.changeOpenedArticleCallBack(this.props.article.id);
}

export default Article