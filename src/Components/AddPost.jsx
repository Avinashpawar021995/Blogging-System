import React, { useEffect, useRef, useState } from 'react'
import { Button, Card,CardBody,Container,Form, Input, InputGroup, Label } from 'reactstrap'
import { loadAllCategries } from '../Services/CagtegoryService';
import JoditEditor from 'jodit-react';
import { createPost, updaloadPoastImage } from '../Services/PostCategory';
import {getCurrentUserDetails} from '../Auth'
import {toast} from 'react-toastify';
const AddPost = () => {

  const editor =useRef(null)
  //const[content, setContent]=useState('')
 const [categories, setCategories]=   useState([])
   const [user, setUser]=useState(undefined) 
 const [post , setPost] =useState({
      title:' ',
      content:'',
    categoryId:''
 })
  // image state 
    const [image, setImage]=useState(null)


  // const  config={
  //   placeholder: "start typing ...."
  // }
 useEffect(()=>{
     setUser(getCurrentUserDetails())
    loadAllCategries().then((data)=>{
    setCategories(data)
  }).catch(error=>{
    console.error(error)
  })
  },[])
// field changed function 
const fieldChanged =(event)=>{
setPost({...post, [event.target.name]:event.target.value})
}  
 const contentFieldChanaged=(data)=>{
   setPost({...post,'content':data})
 }
 
       
  //create post function 
  const createPostq =(event)=>{
    event.preventDefault();
     if(post.title.trim()==='')
     {
       alert("post title is required !!");
       return
     }

       if(post.content.trim()==='')
      {
   toast.error("post contect  is required !!");
        return
      }
       if(post.categoryId==='')
       {
   toast.error("post category id is required !!");
        return
        
       }

     // submit  the form one server
     post['userId']=user.id;
     //post['token']=user.token;
     createPost(post).then(data=>{
         updaloadPoastImage(image, data.postId).then(data=>{
           toast.success("image uploaded !!")
         }).catch(error=>{
          toast.error("error in uploading image")
         })


      toast.success("Post created")
      setPost({
        title:'',
        content:'',
        categoryId:''
      }) 
     }).catch((error)=>{
                
         toast.error("post not created due  to some  error !!");
          })


  }

  //handling  file  change event
  const handlefileChange =(event)=>{
      setImage(event.target.files[0])

  }

  return (
    <div className='wrapper mt-5'>
       <Card className='shadow-sm mt-2 border border-0'>
         <CardBody  className='m-2'>
 
          <div>
          {/* {JSON.stringify(post)} 
  */}
          <h3>what going in your wind?</h3>
            
          </div>
            <Form onSubmit={createPostq}>


           <InputGroup className='my-3'>
           <Label htmlFor='title'>title</Label>
            <Input type='text' 
            name='title'
            id='title'
             placeholder='enter here' 
             onChange={fieldChanged}
             />
           </InputGroup>
            <div className='my-3'>
           <JoditEditor
            ref={editor}
            value={post.content}
            onChange={(newContent) => contentFieldChanaged(newContent)}
            />
            </div>
                {/* file field
                */}
        <div className='mt-4'>
          <label htmlFor="image"> select Post file</label>
          <Input type="file" id="image"  onChange={handlefileChange}/>
          
        </div>

           <InputGroup>
            <Label htmlFor='categoryId'>post category</Label>
                 <Input type='select'
                 id='categoryId'
                  placeholder='enter here'
                name='categoryId'
                onChange={fieldChanged}
                  className='rounded-0'
                 defaultValue={0}
                 >
    <option disabled  value={0} >--select category ---</option>
   {
    categories.map((category)=>(
     
      <option value={category.categoryId} key={category.categoryId}>{category.categoryTitle}</option>
      
    ))  
}
            </Input>
           </InputGroup>
                              <Container className='text-center mt-3'>
                     <Button type='submit' color='primary'>submit</Button>
                     <Button color='denger' className='mx-3'>clear</Button>
                   </Container>
              </Form>
         </CardBody>
        </Card>
     </div>
  )
}

export default AddPost
