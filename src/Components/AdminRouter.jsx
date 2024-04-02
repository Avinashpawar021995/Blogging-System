import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggeIn } from '../Auth';

const AdminRouter = () => {
    const [role, setRole]=useState([]);
       useEffect(()=>{
        setRole(isLoggeIn());
       },[])

    return  isLoggeIn() && role==='admin' ? <Outlet/> : <Navigate to={"/login"}/>;
  return (
  <Outlet/>    
  )
}

export default AdminRouter
