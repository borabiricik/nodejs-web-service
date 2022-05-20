import express from "express";
import Post from "../../Models/Post";

const postRouter = express.Router();

postRouter.get("/getall", (req, res, next) => {
  Post.findAll().then((posts) => res.send(posts));
});

export default postRouter;
