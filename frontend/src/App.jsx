import React, { useState ,useEffect} from 'react'
import Navbar from './components/Navbar'
import SignUpForm from './components/SignUpForm.jsx'
import NotFounde from './components/NotFounde.jsx'
import AxiosInstance from './api/students.js'
import { Route,Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm.jsx'
import Home from './components/Home.jsx'
const App = () => {
  const [data,setdata]=useState([]);

  const GetData=()=>{
   AxiosInstance.get('/')
  .then(res => {
    console.log("Fetched data:", res.data);
    setdata(res.data);
  })
  .catch(err => {
    console.error("Error fetching data:", err);
  });

  }
  useEffect(()=>{
    GetData();
    console.log(data)
  },[])
  return (
    <div>
    <Routes>
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path="*" element={<NotFounde />} />
      </Routes>
</div>
  )
}

export default App