import api from "./api";
import avatarImg from "../assets/avatarImg.png";
import backGroundImg from "../assets/Chrysanthemum.jpg";

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

export const showActiveTab = item => dispatch =>
  dispatch(
    showArticles([
      {
        id: "1",
        photo: backGroundImg,
        title: "Lovely",
        subtitle: "Miss You",
        author: "dmz",
        authorDes: "girl",
        avatar: avatarImg
      },
      {
        id: "2",
        photo: "",
        author: "dmz",
        authorDes: "girl",
        avatar: avatarImg
      },
      {
        id: "3",
        photo: "",
        author: "dmz",
        authorDes: "girl",
        avatar: avatarImg
      },
      {
        id: "4",
        photo: "",
        author: "dmz",
        authorDes: "girl",
        avatar: avatarImg
      },
      {
        id: "5",
        photo: "",
        author: "dmz",
        authorDes: "girl",
        avatar: avatarImg
      }
    ])
  );
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
