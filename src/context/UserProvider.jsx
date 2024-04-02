import React, { children, useEffect, useState } from 'react'
import userContext from './UseContext'
import { getCurrentUserDetails, isLoggeIn } from '../Auth'
import { addNewCategories } from '../Services/CagtegoryService'
const UserProvider = ({children}) => {
   
    useEffect (()=>{
  setUser({
      data:getCurrentUserDetails(),
      login: isLoggeIn()
  })

  setCategories({
    data:addNewCategories(),
    login:isLoggeIn()
  })
    },[])
  
    const [user, setUser]=useState({
      data:{},
      login:false})

     const [cagetories, setCategories]=useState({
      data:{},
      login: false
     })
     
  return (
    <userContext.Provider value={{user , setUser, cagetories, setCategories}}>
       {children} 
    </userContext.Provider>
  )
}

export default UserProvider
