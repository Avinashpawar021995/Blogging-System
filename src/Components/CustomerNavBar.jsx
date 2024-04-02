import React, {useContext, useEffect, useState } from 'react';
import { NavLink as ReackLink, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import {doLogout, getCurrentUserDetails, isLoggeIn} from '../Auth';
import userContext from '../context/UseContext';
const CustomerNavBar = () => {
   const navigate =useNavigate();
     const userContextData=useContext(userContext);
   const [isopen,setIsOpen]=useState(false);
  const [login,setLogin]=useState(false);
    const [user, setUser]=useState(undefined);
  
    useEffect (()=>{
   setLogin(isLoggeIn())
    setUser(getCurrentUserDetails())
    },[login])


const logout =()=>{
  doLogout(()=>{
    //logged out
    setLogin(false);
     userContextData.setUser({
      data:null,
      login:false
     })   
 navigate("/");
    })
}

return (
<div>
     <Navbar color='dark'
     dark
     expand='md'
     fixed=''
     className='mx-4 px-5'
     >
          <NavbarBrand tag={ReackLink} to='/' >
            Pandurang Online
            </NavbarBrand>
          <NavbarToggler onClick={()=>setIsOpen(!isopen)}  />
          <Collapse isOpen={isopen}  navbar>
            <Nav className="me-auto" navbar>
            <NavItem>
                <NavLink tag={ReackLink} to='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReackLink} to='/about'>about</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReackLink} to='/service'>service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReackLink} to='/contact'>contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReackLink} to='/user/blogger'>Blog</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={ReackLink} to='/user/categ'>add categories</DropdownItem>
                  <DropdownItem tag={ReackLink} to='/user/catedetails'>show categories</DropdownItem>
                  
                  <DropdownItem divider />
                  <DropdownItem>LinkedIn</DropdownItem>
                  <DropdownItem>Instagram</DropdownItem>
                  <DropdownItem>youtude</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
         <Nav navbar>
          {
            login &&(
             <>
              <NavItem>
              <NavLink tag={ReackLink} to={`/user/profile-info/${user.id}`}>
                Profile Info
               </NavLink>
            </NavItem>
             <NavItem>
              <NavLink tag={ReackLink} to="/user/dashboard" >
                 {user.email}
                 </NavLink>
            </NavItem> 
            <NavItem>
              <NavLink onClick={logout}>
                logout
               </NavLink>
            </NavItem>
             
             </>

            )
          }
          {
            !login &&(
              <>
           
         <NavItem>
                <NavLink tag={ReackLink} to='/login' >
                  login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReackLink} to='/signup'>
                  signup
                </NavLink>
              </NavItem>
           
              </>
            )
          }
        </Nav>
            
              </Collapse>        
</Navbar>

      </div>

    );
  }
  
export default CustomerNavBar
