import React, { Component } from "react";
import PropTypes from "prop-types";

import Article from "./Article";

class ArticleList extends Component {
  onClickArticle = id => {
    this.props.onHandleClickArticle(id);
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        {articles.map(article => (
          <Article
            key={article.id}
            article={article}
            onClickArticle={this.onClickArticle}
          />
        ))}
      </div>
    );
  }
}

ArticleList.propTypes = {
  onHandleClickArticle: PropTypes.func.isRequired
};
export default ArticleList;
