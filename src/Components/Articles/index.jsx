import React from "react";
import Article from "../Article";
import "./style.css"
import data from "../data";

class Articles extends React.Component {
    constructor(props) {
        super(props)
    }

 render() {
        return (
            <>
                <div className="article-container">
                    {data.map(article =>
                        <Article  key = {article.publishedAt} article={article}/>
                    )
                    }
                </div>
            </>
        )
    }
}
export default Articles;