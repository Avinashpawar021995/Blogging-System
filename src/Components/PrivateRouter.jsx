import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { isLoggeIn } from '../Auth';
const PrivateRouter = () => {
   // let loggeIn=false;

    // if(isLoggeIn())
    // {
    //     return <Outlet/>
    // }
    // else{
    //     return <Navigate to={"/login"}/>;
    // }
return  isLoggeIn()? <Outlet/> : <Navigate to={"/login"}/>;

  return (
    <>
    <h1>this is private  router</h1>
    <Outlet/>
    </>

  )
}

export default PrivateRouter
