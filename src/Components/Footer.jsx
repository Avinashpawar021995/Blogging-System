import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, Col, Container, List, ListGroup, ListGroupItem, ListInlineItem, Row } from 'reactstrap'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
        
        <Row className='mt-4' style={{backgroundColor:'Highlight'}}>
         <Card className='shadow px-4'>
          <CardBody>

          <Col md={12} className='text-center'>
          <h1>Blogging System</h1>
           <p>aasha hopital shivaji chaikha Ahmadpur Tq Ahmadpur  Dist: Latur pin:- 413515 </p>   
         </Col>
          <Col className='text-center p-3'>
          <List type="inline" className='p-3'>
  <ListInlineItem>
  <Link to="/" className='text-decoration-none fs-4 text-dark p-2 ' >
         Home
    </Link>
  </ListInlineItem>
  <ListInlineItem>
  <Link to="/about" className='text-decoration-none fs-4 text-dark p-2' >
    About
    </Link>
     </ListInlineItem>
  <ListInlineItem>
  <Link to="/service" className='text-decoration-none fs-4 text-dark p-2 ' >
    service
    </Link>
    </ListInlineItem>
    <ListInlineItem>
    <Link to="/user/blogger" className='text-decoration-none fs-4 text-dark p-2'>
      Blog
      </Link> 
    </ListInlineItem>
    </List>
      </Col>
         
         <Col md={12} className='text-center'>
         <List type="inline" className='px-5'>
  <ListInlineItem>
  <BsTwitterX height={"90px"}/>    
  </ListInlineItem>
  <ListInlineItem>
  <FaFacebookF/>
  </ListInlineItem>
  <ListInlineItem>
  <FaFacebookMessenger/>
  </ListInlineItem>
  <ListInlineItem>
  <IoLogoWhatsapp/>
  </ListInlineItem>
  <ListInlineItem>
  <FaInstagramSquare/>
  </ListInlineItem>
</List>
        
           {/* <ListGroup>
              <ListGroupItem>
                <BsTwitterX height={"90px"}/>
              </ListGroupItem>
             <ListGroupItem>
           
             </ListGroupItem>
             <ListGroupItem>
               
             </ListGroupItem>
             <ListGroupItem>
                
             </ListGroupItem>
             <ListGroupItem>
    
             </ListGroupItem>
           </ListGroup> */}
         </Col>
         </CardBody>
         </Card>
        
        </Row>
    </Container>
    )
}

export default Footer
