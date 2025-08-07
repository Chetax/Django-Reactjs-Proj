
import { useState } from "react"
import AxiosInstance from '../api/students' 
import { toast } from 'react-toastify';
const userRegister = () => {
  
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [gender,setGender]=useState('');
const [rollNo,setRollNo]=useState();

   const handleSubmit=(event)=>{
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
     console.log("Student registered successfully:", response.data);
     toast.success("student registered successfully!");
  })
  .catch(error=>{
    console.log(error)
    toast.error("Something went wrong!");
  });

}

    return (

    <div className='m-5 p-15 border-black-500 w-150' style={{border:"2px solid black"}}>
        <form onSubmit={handleSubmit} >
        <div className="flex gap-8">
            <label htmlFor="name">Enter your Name</label>
            <input className="mx-4 border border-black" type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="flex gap-8">
            <label htmlFor="email">Enter your email </label>
            <input className="mx-4 border border-black" type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="flex">
            <label htmlFor="password">Enter your password </label>
            <input className="mx-4 border border-black"type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" />
        </div>
        <div className="flex">
            <label htmlFor="rollNo">Enter your Roll No </label>
            <input className="mx-4 border border-black"type="text" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} name="rollNo" id="rollNo" />
        </div>
        <div className="flex ">
            <label htmlFor="gender">Choose your gender</label>
     <div className="flex gap-3 mx-5">
            <input type="radio" name="gender" value={"male"}  checked={gender === 'male'} onChange={(e)=>setGender(e.target.value)}/>Male <br />
            <input type="radio" name="gender" value={"female"} checked={gender=='female'} onChange={(e)=>setGender(e.target.value)}/> Female <br />
     </div>
     
        </div>
        <div>
            <button type="submit"  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 my-3 mr-2 rounded">Sign Up</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 my-3 mr-2 rounded">Login </button>
        </div>

        </form>
    </div>
  )
}

export default userRegister