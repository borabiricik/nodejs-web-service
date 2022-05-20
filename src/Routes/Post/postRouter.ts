import express from "express";
import Post from "../../Models/Post";

const postRouter = express.Router();

postRouter.get("/getall", (req, res, next) => {
  Post.findAll().then((posts) => res.send(posts));
});

postRouter.get("/getByCategoryId/:categoryId", async (req, res, next) => {
  Post.findAll({ where: { CategoryId: req.params.categoryId } })
    .then((posts) => res.send(posts))
    .catch((err) => next({ errMessage: err.message }));
});

postRouter.post("/create", (req, res, next) => {
  Post.create({ ...req.body })
    .then((post) => res.send({ ...post.get(), success: true }))
    .catch((err) => next({ errMessage: err.message }));
});

postRouter.patch("/edit/:id", (req, res, next) => {
  Post.findByPk(parseInt(req.params.id)).then((post) => {
    if (post) {
      post
        .update({ ...req.body })
        .then((updatedPost) =>
          res.send({ ...updatedPost.get(), success: true })
        );
    } else {
      next({ errMessage: "Post not found" });
    }
  });
});

postRouter.delete("/delete/:id", async (req, res, next) => {
  Post.findByPk(parseInt(req.params.id)).then((post) => {
    if (post) {
      post
        .destroy()
        .then((deletedValue) => res.send({ deletedValue, success: true }));
    } else {
      next({ errMessage: "Post Not Found", errCode: 404 });
    }
  });
});

export default postRouter;
