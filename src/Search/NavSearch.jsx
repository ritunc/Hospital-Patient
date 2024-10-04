import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavLink } from './Context';


const Nav = () => {
        const navLink = useNavLink();
  return (
  <>
     <header>
        <div className='container'>
                <ul className='contain'>
                        {navLink.UserData.map((curElem, index) => {
                                return (
                                        <li key={index}><NavLink  to={curElem.link} state={{ from: `/search`}}>{curElem.li}</NavLink ></li>
                                )
                        })
                        
                        }
                </ul>
        </div>
     </header>
  </>
  )
}

export default Nav
