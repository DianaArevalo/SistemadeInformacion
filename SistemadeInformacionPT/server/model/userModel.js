// importamos la conexion a la DB
import db from '../database/db.js'
// importamos sequelize
import { DataTypes } from 'sequelize';

const userModel = db.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    Nombre: {type: DataTypes.STRING},
    usuario: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    Email: {type: DataTypes.STRING},
    Observaciones: {type: DataTypes.STRING}
})

export default  userModel