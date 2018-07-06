import api from "./api";

export const showArticles = articles => ({
  type: "SHOW_ARTICLE",
  articles
});

export const showPhotos = photos => ({
  type: "SHOW_PHOTOS",
  photos
});

export const showVideos = videos => ({
  type: "SHOW_VIDEOS",
  videos
});

export const showActiveTab = item => dispatch => {
  switch (item) {
    case 0:
    api.userTab.showHomePage(item).then(article=>{
      dispatch(showArticles(article))
    });
      break;
    case 1:
      dispatch(showPhotos(item));
      break;
    case 2:
      dispatch(showVideos(item));
      break;
    default:
      break;
  }
}
// api.userTab.showHomePage(item).then(homeItem => {
//   switch (item) {
//     case 0:
//       dispatch(showArticles(homeItem));
//       break;
//     case 1:
//       dispatch(showPhotos(homeItem));
//       break;
//     case 2:
//       dispatch(showVideos(homeItem));
//       break;
//     default:
//       break;
//   }
// });
