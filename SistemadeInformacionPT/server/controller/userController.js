import userModel from "../model/userModel.js";


// metodos para el crud

// mostrar todos los registros
export const getAllUsuarios = async (req, res)=>{
    try {
        const usuarios = await userModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({message : error.message})
    }
}
//mostrar un registro
export const getUsuarios = (req, res) => {
   try {
    const usuarios = userModel.findAll({
        where: {
            id:req.params.id
        }
    })
    res.json()
   } catch (error) {
    res.json({message : error.message})    
   }
 
}
//crear un registro
export const createUsuarios = async (res, req)=>{
    try {
       await userModel.create(req.body)
       res.json({
        "message":'¡Registro creado correctamente!'
       })
    } catch (error) {
        res.json({message : error.message})
    }
}

//actualñizar un registro

export const updateUsuarios = async (req, res) => {
    try {
        userModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({
            "message":'¡Registro creado correctamente!'
        })
    } catch (error) {
        res.json({message : error.message})
    }
}

//Eliminar un registro

export const deleteUsuarios = async (req,res) => {
    try {
        await userModel.destroy({
            where: { id : req.params.id }
        })
        res.json({
            "message":'¡Registro creado correctamente!'
        })
    } catch (error) {
        res.json({message : error.message})
    
    }
}