import express from "express";
import Article from "../models/Article";

const router = express.Router();

router.post("/", (req, res) => {
  const { item } = req.body;
  switch (item) {
    case 0:
    Article.find().then(articles => {
      res.json({homeItem:articles})
    })
    break;

    case 1:
    break;

    case 2:
    break;

    default:
}});

router.get('/abcd', (req, res) => {
  res.send('Hello Housem !');
});
export default router;

