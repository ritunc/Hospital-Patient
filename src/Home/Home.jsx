import React from 'react';
import './Home.css';
import { Data } from './NavItems';
import Nav from './Nav';
import Menu from './Menu';

const UserData = Data.map((curElem) => {
                return curElem;
        })



const Home = () => {

  return (
    <>
        <Nav NavItem={UserData}/>
        <Menu/>
    </>
  )
}

export default Home
