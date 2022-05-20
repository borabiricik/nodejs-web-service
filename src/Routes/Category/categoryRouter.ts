import express from "express";
import Category from "../../Models/Category";
const categoryRouter = express.Router();

categoryRouter.get("/getall", async (req, res, next) => {
  await Category.findAll().then((categories) => res.send(categories));
});

categoryRouter.post("/create", async (req, res, next) => {
  Category.create(req.body)
    .then((category) => res.send(category.get()))
    .catch((err) => next({ errMessage: err.message }));
});

categoryRouter.patch("/edit/:id", async (req, res, next) => {
  Category.findByPk(parseInt(req.params.id)).then((category) => {
    if (category) {
      category
        .update({ ...req.body })
        .then((updatedCategory) => res.send(updatedCategory.get()));
    } else {
      next({ errMessage: "Category not found !" });
    }
  });
});

categoryRouter.delete("/delete/:id", async (req, res, next) => {
  Category.findByPk(parseInt(req.params.id)).then((category) => {
    if (category) {
      category.destroy().then((value) => {
        res.send({ deletedValue: value });
      });
    } else {
      next({ errMessage: "Category Not Found !" });
    }
  });
});

export default categoryRouter;
