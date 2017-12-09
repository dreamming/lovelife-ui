export default function articleReducer(articles = [], action) {
  switch (action.type) {
    case "SHOW_ARTICLE":
      return action.articles;
    case "ARTICLE_BY_ID":
      return articles.filter(v => action.id === v.id);
    default:
      return articles;
  }
}
