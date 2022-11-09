import React from "react";
import "./style.css";
import data from "../data";

class Article extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(data)
        return (
            <>
                {
                    data.map(article =>
                        <div className="card">
                            <h1 className="title">{article.title}</h1>
                            <img src={article.urlToImage} alt="image" />
                            <div className="description">
                                <div>
                                    <h2 >{article.description}</h2>
                                </div>
                                <div className="btn">
                                    <a href={article.url}>
                                    <button>View more...</button>
                                    </a>

                                    <h3 className="author">{article.author}</h3>
                                </div>
                            </div>
                        </div>


                    )
                }
            </>
        )
    }
}
export default Article;