import React from 'react'
import Base from '../Components/Base';
import userContext from '../context/UseContext';
import { Card, CardBody } from 'reactstrap';
import Contact from './Contact';
const About = () => {
  
  return (
    <>
    <userContext.Consumer>
      {(object)=>( 
               <Base>
               <div className='mt-3 d-flex position-relative justify-content-center align-content-center'>
               <Card className='text-center m-3 w-75'>
                <CardBody>
    <h2>About Us</h2>
<p>this is  blog application</p>
<p>If you have any query regrading Site, Advertisement and any other issue, please feel free to contact at <strong>avinashpawar0295@gmail.com</strong></p>

                  </CardBody>
               </Card>
    
               </div>
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
   )}

   </userContext.Consumer>
   
       </>
  )
}

export default About;

