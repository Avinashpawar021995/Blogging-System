import React, { useContext, useEffect, useState } from 'react'
import Base from '../Components/Base'
//import userContext from '../context/UseContext'
import { Card, CardBody, Col, Container,  Row, Table } from 'reactstrap'
//import userContext from '../context/UseContext'
import { useParams } from 'react-router-dom'
import { getUser } from '../Services/User-service'
import default1 from '../Image/default.jpg'
import ViewUserProfile from '../Components/ViewUserProfile'
const Profiledetails = () => {
   const [user , setUser] =useState({});
  // const object =useContext(userContext)
    const {userId}= useParams()
     useEffect( ()=>{
      getUser(userId).then(data=>{
         setUser({...data})
        console.log(data);
        })
     },[])
      const userView=()=>{
         return (
            <Row>
               <Col md={{size: 6, offset: 3}}>
                 <ViewUserProfile user={user}/> 
               </Col>
            </Row>
         )
      }
   return (
     <Base>
  { user ?  userView(): 'Loging user data '}
    </Base>
  )
}

export default Profiledetails;