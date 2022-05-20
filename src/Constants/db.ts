import { Sequelize } from "sequelize";

export const db = new Sequelize("nodejs-web-server", "root", "123123", {
  dialect: "mysql",
  host: "127.0.0.1",
  define:{
    timestamps:false
  }
  
});

const authenticateDataBase = () => {
  try {
    db.authenticate();
    console.log("DB Connection Successful");
  } catch (error) {
    console.log(error);
    console.log("DB Connection Failed");
  }
};

export default authenticateDataBase;
