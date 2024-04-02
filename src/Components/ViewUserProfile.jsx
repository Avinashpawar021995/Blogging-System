import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, Container, Table } from 'reactstrap'
import default1 from '../Image/default.jpg'
import { getCurrentUserDetails, isLoggeIn } from '../Auth'
import { Link } from 'react-router-dom'
const ViewUserProfile = ({user}) => {
   const [currentUser, setCurrentUser] =useState(null)
   const [login, setLogin]=useState(false)
        useEffect(()=>{
           setCurrentUser(getCurrentUserDetails())
           setLogin(isLoggeIn())
        },[])
    return (
    <Card className='mt-2 border-0 rounded-0 shadow-sm'>
                   <CardBody>
                      <h4 className='text-uppercase'>user Information</h4>
                    <Container className='text-center'>
                      <img style={{maxWidth: '250px', maxHeight: '250px'}} src={user.image ? user.image :default1} alt='photo' className='img-fluid rounded-circle'/> 
                    </Container>
                    <Table responsive striped hover bordered={true} className='mt-5 text-center'>
                        <tbody>
                       <tr>
                         <td>
                           LCWDBILOGS ID
                         </td>
                           <td>
                             {user.id}
                           </td>
                           </tr>
                           <tr>
                           <td>username</td>
                           <td>{user.name}</td>
                             </tr>
                             <tr>
                            <td>
                              email
                            </td>
                            <td>{user.email}</td>
                            </tr>
                            <tr>
                          <td>about</td>
                          <td>{user.about}</td>
                       </tr>
                       <tr>
                        <td>Role</td>
                         {/* <td>
                           {user.roles.map((role, index)=>{
                              return (
                                 <div key={index}>
                                    {role.name}
                                 </div>
                              )
                           })} 
                           </td> */}
                       <td>{user.roles?.map((role,index)=>{
                        <div key={index}>
                             {role.name}
                        </div>
                       })}</td>
                       </tr>
                       </tbody>
                     </Table>
                     { currentUser ?(currentUser.id=== user.id)?(
                        
                     <CardFooter className='text-center'>
                     <Button color='warning' tag={Link} to={`/user/updprofile/${currentUser.id}`}>update</Button>
                  </CardFooter>
                     ):'':''}
                   </CardBody>
                  </Card>              
 
  )
}

export default ViewUserProfile
