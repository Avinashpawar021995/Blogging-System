import React, { useEffect } from 'react'
import Base from '../Components/Base'
import NewFeed from '../Components/NewFeed'
import { Col, Container, Row } from 'reactstrap'
import CategoryuSideMenu from '../Components/CategoryuSideMenu'

const Home = () => {
  

  return (
    <Base>
    <Container className='mt-3' >
   <Row>
     <Col md={2} className='pt-3'>
      <CategoryuSideMenu/>
     </Col>
     <Col md={9}>
        <NewFeed/>
     </Col>
   </Row>

    </Container>
    </Base>
  )
}

export default Home
