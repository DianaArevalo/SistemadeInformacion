import {Sequelize} from 'sequelize'

const db = new Sequelize('sistema', 'root', 'root',{
    host:'localhost',
    dialect: 'mysql'
})
export default db