import { myAxios, privateAxios } from "./Helper";
 //create post funtion
 export const createPost=(postData)=>{
    return privateAxios.post(
`/user/${postData.userId}/category/${postData.categoryId}
/posts`,postData).then((response)=>response.data);

///user/{userId}/category/{categoryId}/posts
}

//get all posts

export const loadAllPost=(pageNumber, pageSize)=>{
    return myAxios.get(`/posts?pageNumber=${pageNumber}& pageSize=${pageSize}&sortBy=addDate&sortDir=desc`).then((response)=>response.data);
}

//load single post of given id
export const loadPost=(postId)=>{
    return myAxios.get("/posts/"+postId).then((response)=>response.data );

}

export const createComment=(comments, postId)=>{
    return privateAxios.post(`/post/${postId}/comments`, comments)
   ///post/{postId}/comments
}

//upload post  banner image
 export const updaloadPoastImage=(image, postId)=>{
   let formData= new FormData();
   formData.append("image", image);
   return privateAxios.
   post(`/post/image/upload/${postId}`,formData,
   {
    ///post/image/upload/{postId}
    headers:{
        'Content-Type':'multipart/form-data'
    }
   }).then((response)=>
     response.data) ;
 };


 //get category post  
 export const loadPostCategoryWise =(categoryId)=>
{
  return privateAxios.get(`/category/${categoryId}/posts`).then(response=>response.data)
}

// load post id
export const loadPostUserWise=(userId)=>{
   return privateAxios.get(`/user/${userId}/posts`).then(response=>response.data) 
}

// delete post 

export const deletePostUser=(postId)=>{
    return privateAxios.delete(`/posts/${postId}`).then(response=>response.data)
}

//update post 
export  const updatePost=(post, postId)=>{
  return privateAxios.put(`/posts/${postId}`,post).then((resp)=> resp.data)
}
