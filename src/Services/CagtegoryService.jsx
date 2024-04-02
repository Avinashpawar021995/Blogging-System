import { myAxios, privateAxios } from "./Helper";
export const loadAllCategries =()=>{
     return myAxios.get('/categories/').then(response=>{
        return response.data;
     })     
    
}
export const deleteCategory =(categoryId)=>{
  return privateAxios.delete(`/categories/dele/${categoryId}`).then(response=>response.data);
}

export  const addNewCategories=async(categorydata)=>{
  //return await privateAxios.post('/categories/postCategories', categorydata).then(response=>response.data);  
  return privateAxios.post(`/categories/postCategories`,categorydata).then(
   (response=>response.data)
); 
}
 export const getCategoryId=(categoryId)=>{
   return myAxios.get(`/categories/get/${categoryId}`).then(response=>{
     return response.data});
 }

export const updateCategoryId=(categoryId, category)=>{
   return privateAxios.put(`/categories/update/${categoryId}`, category).then(response=>{
      return  response.data});
}

