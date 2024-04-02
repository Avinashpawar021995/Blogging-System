import React from 'react'
import CustomerNavBar from './CustomerNavBar'
import Header from './Header'
import { Col } from 'reactstrap'
import Footer from './Footer'
const Base = ({title="welcome to our website ", children}) => {
  return (
    <>
    <div className="container-fluid p-0 m-0 vh-100">
      <Col>
       <Header/>
      </Col>
      <Col>
   <CustomerNavBar/>
          {children}
          </Col>
          <Col className='mb-1'>
           <Footer/>
          </Col>
    </div>
    </>
  )
}

export default Base
