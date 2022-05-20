import { json } from "body-parser";
import express from "express";
import authenticateDataBase, { db } from "./Constants/db";
import ErrorMiddleware from "./Middlewares/ErrorMiddleware";
import tokenConfig from "./token.config";
import { mainRouter } from "./Routes/mainRouter";

const app = express();
const port = 3000;

app.set("api_secret_key",tokenConfig.api_secret_key)

authenticateDataBase();

app.use(json());

app.use("/api", mainRouter);

app.use(ErrorMiddleware);

db.sync({ alter: true });

app.listen(port, () => {
  console.log(`Server is listening from ${port} port !`);
});
