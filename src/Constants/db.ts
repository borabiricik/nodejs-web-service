import { Sequelize } from "sequelize";

export const db =  new Sequelize({
    dialect:"mssql",
    database:"nodejs-web-service",
    host:"localhost"
})

try {
    db.authenticate()
    console.log("DB Connection Successful")
} catch (error) {
    console.log(error)
    console.log("DB Connection Failed")
}
