import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import { QueryClient, QueryClientProvider } from 'react-query';
import Home from "./Home/Home";
import Search from "./Search/Search";
import Create from "./Create/Create";
import Profile from "./Profile/Profile";
import LogOut from './LogOut/LogOut';
import Edit from './Edits/Edit';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './Admin/Admin';
// import { Switch } from 'react-router-dom'

// const query = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path:"/search",
//     element:<Search/>
//   },
//   {
//     path:"/home",
//     element:<Home/>
//   },
//   {
//     path:"/create",
//     element:<Create/>
//   },
//   {
//     path:"/logout",
//     element:<Profile/>
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  // <RouterProvider router={router}/>


  // <Switch>
  //   <Route path='/search'Component={Search}/>
  //   <Route path='/home' Component={Home}/>
  //   <Route path='/create' Component={Create}/>
  //   <Route path='/logout' Component={Profile}/>
  // </Switch>




    <BrowserRouter>
      <Routes>
        <Route path='/search' element={<Search />} />
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/createAcc' element={<Admin />} />
        <Route path='/profile/:code' element={<Profile />} />
        <Route path='/Edit' element={<Edit />}></Route>


      </Routes>
    </BrowserRouter>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


{/* Nested Route */ }
{/* <Route path='account'>
        <Route path='profile' element={<Profile/>}/>
        <Route path='settings' element={<Settings/>}/>
      </Route> */}