import React, { useEffect, useState } from 'react'
import { getCurrentUserDetails } from '../Auth';
import { deletePostUser, loadPostUserWise } from '../Services/PostCategory';
import AddPost from '../Components/AddPost';
import Base from '../Components/Base';
import { Container } from 'reactstrap';
import Post from '../Components/Post';
import { toast } from 'react-toastify';
const Blogpage = () => {
    useEffect (()=>{
        document.title="dashbord";
      })
      const [user , setUser]=useState({})
       const [posts, setPosts] =useState([])
      useEffect(()=>{
        setUser(getCurrentUserDetails())
        console.log(getCurrentUserDetails());
         loadPostData()
      },[])
    
       const loadPostData=()=>{
        loadPostUserWise(getCurrentUserDetails().id).then(data=>{
          console.log(data)
          setPosts([...data])
        }).catch(error=>{
          console.log("error in loading  user posts");
        })
       }
    
    // funtion to delete post
    const deletePost=(post)=>{
       //going to delete post
       deletePostUser(post.postId).then(response=>{
        console.log(response.data);
        toast.success("post is deleted...")
       const newPosts=  posts.filter(p=>p.postId!=post.postId)
        setPosts([...newPosts]) 
      }).catch(error=>{
        console.log(error);
        toast.error("error in deleting post");
       })
    }
    
      return (
       <Base>
       <Container>
        
        <AddPost/> 
    
       <h1 className='my-3'>Posts Count: ({posts.length})</h1> 
         { posts.map((post, index)=>{
          return (
            <Post post={post} key={index} deletePost={deletePost}/>
          )
         })
    
         }
       </Container>   
       </Base>
        )
    }
    


export default Blogpage
