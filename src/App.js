import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home'; 
import About from './page/About';
import Service from './page/Service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouter from './Components/PrivateRouter';
import UserDashbord from './user-routers/UserDashbord';
import Profiledetails from './user-routers/Profiledetails';
import PostPage from './page/PostPage';
import UserProvider from './context/UserProvider';
import Categories from './page/Categories';
import UpdateBlog from './page/UpdateBlog';
import PasswordForword from './page/PasswordForword';
import AddCategories from './page/AddCategories';
import Blogpage from './page/Blogpage';
import Contact from './page/Contact';
import CategoryDetails from './Categories/CategoryDetails';
import CategoryUpdate from './Categories/CategoryUpdate';
import UserUpdateProfile from './Components/UserUpdateProfile';
function App() {
  return (
    <>
     <UserProvider>
         <BrowserRouter>
     <ToastContainer position='bottom-left'/>
         <Routes>
          <Route path='/' element={<Home/>}/>             
            <Route path='/about' element={<About/>}/>
              <Route path='/login' element={<Login/>} />
               <Route path="/categories/:categoryId" element={<Categories/>}/>
               <Route path='/signup' element={<Signup/>}/>
               <Route path='/service' element={<Service/>}/>
                 <Route path='/contact' element={<Contact/>}/>
              <Route  path='/post/:postId' element={<PostPage/>}/>
              <Route path='/forward' element={<PasswordForword/>}/>
                                                                    
              <Route path='/user'  element={<PrivateRouter/>}>       
              <Route  path='dashboard' element={<UserDashbord/>}/>
              <Route path='profile-info/:userId' element={<Profiledetails/>}/>
              <Route path='update-blog/:blogId'  element={<UpdateBlog/>}/>
               <Route path='categ' element={<AddCategories/>} /> 
               <Route path='catedetails' element={<CategoryDetails/>}/>
               <Route path='blogger' element={<Blogpage/>}/>
               <Route path='updprofile/:id' element={<UserUpdateProfile/>}/>
               <Route path='update-category/:categoryId' element={<CategoryUpdate/>}/>
              </Route>

    
              </Routes>  
         </BrowserRouter>
         </UserProvider>     
       </>
  );
}

export default App;
