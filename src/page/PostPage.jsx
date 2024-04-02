import React, { useEffect, useState } from 'react'
import Base from '../Components/Base'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Card,CardBody, CardText, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { myAxios } from '../Services/Helper';
import { createComment, loadPost } from '../Services/PostCategory';
import {toast} from 'react-toastify';
import { isLoggeIn } from '../Auth';
const PostPage = () => {
 const {postId} = useParams();
 const [post , setPost] =useState(null)
  const [commnents ,setComments]=useState({
    content:''
  });

 useEffect(()=>{
  //load post  of postId
  loadPost(postId).then(data=>{
  setPost(data);
   console.log(data);
  }).catch(error=>{
    console.log(error)
    toast.error("error loading page")
  })
}, [])

const prinDate=(numbers)=>{
   return new Date(numbers).toLocaleDateString()
}
 const submitPost=()=>{
  if(!isLoggeIn()){
    toast.error("Need  to login first !!")
    return
  }

    if(commnents.content.trim()==='')
    {
      toast.error("enter comments")
      return
    }   
  createComment(commnents, post.postId)
      .then(data=>{
        console.log(data)
        toast.success("comment add...");
        setPost({
          ...post,
          commnents:[...post.commnents,data.data]

        })
setComments({
  content:''
})

      }).catch(error=>{
        console.log(error)
      })
}
  return (
  <Base>
   <Container className='mt-4'>
    <Link to="/">Home</Link> /{post && (<Link to=""> {post.title}</Link>)}
      <Row>
      <Col md={{
        size:12
      }}>
        
         <Card  className='mt-3 ps-2 border-0 shadow-sm'>
                
          {
            (post) && (            
              
              <CardBody>
          <CardText><h4>posted by <b> {post.user.name} </b>on<b>{prinDate(post.addDate)}</b></h4></CardText>
     <CardText>
        <span className='text-muted'>{post.category.categoryTitle}</span>
     </CardText>
   <div className="divder" style={{
    width:'100%',
    height:'1px',
    background:'#e2e2e2'

   }}>
     
   </div>

        <CardText className='mt-3'>

          <h1>{post.title}</h1>
        </CardText>

           <div className="image-container mt-4 continar text-center shadow-sm" style={{maxWidth:'50%'}}> 
              
            <img  className="img-fluid" src={`myAxios/post/image/`+post.imageName} alt="" />
           </div>
      <CardText className='mt-3' dangerouslySetInnerHTML={{__html:post.content}}>

      </CardText>
            
          </CardBody>
            )
          }
          
        
         </Card>
      
      </Col>
      </Row>
<Row className='mt-4'>
 <Col md={
  {
  size:9,
  offset:1
 }}>
 
 <h3>
 commnents({post ? post.commnents.length:0})
 </h3>
 
 {
  post && post.commnents.map((c,index)=>(
     <Card className='mt-2 border-0 ' key={index}>
<CardBody>
  <CardText>
    { c.content}
  </CardText>
</CardBody>
     </Card>
    
    )

  )
 }

<Card className='mt-2 border-0 ' >
<CardBody>
  <CardText>
      <Input type='textarea' id="content" 
      placeholder='enter comment here'
      value={commnents.content}
      onChange={(event)=>setComments({content:event.target.value})}
      />
   
        <Button  onClick={submitPost}  className='mt-2' color='primary' >submit</Button>
     </CardText>
</CardBody>

     </Card>
    
 </Col>

</Row>

   </Container>
 
</Base>
  )
}

export default PostPage
