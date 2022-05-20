import express from "express";
import Post from "../../Models/Post";

const postRouter = express.Router();

postRouter.post("/create", (req, res, next) => {
  Post.create({ ...req.body })
    .then((post) => res.send(post.get()))
    .catch((err) => next({ errMessage: err.message }));
});

postRouter.get("/getall", (req, res, next) => {
  Post.findAll().then((posts) => res.send(posts));
});

export default postRouter;
