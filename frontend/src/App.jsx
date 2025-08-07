import React, { useState ,useEffect} from 'react'
import Navbar from './components/Navbar'
import Message from './components/Message'
import Form from './components/Form'
import AxiosInstance from './api/students.js'
import { ToastContainer } from 'react-toastify';
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
  <Navbar/>
<Message text="First Message"/>
<Form/>

</div>
  )
}

export default App