import React, { useState } from 'react'
import { useEffect } from 'react'
import  {Row, Col, Pagination, PaginationItem, PaginationLink, Container} from 'reactstrap' 
import { deletePostUser, loadAllPost, loadPostUserWise } from '../Services/PostCategory'
import Post from './Post'
import {toast} from 'react-toastify'
import InfiniteScroll from 'react-infinite-scroll-component'
const NewFeed = () => {
    const [postContent, setPostContent]=useState({
        content :[],
        totalPages:'',
        totalElements:'',
        pageSize:'',
        lastPage:false,
        pageNumber:''


    }) 
      
    const [currentPage, setCurrentPage]=useState(0)
    useEffect (()=>{
       changePage(currentPage)    
      },[currentPage])

const changePage=(pageNumber=0,pageSize=5)=>{
    if(pageNumber>postContent.pageNumber && postContent.lastPage)
    {
      return;
    }
    if(pageNumber<postContent.pageNumber && postContent.pageNumber===0)
    {
      return;
    }


  loadAllPost(pageNumber, pageSize).then(data=>{
    //setPostContent(data)
   //window.scroll(0,0)
      setPostContent({
        content:[...postContent.content, ...data.content],
        totalPages: data.totalPages,
        totalElements: data.totalElements,
        pageSize:data.pageSize,
        lastPage:data.lastPage,
        pageNumber:data.pageNumber

      })
  
  }).catch(error=>{
    toast.error("error in loading page")
    
  })
}




// funtion to delete post
const deletePost=(posts)=>{
 //going to delete post
 deletePostUser(posts.postId).then(response=>{
  console.log(response.data);

  toast.success("post is deleted...")
 let newPostContents= postContent.content.filter(p=>p.postId!= posts.postId)
  
  setPostContent({...postContent, content:newPostContents})
}).catch(error=>{
  console.log(error);
  toast.error("error in deleting post");
 })
}


const changePageInfinite=()=>{
     setCurrentPage(currentPage+1)
}


  return (
     <>
      <div className="container-fluid">
     <Row>
     <Col md={
        {
          size:12  
        }
     }>
     
     <h1> Blag contact ({postContent?.totalElements})</h1>
        <InfiniteScroll
          dataLength={postContent.content.length}
          next={changePageInfinite}
          hasMore={!postContent.lastPage}
          loader={<h4>loading...</h4>}
          endMessage={
            <p style={{textAlige:'center'}}>
              <b>yay! you have sceen it all</b>
            </p>
          }
        >
        {
           postContent.content.map((post)=>(
            <Post post={post} key={post.postId} deletePost={deletePost}/>
           ))
        }
</InfiniteScroll>
         <Container>
      {/*
<Pagination size='lg'>
<PaginationItem  onClick={()=>changePage(postContent.pageNumber)} disabled={postContent.pageNumber==0}>
<PaginationLink previous>
   previous
</PaginationLink>
</PaginationItem>
<PaginationItem>
  {
    [...Array(postContent.totalPages)].map(
        (item,index)=>(
<PaginationItem  onClick={()=>changePage(index,5)} active={index==postContent.pageNumber}  key={index}>
  <PaginationLink>
    {index+1}
  </PaginationLink>
</PaginationItem>
        )
    )
  }
</PaginationItem >
<PaginationItem onClick={()=>changePage(postContent.pageNumber+1)} disabled={postContent.lastPage}>
<PaginationLink next>
   next
</PaginationLink>
</PaginationItem>
</Pagination> */}
</Container>
     </Col>
     </Row>

      </div>
     </>
  )
}

export default NewFeed
