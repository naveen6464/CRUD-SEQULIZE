import {Sequelize} from "sequelize";
const db=new Sequelize('mern','root','root',{
    host:"127.0.0.1",
    dialect:"mysql"
});
export default db;