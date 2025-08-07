
import { useState } from "react"
 import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../api/auth' 
import { toast } from 'react-toastify';
const LoginForm = () => {
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
    const navigate = useNavigate();
   const handleLogin=(event)=>{

    event.preventDefault();
  const studentData = {
    email: email,
    password: password,
  };
console.log(studentData)
  AxiosInstance.post('login/',studentData)
  .then(response=>{
     toast.success("Login successfully!");
          setTimeout(() => {
      navigate('/home')
     }, 2000);

  })
  .catch(error=>{
    toast.error("Something went wrong!");
  });
}

    return (
    <div className="flex justify-center items-center h-screen ">
    <div className='m-5 p-15 border-black-500  rounded-lg' style={{border:"2px solid black"}}>
        <form  className="flex flex-col gap-y-6 " >
          <p className="flex justify-center text-3xl mb-5">Login </p>
        <div className="flex justify-between">
            <label htmlFor="email">Email </label>
            <input className="border border-black" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="password" className="mr-5">Password </label>
            <input className="border border-black"type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" />
        </div>
        <div className="flex justify-around align-middle">
            <button onClick={handleLogin} className=" hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 my-3 mr-2 rounded">Login </button>
            <span className="text-1xl py-2 px-3 my-3 mr-2">Or</span>
            <button className="hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 my-3 mr-2 rounded" onClick={()=>navigate('/signup')}>SignUp </button>
        </div>

        </form>
    </div>
    </div>
  )
}

export default LoginForm