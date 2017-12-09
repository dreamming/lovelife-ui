import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { item } = req.body;

  res.json({
    articles: [
      //   {
      //     photo: "../../assets/Chrysanthemum.jpg",
      //     title: "Lovely",
      //     subtitle: "Miss You",
      //     author: "dmz",
      //     authorDes: "girl single",
      //     avatar: "../../assets/0.png"
      //   },
      //   {
      //     photo: "",
      //     author: "dmz",
      //     authorDes: "girl single",
      //     avatar: "../../assets/0.png"
      //   },
      //   {
      //     photo: "",
      //     author: "dmz",
      //     authorDes: "girl single",
      //     avatar: "../../assets/0.png"
      //   },
      //   {
      //     photo: "",
      //     author: "dmz",
      //     authorDes: "girl single",
      //     avatar: "../../assets/0.png"
      //   },
      //   {
      //     photo: "",
      //     author: "dmz",
      //     authorDes: "girl single",
      //     avatar: "../../assets/0.png"
      //   }
    ]
  });

  //   User.findOne({ email: credentials.email }).then(user => {
  //     if (user && user.isPasswdCorrect(credentials.password)) {
  //       res.json({ user: user.authJsonToken() });
  //     } else {
  //       res.status(400).json({ errors: { gloable: "Invalid Credentials" } });
  //     }
  //   });
});
