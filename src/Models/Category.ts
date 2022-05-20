import { DataTypes } from "sequelize";
import { db } from "../Constants/db";

const Category = db.define("Category", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
