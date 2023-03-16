import React, {Component} from "react";
import LangContext from "./lang-context";

function ArticleActions () {

  return(
    <LangContext.Consumer>
      {(context) => {
        return (
          <div className="article__actions">
            <button className="article__btn">{context.action_button}</button>
          </div>
        )
      }}
    </LangContext.Consumer>
  );
}

export default ArticleActions;

