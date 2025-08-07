
import { useState } from "react"
import AxiosInstance from '../api/students' 
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
const userRegister = () => {

  const navigate=useNavigate();
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [gender,setGender]=useState('');
   const [rollNo,setRollNo]=useState();

   const handleRegister=(event)=>{
    event.preventDefault();
  const studentData = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    roll_number: rollNo, 
  };
  AxiosInstance.post('/',studentData)
  .then(response=>{
     toast.success("student registered successfully!");
     setTimeout(() => {
      navigate('/home')
     }, 2000);
  })
  .catch(error=>{
    console.log(error)
    toast.error("Something went wrong!");
  });

}

    return (
    <div className="flex justify-center items-center h-screen ">
    <div className='m-5 p-15 border-black-500  rounded-lg' style={{border:"2px solid black"}}>
        <form  className="flex flex-col gap-y-6 " >
          <p className="flex justify-center text-3xl mb-5">Register </p>
        <div className="flex justify-between">
            <label htmlFor="name">Enter your Name</label>
            <input className=" border border-black" type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="flex justify-between">
            <label htmlFor="email">Enter your email </label>
            <input className="border border-black" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="flex justify-between">
            <label htmlFor="password">Enter your password </label>
            <input className="border border-black"type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" />
        </div>
        <div className="flex justify-between">
            <label htmlFor="rollNo">Enter your Roll No </label>
            <input className=" border border-black"type="text" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} name="rollNo" id="rollNo" />
        </div>
        <div className="flex ">
            <label htmlFor="gender">Choose your gender</label>
     <div className="flex gap-3 mx-5">
            <input className=" hover:cursor-pointer" type="radio" name="gender" value={"male"}  checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)}/>Male <br />
            <input className=" hover:cursor-pointer" type="radio" name="gender" value={"female"} checked={gender=='female'} onChange={(e)=>setGender(e.target.value)}/> Female <br />
     </div>
     
        </div>
        <div>
            <button onClick={handleRegister} className=" hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 my-3 mr-2 rounded">Sign Up</button>
            <button className="hover:cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 my-3 mr-2 rounded" onClick={() => navigate('/login')}>Login </button>
        </div>

        </form>
    </div>
    </div>
  )
}

export default userRegister