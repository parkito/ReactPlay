import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: true
    };

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div>
                <h2>{article.title}</h2>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'Close' : 'Open'}
                </button>

                {body}
                <h3>Page created {new Date().toTimeString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article