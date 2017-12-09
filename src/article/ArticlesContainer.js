import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import ArticleList from "./ArticleList";
import { showArticleDetail } from "./ArticleAction";

const ArticlesStyle = {
  add: {
    position: "absolute",
    right: "10%",
    top: "30%",
    zIndex: 10000
  }
};
class ArticlesContainer extends Component {
  onHandleClickArticle = id => {
    // this.props.showArticleDetail(id);
    this.props.history.push(`/article/articleDetail/${id}`);
  };

  onAddNewArticle = () => {
    this.props.history.push("/article/edit");
  };
  // this.props.showArticleDetail(id).then(() => {
  //   this.props.history.push("/article/articleDetail");
  // });

  render() {
    const { articles } = this.props;
    return (
      <div>
        <ArticleList
          articles={articles}
          onHandleClickArticle={this.onHandleClickArticle}
        />
        <FloatingActionButton
          style={ArticlesStyle.add}
          onClick={this.onAddNewArticle}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

ArticlesContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
  // showArticleDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps, { showArticleDetail })(
  ArticlesContainer
);
