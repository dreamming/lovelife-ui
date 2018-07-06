import React, { Component } from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import CardMedia from "material-ui/Card/CardMedia";
import RichEditor from "../components/RichEditor";
import MediaEdior from "../components/MediaEditor";
// import Remarkable from "remarkable";

const ArticleEditStyles = {
  title: {
    height: "10px"
  },
  editor: {
    bottom: "100px",
    top: "100px",
    left: "100px",
    right: "100px",
    margin: "auto",
    position: "absolute",
    // height: 800
    // marginTop: "20%"
    // height: 8000
    // textAlign: "center"
    // display: "-webkit-flex",
    // "-webkit-justify-content": "center",
    // "-webkit-align-items": "center"
  }
};

class ArticleEdit extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      article: {
        title: "",
        content: ""
      }
    };
  }

  onChange = e =>
    this.setState({
      article: { ...this.state.article, [e.target.name]: e.target.value }
    });

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { article } = this.state;
    return (
      <div style={ArticleEditStyles.editor}>
        {/* <CardMedia>
          <img alt={article.title} src={article.photo} />
        </CardMedia> */}

        {/* <h3 style={ArticleEditStyles.title}>{article.title}</h3>
        <TextField
          id="title"
          name="title"
          floatingLabelText="Article Title"
          floatingLabelFixed
          fullWidth
          value={article.title}
          onChange={this.onChange}
        /> */}
        {/* <TextField
          id="content"
          name="content"
          // hintText="Content"
          floatingLabelText="Article Content"
          floatingLabelFixed
          multiLine
          fullWidth
          rows={15}
          rowsMax={15}
          value={article.content}
          onChange={this.onChange}
        />  */}

        <RichEditor />
        {/* <MediaEdior /> */}
      </div>
    );
  }
}

export default ArticleEdit;
