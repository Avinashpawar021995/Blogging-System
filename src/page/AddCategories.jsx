import React, { useEffect, useState} from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, Col, Container, Form, FormGroup,  Input, Label, Row } from 'reactstrap'
import { toast } from 'react-toastify'
import { addNewCategories } from '../Services/CagtegoryService'
const AddCategories = () => {
   // useEffect(()=>{
   //    document.title="add categories";
   // }, []);
      const [category, setCategory]=useState({
      categoryTitle:'',
      categoryDescription:''
     })
// const [error, setError]=useState({
//     error:{},
//    isError:false
 // })
 
   const setCategoryAdd=(event)=>{
      setCategory({...category, [event.target.name]:event.target.value})
   }

    const subCategories =(e)=>{
        e.preventDefault();
            if(category.categoryTitle.trim()==='')
            {
              toast.error("not entry title")
            }
           if(category.categoryDescription.trim()==='')
           {
            toast.error("not  entry description");
           }
           
       addNewCategories(category).then((data)=>{ 
           //console.log(data); 
         toast.success("categoriey success add")   
          setCategory(
             {
               categoryTitle:'',
             categoryDescription:''
             }
          )
         }).catch(error=>{
            toast.error("please check infromation...!")
                 //console.log(error);
         }) 
         }
   
         
      
    return (
    <Base>
    <Container>
        <Row>
         <Col>
          <Card>
            <CardBody>
            <Form onSubmit={subCategories}>
                <FormGroup>
                    <Label>categoryTitle</Label>
                    <Input type='text' 
                       name='categoryTitle'
                       id='categoryTitle'
                    placeholder='enter here' 
                       onChange={setCategoryAdd}
                    />
                </FormGroup>
                <FormGroup>
                <Label>categoryDescription</Label>
                    <Input type='textarea'
                      style={{height:"200px"}}
                      name='categoryDescription' 
                    id='categoryDescription'
                    placeholder='enter here'   
                    onChange={setCategoryAdd}
                    />
                </FormGroup>
             <Container>
                <Button type='submit' color='primary'>submit</Button>
              <Button  type='reset' className='bg-danger  mx-3 '>clear</Button>
             </Container>
             </Form>  
            </CardBody>
          </Card> 
         </Col>   
        </Row>
    </Container>
    </Base>
  )
}

export default AddCategories
