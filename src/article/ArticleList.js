import React, { Component } from "react";
import PropTypes from "prop-types";

import { Pagination } from 'antd';
import Paper from "material-ui/Paper";
import Article from "./Article";

const ArticleListStyles = {
  pageable:{
    "text-align":"right",
    // width: "60%",
    paddingBottom: 30,
    width: "60%",
    marginTop: 50,
    marginLeft: "20%",
    "z-index":20
  }
}
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
      {/* <Paper style={ArticleListStyles.pageable}> */}
      <Pagination style={ArticleListStyles.pageable}  defaultCurrent={2} total={500} onChange={this.pageOnChange} />
      {/* </Paper> */}
      </div>
    );
  }
}

ArticleList.propTypes = {
  onHandleClickArticle: PropTypes.func.isRequired
};
export default ArticleList;
