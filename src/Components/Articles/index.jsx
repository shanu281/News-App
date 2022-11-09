import React from "react";
import Article from "../Article";
import "./style.css"

class Articles extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="article-container">
                    <Article />
                </div>
            </>
        )
    }
}
export default Articles;