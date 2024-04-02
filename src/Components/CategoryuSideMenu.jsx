import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategries } from '../Services/CagtegoryService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const CategoryuSideMenu = () => {
const [categories, setCagetegories]=useState([]);
useEffect(()=>{
   loadAllCategries().then(data=>{
    setCagetegories([...data])
     console.log(data);
   }).catch(error=>{
    toast.error("error in loading categories");
   })

},[])

  return (
    <div className='mt-4'>
        <ListGroup>
            <ListGroupItem tag={Link } to='/' action ={true} className='border-0' >
               all blog
            </ListGroupItem>

            { categories&& categories.map((cat , index)=>{
                return (
                       <ListGroupItem tag={Link} to={"/categories/"+cat.categoryId} key={index} className='border-0  mt-1 shadow-none' action={true}>
                          {cat.categoryTitle}
                       </ListGroupItem>
                )
            })}
        </ListGroup>
      

    </div>
  )
}

export default CategoryuSideMenu
