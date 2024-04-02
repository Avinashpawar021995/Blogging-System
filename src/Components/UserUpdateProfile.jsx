import React, { useEffect, useState } from 'react'
import Base from './Base'
import { Card, CardBody, Col, Container, Form, Input, InputGroup, Label, Button, Row } from 'reactstrap'
import { getCurrentUserDetails, isLoggeIn } from '../Auth'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getUser, updataUser } from '../Services/User-service'
const UserUpdateProfile = () => {
    const {id}=useParams();
    const [currentUser, setCurrentUser] =useState(null)
    //const [login, setLogin]=useState(false)
    const [user, setUserDetails]=useState([])
    const [data, setData]=useState([])
    useEffect(()=>{
            setCurrentUser(getCurrentUserDetails())
  //          setLogin(isLoggeIn()) 
           userGetId()
        },[])

           const userGetId=()=>{
             getUser(id).then((data)=>{
                setData(data);
             }).catch((error)=>{
                 toast.error(" user not  found");
             })
           }
   
              const handleChange =(e, fieldName)=>{
             setUserDetails({
              ...user,[fieldName]:e.target.value
                            
            } )
            console.log(user);     
              }

          const setUpdateDatails =(e)=>{
            e.preventDefault();
            updataUser(user, id).then((response)=>{
           
              toast.success("use details update")
              setData(response.data);
              //       console.log(response);
            }).catch((error)=>{
               toast.error("user check the ");
            })
          }


          const userUpdateDetails=()=>{
            return (
              <Container>
                  <Row>
                    
                <Card>
                    <CardBody className='py-3'>
                      <Form onSubmit={setUpdateDatails}>
                         <Col>
                          <h1>update profile</h1>
                         </Col>
                         <Col className='p-3' >
                                         <InputGroup>
                              <Label>username</Label>
                              <Input 
                                type='text'
                                id='name'
                                placeholder='enter here'
                               value={data.name}
                               onChange={(e)=>handleChange(e,"name")}
                      />    
                          </InputGroup>
                          </Col>
                          <Col className='p-2'>
                          <InputGroup>
                           <Label>email</Label>
                           <Input 
                             type='text'
                              id="email"
                              placeholder='enter here'
                              value={data.email}
                             onChange={(e)=>handleChange(e,"email")}
                            />
                          </InputGroup>
                          </Col>
                          <Col className='p-2'>
                          <InputGroup>
                           <Label>about</Label>
                           <Input 
                             type='text'
                              id="about"
                              placeholder='enter here'
                          value={data.about}
                            onChange={(e)=>handleChange(e,"about")}
                            />
                          </InputGroup>
                          </Col>
                          <Container className='d-flex p-3 justify-content-center align-content-center'>
                              <Button type="submit" color="warning">submit</Button>
                              <Button type='reset' className='mx-3' color="danger">clear</Button>
          
                          </Container>
                      </Form>
                    </CardBody>
                  </Card>
                </Row>
                </Container> 
            )
          }


  return (
  <Base> 
  { currentUser && userUpdateDetails()}
    </Base>
  )
}

export default UserUpdateProfile
