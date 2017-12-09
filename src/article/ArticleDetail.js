import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "material-design-lite/material.min.css";
import "../css/ArticleDetail.css";

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    const articleId = this.props.match.params.id;
    this.showArticleById(articleId);
  }

  showArticleById = id => {
    this.props.articles.forEach(v => {
      if (v.id === id) {
        this.setState({ article: v });
      }
    });
  };

  render() {
    return (
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <div className="demo-ribbon" />
        <main className="demo-main mdl-layout__content">
          <div className="demo-container mdl-grid">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
            <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
              {/* <div className="demo-crumbs mdl-color-text--grey-500">
                Google &gt; Material Design Lite &gt; How to install MDL
              </div> */}
              <p>{this.state.article.id}</p>
              {/* <h3>How to install MDL</h3> */}
              {/* <p>
                Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud
                officia aute dolor dolor. Magna esse ullamco pariatur
                adipisicing consectetur eu commodo officia. Ex cillum consequat
                mollit minim elit est deserunt occaecat nisi amet. Quis aliqua
                nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip
                dolore ut incididunt duis adipisicing. Elit consequat nisi
                eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip
                ut proident consectetur amet ex dolore consectetur aliqua elit.
              </p>
              <p>
                Commodo nisi non consectetur voluptate incididunt mollit duis
                dolore amet amet tempor exercitation. Qui amet aute ea aute id
                ad aliquip proident. Irure duis qui labore deserunt enim in quis
                nisi sint consequat aliqua. Ex proident labore et laborum tempor
                fugiat sint magna veniam minim. Nulla dolor labore adipisicing
                in enim mollit laboris fugiat eu. Aliquip minim cillum ullamco
                voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum
                ad et nisi amet non voluptate culpa qui do. Labore ullamco et
                minim proident est laborum mollit ad labore deserunt ut irure
                dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu
                excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis
                anim reprehenderit proident aute ad consectetur eiusmod.
              </p>
              <p>
                Tempor tempor aliqua in commodo cillum Lorem magna dolore
                proident Lorem. Esse ad consequat est excepteur irure eu irure
                quis aliqua qui. Do mollit esse veniam excepteur ut veniam anim
                minim dolore sit commodo consequat duis commodo. Sunt dolor
                reprehenderit ipsum minim eiusmod eu consectetur anim excepteur
                eiusmod. Duis excepteur anim dolor sit enim veniam deserunt anim
                adipisicing Lorem elit. Cillum sunt do consequat elit laboris
                nisi consectetur.
              </p>
              <h3>Basic MDL Usage</h3>
              <p>
                Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud
                officia aute dolor dolor. Magna esse ullamco pariatur
                adipisicing consectetur eu commodo officia. Ex cillum consequat
                mollit minim elit est deserunt occaecat nisi amet. Quis aliqua
                nostrud Lorem occaecat sunt. Eiusmod quis amet ullamco aliquip
                dolore ut incididunt duis adipisicing. Elit consequat nisi
                eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip
                ut proident consectetur amet ex dolore consectetur aliqua elit.
              </p> */}
            </div>
          </div>
        </main>
        {/* <h1>{this.state.article.id}</h1> */}
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
const mapStateToProps = state => ({
  articles: state.articles
});

export default connect(mapStateToProps, null)(ArticleDetail);
