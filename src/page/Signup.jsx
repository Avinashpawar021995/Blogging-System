import React, { useEffect, useState } from 'react'
import Base from '../Components/Base'
import {Form, Card,Label,Input, 
   Button,Row, Col,
  
  CardBody, CardHeader, Container, FormGroup, FormFeedback } from 'reactstrap'


import {signup} from '../Services/User-service';
import {toast } from 'react-toastify';
const Signup = () => {
const [data, setData]=  useState({
  name:'',
   email:'',
   password:'',
  about:''
   
})

  
const [error, setError]=useState({
  error:{},
  isError:false
})


// handle change
   const handleChange =(event, property)=>{
    //dynamic setting the value
   setData({...data,[property]:event.target.value})
   }

   //submit the  form
  const submitForm=(event)=>{
    event.preventDefault();
    // if(error.isError)
    // {
    //   toast.error("form data is  invalid , correct all datails then submit"+data.username)
    //    setError({...error, isError:false})
    //   return;
    // }
      //data validate
      //call server api for send data
        signup(data).then((response)=>{
          toast.success("register is successfully...")
          console.log("success register");
           setData({name:"",
           email:" ",
           password:" ",
          about:" "
        })
        }).catch((error)=>{
          toast.error("please check infromation...!")
          console.log(error);
           setError({
            error:error,
            isError:true
           })
          
          setData({name:"",
          email:" ",
          password:" ",
         about:" "
       })
        })

  }
   //reset the  button
  const resetData=()=>{
    setData(
   { name:'', email:'',password:'',
    about:''})
  
  }
return (
    <Base>
      <Container>
        <Row className='mt-3  p-3'>
          <Col  sm={{size:6, offset:3}}>
          
       <Card className='bg-dark'
        inverse outline>
       <CardHeader>
  <h3>       fill Information to register !!</h3> 
       </CardHeader>
       <CardBody>
        <Form onSubmit={submitForm}>
          <FormGroup>
            <Label for="name">name</Label>
            <Input 
            type='text'
             placeholder='enter here'
             id='name'
             onChange={(e)=>handleChange(e, 'name')}
              value={data.name}
               invalid={error.error?.response?.data?.name ? true: false}
            />
            <FormFeedback>
              {error.error?.response?.data?.name}
            </FormFeedback>

          </FormGroup>

          <FormGroup>
            <Label for="email">Enter email</Label>
            <Input 
            type='text'
             id='email'
             placeholder='enter here'
             onChange={(e)=>handleChange(e, 'email')}
             value={data.email}
              className='form-control'
             invalid={error.error?.response?.data?.email ? true: false}
           
           />
           <FormFeedback>
              {error.error?.response?.data?.email}
            </FormFeedback>
         

           </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Input  type='password'
            name='password'
             id='password'
             placeholder='enter here'
             value={data.password}
             onChange={(e)=>handleChange(e,'password')}
             invalid={error.error?.response?.data?.password? true: false}
            />
            
          <FormFeedback>
              {error.error?.response?.data?.password}
            </FormFeedback>

          </FormGroup>
           
          <FormGroup>
            <Label for="about ">about</Label>
            <Input 
            type='textarea'
             placeholder='enter here'
             id='about' 
             style={{height:"200px"}}
             onChange={(e)=>handleChange(e, 'about')}
             
             value={data.about}
             invalid={error.error?.response?.data?.about ? true: false}
               
            />
            
          <FormFeedback>
              {error.error?.response?.data?.about}
            </FormFeedback>
          </FormGroup>

          <Container className='text-center'>
            <Button outline color='primary' >
     Register
            </Button>
          <Button   color="dark"
           type='reset' onClick={resetData} className='ms-2'>Reset</Button>
          </Container>
        </Form>
       </CardBody>
       </Card> 
       </Col>
        </Row>
      </Container>
    </Base>
  )
}

export default Signup
 