import express from 'express'
import cors from 'cors'
// importar la conexion a la db
import db from './database/db.js'
// importamos el enrutador
import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/Usuarios', userRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa  a la DB');
} catch (error) {
    console.log(`El error de conexion es:${error}`);
}


app.get('/', (req, res)=>{
    res.send('hola mundo')
})

app.listen(8000, ()=>{
    console.log('el servidor esta corriendo en http://localhost:8000/');
})



export default app