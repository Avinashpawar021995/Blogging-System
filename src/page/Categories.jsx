import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Components/Base';
import { Col, Container, Row } from 'reactstrap';
import CategoryuSideMenu from '../Components/CategoryuSideMenu';
import { toast } from 'react-toastify';
import { deletePostUser, loadPostCategoryWise } from '../Services/PostCategory';
import Post from '../Components/Post'
const Categories = () => {
    const {categoryId}=useParams();
    const [posts , setPosts]  =useState([])  
    useEffect(()=>{
            loadPostCategoryWise(categoryId).then(data=>{
               setPosts([...data]);
            }).catch(error=>{
              console.log(error);
              toast.error("error in loading post")
            })
            },[categoryId])


            
// funtion to delete post
const deletePost=(post)=>{
  //going to delete post
  deletePostUser(post.postId).then(response=>{
     toast.success("post is deleted...")
  const newPosts=  posts.filter(p=>p.postId!==post.postId)
   setPosts([...newPosts]) 
 }).catch(error=>{
   toast.error("error in deleting post");
  })
}

            
    return (
    <Base>
        
        <Container className='mt-3' >
   <Row>
     <Col md={2} className='pt-3'>
      <CategoryuSideMenu/>
     </Col>
     <Col md={10}>
        <h1> Blog count ({posts.length})</h1>
      {
        posts && posts.map((post ,index)=>{
          return (
            <Post post={post}  key={index} deletePost={deletePost}/>
          )
        })
      }
      {posts.length<=0 ? <h1> no post in this categories</h1>:''}
     </Col>
   </Row>

    </Container>

    </Base>
  )
}

export default Categories
