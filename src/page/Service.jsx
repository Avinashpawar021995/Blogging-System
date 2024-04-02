import React from "react";
import Stack from 'react-bootstrap/Stack'; // this  laber create a gap column in user requed
import job from '../Image/job.png';  //this add job related image
import equaction from "../Image/education.png"; // image in eduction. 
import farmar from "../Image/farmer.jpeg"; //image farmar
import money from "../Image/money.jpg"; // image  in money transfor
import Printer from "../Image/Printer.jpg";
import pan1 from '../Image/Adhar.png'
import solar from  "../Image/solar.png";
import voter from "../Image/voterId.jpg";
 import { Container, Row,Col } from "reactstrap";
import Base from '../Components/Base'
 import passport from '../Image/passport.png'
const  Service=()=>

 {
    return(
      <Base>
<Container className=" service">
<Row className="p-3 mx-3 mt-4 border-collapse" >
  <Col xl={12} sm={12} md={12} className="text-center mt-3">
    <h1 className="text-uppercase fw-bold  text-decoration-underline">Service</h1>
  </Col>
  <Stack direction="horizontal" gap={5}>
 <Col xl={6} sm={6} md={6} className="border border-3 boder-dark text-center p-3 mt-5 bg-light " >
      <h1 className="text-uppercase">Goverment job</h1>
        <img src={job} className="w-50 h-75 mt-5 p-5 " alt="job"/>
        <p> we are give the details about Goverment job and other sector job  information any details for job description or details.</p>
 </Col>
  <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-0 mt-5 shadow bg-white">
    <h1 className="text-uppercase">eduation</h1>
     <img src={equaction}className="w-50 h-25 mt-2 p-2 " alt="equaction"/>
      <p>we are guide the student and give the information about managment and eduation provded details and provide the apporitunity to security future  </p>
  </Col>
  </Stack>
  <Stack direction="horizontal" gap={5}>
  <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-2 mt-5 shadow bg-white">
   <h1 className="text-uppercase"> farmer  </h1>
     <img src={farmar} className="w-50 h-25 mt-3 p-2  " alt="farmar" /> 
   <p > we are provide the farmar and farms related Goverment scheme, and it will easy to handle and  collect the  information </p>
  </Col>
  <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-2 mt-5 shadow bg-white">
   <h1 className="text-uppercase">money tranfaser</h1>
    <img src={money} className="w-50 h-25 mt-3" alt="money" />
    <p>we can provide the tranfer money and add  the balance in your account. and we provide the  security of  your account. </p>
  </Col>

  </Stack>
  <Stack direction="horizontal" gap={5} >
  <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-2 mt-4 shadow bg-white">
   <h1 className="text-uppercase fw-medium">Photo & document printing</h1>
    <img src={Printer} className="w-50 h-25 mt-3" alt="printer" />

   <p>we can provide you clear and  suffisticatiad a printer page.</p>
  </Col>
  <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-1 mt-3 shadow bg-white">
  <h1 className="text-uppercase fs-1 fw-bold mt-2">Pan and adhar</h1>
   <img src={pan1} className="w-50 h-25 mt-1" alt="adhar"/>
   <p>we are adhar card update and new creat using the Goverment autheration   </p>
  </Col>
  </Stack>
  <Stack direction="horizontal" gap={5}>
    <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-2 mt-3 shadow bg-white">
      <h1 className="text-uppercase fs-1 fw-bold mt-4" >Passport</h1>
       <img src={passport } alt="passport"/> 
      <p>we are provide possport details or requied document details, we are required document and  </p>
    </Col>
    <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-2 mt-3 shadow bg-white">
      <h1 className="text-uppercase fs-1 fw-bold mt-4">Solar Plate </h1>
      <img alt="solar" src={solar}/>
   <p>we are  provide solar related details or required document details, showing the this side.  we also day update </p>
      </Col>

  </Stack>
  <Stack>
    <Col xl={6} sm={6} md={6} className="text-center border border-3 boder-dark p-4 mt-5 shadow bg-white">
      <h1>Voter id  and update voter id</h1>
      <img src={voter} alt="voter" />
      <p>we are  provide voter id  details and  information we are also passing system. voter details  goverment rule and regulation. </p>
         </Col>
  </Stack>
</Row>
</Container>
    </Base>
    );
}
 
export default Service;