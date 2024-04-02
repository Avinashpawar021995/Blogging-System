import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../App.css";
const Header = () => {
  return (
   <Container >
   <Row>
   <Col className='m-5 text-center header '>
     <h1 className='fw-bold text-uppercase'  
      >Blogging System </h1>
   </Col>
   </Row>
   </Container>

  )
}

export default Header
