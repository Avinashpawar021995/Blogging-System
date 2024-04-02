import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'
import {getCurrentUserDetails, isLoggeIn} from '../Auth'
import userContext from '../context/UseContext'
const Post = ({post={id:-1, title:"this is default pos title", content: "this is contect"}, deletePost }) => { 
     const userContextData =useContext(userContext)
   const [user, setUser]=useState(null)
     const [login, setLogin]=useState(null)
     useEffect(()=>{
    setUser(getCurrentUserDetails())
    setLogin(isLoggeIn())
     },[login])
 
     return (
    <Card className='border-0 shadow-sm mt-3'>
        <CardBody>
            {post.title}
         <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,60)}}>
            {/* {post.content.substring(20,'\n')}... */}
         </CardText>
         <div>
            <Link to={'/post/'+post.postId} className='btn btn-primary border-0' role='button'>Read More</Link>
              {userContextData.user.login &&(user && user.id === post.user.id ?<Button color='danger' onClick={()=>deletePost(post)}  className='ms-2'>Delete</Button>:'')}
              {userContextData.user.login &&(user && user.id === post.user.id ?<Button tag={Link} to={`/user/update-blog/${post.postId}`} color='warning'   className='ms-2'>update</Button>:'')}
           </div>
        </CardBody>
    </Card>
  )
}
export default Post
