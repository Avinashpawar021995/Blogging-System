import React from 'react'
import { Card, CardBody } from 'reactstrap'
import Base from '../Components/Base'

const Contact = () => {
  return (
   <Base>
   <div className='mt-3 d-flex position-relative justify-content-center align-content-center'>
    <Card className='w-75'>
        <CardBody>
        <h2>Contact Us</h2>
      <p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at 
    <strong>avinashpawar0295@gmail.com</strong></p>
    
        </CardBody>
    </Card>
   </div>
   </Base>
  )
}

export default Contact
