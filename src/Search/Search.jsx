import React from 'react'
// import { Data } from '../NavItem';
import Nav from './NavSearch';
import Menu from './Menu';
import './Search.css';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import ContextProvider from './Context';

// const UserData = Data.map((curElem) => {
//   return curElem;
// });


const Search = () => {

  // const navigate = useNavigate();
  // const [code, setCode] = useState("");

  // console.log(code);

  // const data = {
  //   code:code,
  // }

  // const sendServer = (e) => {
  //  e.preventDefault();

  //   fetch("/Search", {
  //     method:'post',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify(data),
  //    }).then(res => res.json()).then(data => {
  //     console.log(data);
  //   })
  //   // navigate('/logout');
  // }


  return (
    <>
      {/* <Nav NavItem={UserData} />
      <Menu code={code} takeCode={setCode} sendServer={sendServer} /> */}
      <ContextProvider>
      <Nav/>
      <Menu/>
     </ContextProvider>
    </>
  )
}

export default Search
