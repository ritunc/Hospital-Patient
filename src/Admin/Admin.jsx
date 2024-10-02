import React from 'react';
import NavAdmin from './NavAdmin';
import Menu from './menu';
import './Admin.css';
import ContextProvider from './Context';



const Admin = () => {
  return (
        <>
        <ContextProvider>
            <NavAdmin/>
            <Menu/>
        </ContextProvider>
         
        </>
  )
}

export default Admin
