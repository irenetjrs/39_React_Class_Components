import React, {Component} from "react";
import ArticleActions from "./ArticleActions";
import ArticleBody from "./ArticleBody";
import ArticleTitle from "./ArticleTitle";
function Article() {
    return (
        <div className="article">
            <div className="article__title">
                <ArticleTitle />
            </div>
            <ArticleBody />
            <ArticleActions />
        </div>
    );
}
export default Article;


