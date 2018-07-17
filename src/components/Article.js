import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: true
    };

    //Creation
    componentWillMount() {
        console.debug('Hello')
    }

    componentDidMount() {
        console.debug('Hello')
    }

    //Update
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.props.isOpen) {
            alert("Changed")
        }
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section className='card-text'>{article.text}</section>;
        return (
            <div className='card mx-auto' style={{width: '50%'}}>
                <div className='card-header'>
                    <h2>{article.title}</h2>

                    <button className='btn btn-primary btn-lg float-right' onClick={this.handleClick}>
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                <div className='card-body'>
                    {body}
                </div>
                <h6 className='card-subtitle'>Report created {new Date().toTimeString()}</h6>
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}

export default Article