import React, {  useContext, useEffect, useState } from 'react'
import Base from '../Components/Base'
import { CardBody, Form, CardHeader, Container, FormGroup, Label,Card, Col,Row, Input, Button, FormFeedback } from 'reactstrap'
//import { Form } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../Services/User-service'
import { doLogin } from '../Auth';
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../context/UseContext'
const Login = () => {
    useEffect(()=>{
      document.title="login";
    },[]);

  const userContextData=useContext(userContext);
     const navigate=useNavigate();
   const [loginDetail, setLoginDetails] =useState({
    username:'',
    password:''
   })
  
const [error, setError]=useState({
  error:{},
  isError:false
})
const handleChange =(event,field)=>{
  let actualValue=event.target.value
  setLoginDetails({

    ...loginDetail,
    [field]:actualValue
  })
}
  const handleReset =()=>{
    setLoginDetails({
      username: "",
      password:"",
    });
  }

const handleformSubmit  =(event)=>{
  event.preventDefault();
if(loginDetail.username.trim()==='' || loginDetail.password.trim()==='')
{
  toast.error("username and password is required")
  return;
}

 loginUser(loginDetail).then((data)=>{
  console.log(data)
  
  userContextData.setUser({
    data:data,
     
    login:true
   }  )
   
  //save the  data to localstorage
  doLogin(data, ()=>{
    console.log("login  details is saved to localstore "); 
    userContextData.setUser({
    data: data.user,  
    login:true
   }  )
   
   console.log(data)
    //redirect to user data dashbord page
     navigate("/user/dashboard")   
  })
  console.log(data);
toast.success("user login successfully"+loginDetail.username);

}).catch(error=>{
  console.log(error)
  if(error.response.status===400 || error.response.status===404)
  {
  toast.error(error.response.data.message);
  }else{
    toast.error("something went wrong on server !!")
  }
  setError({
    error:error,
    isError:true
   })

})
}
  return (
    <Base>
     <Container>
      <Row className='mt-4 pt-3 vh-100 d-flex ' >
        <Col className='mt-2 ' sm={{size:6, offset:3}}>
           <Card color='dark'inverse>
            <CardHeader>
              <h3>Login here !!</h3>
            </CardHeader>

            <CardBody>
              {/* username field */}
            <Form onSubmit={handleformSubmit}>
              <FormGroup>
                <Label for="username">username</Label>
                <Input
                   type="text"
                   id="username"
                   placeholder="enter here"
                    value={loginDetail.username}
                    onChange={(e)=> handleChange(e,'username')}
                  />
                    <FormFeedback>
              {error.error?.response?.data?.massege}
            </FormFeedback>


              </FormGroup>
                {/* password field */}
                <FormGroup>
                <Label for="password">password</Label>
                <Input
                   type="password"
                   id="password"
                   placeholder="enter here"
                   value={loginDetail.password}
                   onChange={(e)=>handleChange(e, 'password')}
                  />
                             </FormGroup>
              <Container className='text-center'>
                <Button type='submit' color='primary' outline>Login</Button>
                <Button type='reset' className='ms-3' color="danger" onClick={handleReset} outline>reset</Button>
              </Container>
              <Container>
                   <Link to="/forward" type="unline">password forward</Link>
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

export default Login
