import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from '../Components/Base'
import { useParams } from 'react-router-dom'
import { getCategoryId, loadAllCategries,  updateCategoryId } from '../Services/CagtegoryService'
import {toast} from 'react-toastify'
const CategoryUpdate = () => {
 useEffect(()=>{      
    document.title=("update category");         
  },[])

  const {categoryId}= useParams();  
  const [categories, setCategories]=useState([])  
  useEffect(() => {
    getCategoryId(categoryId).then(data=>{
      setCategories(data)
    }).catch(error=>{
      console.log(error);
    })
    //load the blog from database   
    }, [])

        const subCategories =(e, fieldName)=>{
          e.preventDefault();
          setCategories({ ...categories,
            [fieldName]:e.target.value
          })
           updateData()
        }

        const updateData=()=>{
          updateCategoryId({...categories , categories:{categoryId:categories.categoryId}}, categories.categoryId).then((response)=>{
            console.log(categories.categoryTitle);   
          }).catch(error=>{
             toast.error(error) 
             console.log(categories.categoryTitle);   
          console.log(categories.categoryId);
             console.log(categories.categoryDescription); 
          })
        }
      
  return (
    <Base>
    <Container>
        <Row>
          <Form onSubmit={subCategories} >
         <Col>
          <Card>
            <CardBody>
                <FormGroup>
                    <Label>categoryTitle</Label>
                    <Input type='text' 
                    id='categoryTitle'
                    placeholder='enter here' 
                        value={categories.categoryTitle}
                       onChange={(e)=>setCategories(e,"categoryTitle")} />
                </FormGroup>
                <FormGroup>
                <Label>categoryDescription</Label>
                    <Input type='textarea'
                      style={{height:"200px"}} 
                    id='categoryDescription'
                    value={categories.categoryDescription}
                   placeholder="enter  here"
                    onChange={(e)=>setCategories(e, "categoryDescription")}
                    />
                </FormGroup>
             <Container>
                <Button type='submit'
                color='primary' >submit</Button>
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
export default CategoryUpdate
