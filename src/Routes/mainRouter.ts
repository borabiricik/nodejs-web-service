import express from "express";
import authRouter from "./Auth/authRouter";
import categoryRouter from "./Category/categoryRouter";
import postRouter from "./Post/postRouter";

export const mainRouter = express.Router();


mainRouter.use("/auth", authRouter);
mainRouter.use("/category",categoryRouter)
mainRouter.use("/post",postRouter)
