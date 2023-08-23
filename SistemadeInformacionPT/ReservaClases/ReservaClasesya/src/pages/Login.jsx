import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import crud from '../utilities/crud.js'
//import swal from 'sweetalert'
import Header from '../components/header'
import Footer from '../components/footer'

function Login() {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:"",
    id:""

  });

  const {email, password, id} = user;


  const onSubmit =(e)=>{
    e.preventDefault();
    iniciarSesion();
   }

   const iniciarSesion = async ()=>{
    if (password !== password || id !== id){  alert(console.log('contraseña o usuario invalido'))
  } else 
{const data ={
       id: user.id,
       email: user.email,
       password: user.password
    }
    console.log(data);
    const response = await crud.GET(`/api/usuarios`, data);
    const mensaje = response.msg;
    console.log(mensaje);
  }
       
          
 

         
   
   }

   const onChange = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
      
    })

  
    
     };
  return (
    <main className='container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center' >
    <div className='md:w-2/3 lg:w-2/5' >
   

  <form 
  onSubmit={onSubmit}
  className='my-10 bg-primary shadow rounded-lg p-10' >
   <div className='my-5'>

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




<label className='uppercase text-body block text-lx font-bold'>Password</label>
    <input 
    type="password"
    id='password'
    name='password'
    placeholder='ingrese una contraseña'
    className='w-full mt-3 p-3 border rounded-xl bg-gradient-to-r bg-body'
    value={password}
    onChange={onChange}
    required  
    />

<input 
to= {'/home'}
onSubmit={onSubmit}
type="submit"
value="Iniciar Sesión"
className="my-5 bg-accent mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-[#4c6055] transition-colors"
/>

<Link 
to={"/registro"}
className="block text-center my-5 text-white uppercase text-sm"
>Crear Cuenta</Link>

   </div>
  </form>
    </div>
   
</main>
  )
}

export default Login