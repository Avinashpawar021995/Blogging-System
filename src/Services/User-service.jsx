
import { myAxios, privateAxios } from "./Helper";
export const signup=(user)=>{
    return myAxios.post('/register',user).then(
        (response=>response.data)
    );
}

export const loginUser =(loginDetail)=>{
    return myAxios.post('/login',loginDetail).then((response)=>response.data);

}
export const getUser=(userId)=>{
     return myAxios.get(`/users/${userId}`).then(respose=>respose.data);
}

export const updataUser=( user, id)=>{
    return privateAxios.put(`/update/${id}`, user).then(response=>response.data);
}

