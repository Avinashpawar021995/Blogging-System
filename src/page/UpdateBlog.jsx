import React, { useContext, useEffect, useRef, useState } from 'react'
import Base from '../Components/Base'
import {  useNavigate, useParams } from 'react-router-dom'
import userContext from '../context/UseContext';
import { loadPost, updatePost } from '../Services/PostCategory';
import { toast } from 'react-toastify';
//import {getCurrentUserDetails} from '../Auth'
import { Card, Form, CardBody, Container, Input, Button, InputGroup, Label } from 'reactstrap';
import JoditEditor from 'jodit-react';
import { loadAllCategries } from '../Services/CagtegoryService';
const UpdateBlog = () => {
    const editor =useRef(null)  
  const {blogId}=  useParams();
    const  object=useContext(userContext)
    const navagate =useNavigate();
    const [categories, setCategories]=useState([])
      const [post ,setPost]=useState(null)
     
      useEffect(() => {

        loadAllCategries().then((data) => {
            console.log(data)
            setCategories(data)
        }).catch(error => {
            console.log(error)
        })

        //load the blog from database
        loadPost(blogId).then(data => {
            console.log(data)
            setPost({ ...data, categoryId: data.category.categoryId })
        })
            .catch(error => {
                console.log(error);
                toast.error("error in loading the blog")
            })
    },[])

    useEffect(()=>{
       if(post){
     if(post.user.id !== object.user.data.id){
            toast.error("this is not your post !!")
            navagate("/");
     }
 } }, [post])
     
 const handleChange=(event , fieldName)=>{
  setPost({
    ...post,
    [fieldName]:event.target.value
  })

 }
     const updatePost1=(event)=>
     {
      event.preventDefault();
     updatePost({...post, category:{categoryId:post.categoryId }}, post.postId).then((response)=>{
       console.log(response);
       toast.success("post update")
     }).catch(error=>{
      console.log(error);
      toast.error("error in update  post")
     }) 

    }
const updateHtml=()=>{
  return(
  <div className='wrapper mt-5'>
       <Card className='shadow-sm mt-2 border border-0'>
         <CardBody  className='m-2'>
 
          <div>
          <h3>update post here !!</h3>   
          </div>
            <Form onSubmit={updatePost1}>
           <InputGroup className='my-3'>
           <Label htmlFor='title'>title</Label>
            <Input type='text' 
            name='title'
            id='title'
            value={post.title}
            placeholder='enter here' 
             onChange={(event)=>handleChange(event,'title')}
             />
           </InputGroup>
            <div className='my-3'>
           <JoditEditor
            ref={editor}
               value={post.content}
               onChange={newContent=>setPost({...post,content:newContent})}        
           />
            </div>
                {/* file field
                */}
        <div className='mt-4'>
          <label htmlFor="image"> select Post file</label>
          <Input type='file' id="image" onChange={''} />
          
        </div>

           <InputGroup>
            <Label htmlFor='categoryId'>post category</Label>
                 <Input type='select'
                 id='categoryId'
                  placeholder='enter here'
                name='categoryId'
                onChange={(event)=>handleChange(event,'categoryId')}
                  className='rounded-0'
       value={post.categoryId}
     >
    <option disabled  value={0} >--select category ---</option>
   {
    categories.map((category)=>(
     
      <option key={category.categoryId}>{category.categoryTitle}</option>
      
    ))  
}
            </Input>
           </InputGroup>
                              <Container className='text-center mt-3'>
                     <Button type='submit' color='primary'>update post</Button>
                     <Button color='denger' className='mx-3'>Reset Content</Button>
                   </Container>
              </Form>
         </CardBody>
        </Card>
     </div>   

)}

    return (
    <Base>
    <Container>
    {post && updateHtml()}
   
    </Container>
    </Base>
  )
}

export default UpdateBlog
