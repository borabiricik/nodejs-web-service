import { DataTypes } from "sequelize";
import { db } from "../Constants/db";
import Category from "./Category";
import User from "./User";

const Post = db.define("Post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Post.belongsToMany(Category,{through:"Post_Category"});
Post.belongsTo(User)

export default Post;
