import React, { useEffect, useState } from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, Col, Container, Row, Table } from 'reactstrap'
import { deleteCategory, loadAllCategries } from '../Services/CagtegoryService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const CategoryDetails = () => {
  
  const [categories, setCagetegories]=useState([]);
  
  useEffect(()=>{
     loadAllCategries().then((data)=>{
      setCagetegories([...data])
      // console.log([...data]);
     }).catch((error)=>{
      toast.error("error in loading categories");
     })
  },[])

   const categorydetele=(cage)=>{
    // going  to delete categories     
    deleteCategory(cage.categoryId).then((response)=>{
      toast.success("categories successfully delete !!" )
      let newCategoires=categories.filter(p=>p.categoryId!==cage.categoryId)
     setCagetegories({...categories, newCategoires})
    }
    ).catch(error=>{  
            toast.error(" some problem")
    })
   }
  return (
    <Base>
     <Container>
        <Row>
           <Col>
             <Card>
                <CardBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>category id</th>
                                <th>category title </th>
                                <th>category decoretion</th>
                                <th>update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                       <tbody> 
                           {
                            categories.map((cage, index)=>{
                              return(
                                <tr key={index} >
                                    <td>{cage.categoryId}</td>
                                    <td>{cage.categoryTitle}</td>
                                    <td>{cage.categoryDescription}</td>
                                    <td><Button tag={Link} to={`/user/update-category/${cage.categoryId}`} color='warning'   className='ms-2'  >update</Button></td>
                                    <td><Button color='danger' className='btn-outline-info' onClick={()=>categorydetele(cage)}>delete</Button></td> 
                                 </tr>
                                 )
                            })
                                
                            }
                            </tbody>
                          </Table>
                </CardBody>
             </Card>
           </Col>
        </Row>
     </Container>
    </Base>
  )
}
export default CategoryDetails
