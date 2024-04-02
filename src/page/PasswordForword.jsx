import React from 'react'
import { Button, Card, CardBody, Col, Container, Form,  FormGroup,  Input,  Label, Row } from 'reactstrap'
import Base from '../Components/Base'
const PasswordForword = () => { 
     return (
    <Base>
    <Container className='w-50 mt-4 position-relative justify-content-center align-content-center'>
        <Row className=''>
            <Form>
            <Col className='shadow-sm'>
             <Card  >
                <CardBody>
                   <div className='text-center fs-1 fw-bold'>
                       <h1>password forword</h1>
                   </div>
                <FormGroup>
                <Label for="username">username</Label>
                <Input
                   type="text"
                   id="username"
                   placeholder="enter here"
                //     value={loginDetail.username}
                //     onChange={(e)=> handleChange(e,'username')}
               />
              </FormGroup>
              <FormGroup>
                <Label for="password">password</Label>
                <Input
                   type="text"
                   id="password"
                   placeholder="enter here"
                    //value={loginDetail.username}
                    //onChange={(e)=> handleChange(e,'username')}
                  />
              </FormGroup>
              <FormGroup>
                <Label for="new">oldpassword</Label>
                <Input
                   type="text"
                   id="oldpassword"
                   placeholder="enter here"
                    //value={loginDetail.username}
                    //onChange={(e)=> handleChange(e,'username')}
                  />
              </FormGroup> 
              <FormGroup>
                <Label for="newpassword">newpassword</Label>
                <Input
                   type="text"
                   id="newpassword"
                   placeholder="enter here"
                    //value={loginDetail.username}
                    //onChange={(e)=> handleChange(e,'username')}
                  />
              </FormGroup>
                <Container className='d-flex mt-4 justify-content-center'>
                    <Button type='submit' color='primary'>submit</Button>
                    <Button type='reset' className='mx-3 bg-danger btn-outline-primary px-3 '  >clear</Button>
                </Container>
               </CardBody>
             </Card>
            </Col>
            </Form>
        </Row>
    </Container>
</Base>
  )
}

export default PasswordForword
