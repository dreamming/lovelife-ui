export const articleById = id => ({
  type: "ARTICLE_BY_ID",
  id
});

export const showArticleDetail = id => dispatch => {
  dispatch(articleById(id));
};
