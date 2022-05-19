import express from "express";
import { db } from "./Constants/db";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Merhaba Dunya !");
});

db.authenticate()

app.listen(port, () => {
  console.log(`Server is listening from ${port} port !`);
});
