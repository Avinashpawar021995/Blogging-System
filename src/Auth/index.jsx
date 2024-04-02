
// isLoggedIn=>
 export const isLoggeIn=()=>{
  let data= localStorage.getItem("data")
   if(data!=null)
   {
    return true;
   }else{
    return false;
   }
};
 
//  doLogin => data=> set tp localstorage
 export const doLogin =(data,next)=>{
    localStorage.setItem("data",JSON.stringify(data))
    next()
};


//doLogout =>remove from local strorage

  export const doLogout =(next)=>{
    localStorage.removeItem("data");
 next()  
}
//get current user

export const getCurrentUserDetails=()=>{
    if(isLoggeIn()){
     return JSON.parse(localStorage.getItem("data")).userDto;
    }else{
        return undefined;
    }
}

 export  const getToken=()=>{
if(isLoggeIn())
{
    return JSON.parse(localStorage.getItem("data")).token

 }else{
    return null;
 }

 }