import express from "express";
import User from "../../Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import tokenConfig from "../../token.config";
const authRouter = express.Router();

authRouter.post("/register", async (req, res, next) => {
  bcrypt.hash(req.body.password, 8, async (err, hash) => {
    const [user, created] = await User.findOrCreate({
      where: { username: req.body.username },
      defaults: { ...req.body, password: hash },
    });
    res.send({ ...user.get(), created });
  });
});

authRouter.post("/login", async (req, res, next) => {
  User.findOne({ where: { username: req.body.username } }).then((user) => {
    if (user) {
      bcrypt.compare(
        req.body.password,
        user.getDataValue("password"),
        (err, result) => {
          const payload = {
            username: user.getDataValue("username"),
          };
          if (result) {
            const token = jwt.sign(payload, tokenConfig.api_secret_key, {
              expiresIn: "1d",
            });
            res.send({
              success: true,
              token,
            });
          }
        }
      );
    }
  });
});

export default authRouter;
