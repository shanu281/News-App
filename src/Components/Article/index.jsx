import React from "react";
import "./style.css";
import PropTypes from "prop-types"


class Article extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.article)
       
        return (
            <>
                <div className="card" >
                    <h1 className="title">{this.props.article.title}</h1>
                    <img src={this.props.article.urlToImage} alt="image" />
                    <div className="description">
                        <div>
                            <h2 >{this.props.article.description}</h2>
                        </div>
                        <div className="btn">
                            <a href={this.props.article.url}>
                                <button>View more...</button>
                            </a>

                            <h3 className="author">{this.props.article.author}</h3>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
Article.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}
export default Article;