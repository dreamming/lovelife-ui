import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "material-ui/Card";
import CardActions from "material-ui/Card/CardActions";
import CardHeader from "material-ui/Card/CardHeader";
import CardTitle from "material-ui/Card/CardTitle";
import CardMedia from "material-ui/Card/CardMedia";
import RaisedButton from "material-ui/RaisedButton";
import CardText from "material-ui/Card/CardText";
// import Paper from "material-ui/Paper";

const ArticleStyles = {
  article: {
    paddingBottom: 30,
    width: "60%",
    marginTop: 50,
    marginLeft: "20%"
  },

  cardAction: {
    textAlign: "right",
    marginRight: 20,
    marginBottom: 0
  },

  cardMedia: {
    width: "100%",
    height: 400
  }
};
class ArticleCard extends Component {
  clickArticle = () => {
    const { article } = this.props;
    // console.log(article.id);
    this.props.onClickArticle(article.id);
  };
  render() {
    const { article } = this.props;
    return (
      <Card initiallyExpanded style={ArticleStyles.article} zDepth={2}>
        <CardHeader
          onExpandChange={this.onHandleClick}
          title={article.author}
          subtitle={article.authorDes}
          actAsExpander
          avatar={article.avatar}
          showExpandableButton
        />

        {article.photo && (
          <CardMedia
            style={ArticleStyles.cardMedia}
            overlay={
              <CardTitle title={article.title} subtitle={article.subtitle} />
            }
          >
            <img
              alt={article.title}
              style={ArticleStyles.cardMedia}
              src={article.photo}
            />
          </CardMedia>
        )}

        <CardText expandable>
          <h1>Title</h1>
          日照香炉生紫烟，遥看瀑布挂前川。 飞流直下三千尺，疑是银河落九天。 ...
        </CardText>

        <CardActions expandable style={ArticleStyles.cardAction}>
          <RaisedButton primary label="More" onClick={this.clickArticle} />
        </CardActions>
      </Card>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string.isRequired,
    authorDes: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onClickArticle: PropTypes.func.isRequired
};
export default ArticleCard;
