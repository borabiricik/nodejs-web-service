import express from "express";
import Category from "../../Models/Category";
const categoryRouter = express.Router();

categoryRouter.get("/getall", async (req, res, next) => {
  await Category.findAll().then((categories) => res.send(categories));
});

export default categoryRouter;
