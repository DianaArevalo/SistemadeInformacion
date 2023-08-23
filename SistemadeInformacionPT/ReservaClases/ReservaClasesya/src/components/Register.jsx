import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import crud from '../utilities/crud.js'
//import swal from 'sweetalert'

function Register() {


  const navigate = useNavigate();

  const [user, setUser] = useState({
    nombre:"",
    usuario:"",
    email:"",
    password:"",
    confirmacion:"",
    Observaciones:""

   });

   const {nombre, usuario, email, password, Observaciones, confirmacion} = user;

  


   const onChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    
     };


     const crearCuenta = async () =>{
      //validacion password iguales
        if(password !== confirmacion){
          console.log("diferente");
          const mensaje = "las contraseñas son diferentes.";
          swal({
            title: "Error",
            text: mensaje,
            icon: "error",
            buttons:{
              confirm:{
                text: "OK",
                value: true,
                visible: true,
                className: "btn btn-danger",
                closeModal: true
              }
            }
          });
      
        }else{
          const data = {
            nombre: user.nombre,
            email: user.email,
            usuario: user.usuario,
            password: user.password,
            Observaciones: user.Observaciones,
            confirmacion: user.confirmacion
             
          }

        

        console.log(data);
        const response = await crud.POST(`/api/usuarios`, data);
        const mensaje = response.msg;
        console.log(mensaje);
        
           
        }
      }

      const onSubmit =(e)=>{
        e.preventDefault();
        crearCuenta();
       
      }

  return(
    <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center'>
    <div className='md:w-2/3 lg:w-2/5'>
      
      
      
      
      <form 
      onSubmit={onSubmit}
      className='my-10 bg-primary shadow rounded-lg p-10'>

<button className='my-10 inline font-extrabold text-center text-body uppercase bg-clip-text text-5xl tracking-tight' >Registro</button>
      <p></p>

        <div className='my-5'>
          <label className='uppercase text-body block text-lx font-bold'>Nombres y Apellidos</label>
        <input 
        type="text"
        id='nombre'
        name='nombre'gfsgf
        placeholder='nombre'
        className='w-full mt-3 p-3 border rounded-xl bg-body'
        value={nombre}
        onChange={onChange}
        required
        />

         <label className='uppercase text-body block text-lx font-bold'>Correo</label>
        <input 
        type="email"
        id = "email"
        name='email'
        placeholder='correo'
        className='w-full mt-3 p-3 border rounded-xl bg-body'
        value={email}
        onChange={onChange}
        required 
        />

        <label className='uppercase text-body block text-lx font-bold'>Usuario</label>
        <input 
        type="usuario"
        id = "usuario"
        name='usuario'
        placeholder='usuario'
        className='w-full mt-3 p-3 border rounded-xl bg-body'
        value={usuario}
        onChange={onChange}
        required  
        />

        

      

        <label className='uppercase text-body block text-lx font-bold'>Password</label>
        <input 
        type="password"
        id='password'
        name='password'
        placeholder='ingrese una contraseña'
        className='w-full mt-3 p-3 border rounded-xl bg-body'
        value={password}
        onChange={onChange}
        required  
        />

        <label className='uppercase text-body block text-lx font-bold'>confirmacion</label>
        <input 
        type="confirmacion"
        id="confirmacion"
        name='confirmacion'
        placeholder='confirme su contrasa'
        className='w-full mt-3 p-3 border rounded-xl bg-body'
        value={confirmacion}
        onChange={onChange}
        required  
        />


<label className='uppercase text-body block text-lx font-bold'>Observaciones</label>
        <input 
        type="Observaciones"
        id='Observaciones'
        name='Observaciones'
        placeholder='Observaciones'
        className='w-full mt-3 p-3 border rounded-xl bg-body'
        value = {Observaciones}
        onChange={onChange}
        required                                         
        />

       <input 

        type="submit"
        value="crear cuenta"
        className="my-5 bg-[#2b3630] mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-[#6e8b7b] transition-colors"

        />

      {/* <button>Crear Cuenta</button> */}
      <Link
       to ={"/"}
       className="block text-center my-5 text-body uppercase text-sm"
       
       >Regresar</Link>
        </div>
      
      </form>
     
    </div>
  </main>
    
  );
  
}


export default Register