import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({NavItem}) => {

  return (
  <>
     <header>
        <div className='Container'>
                <ul className='ContaiN'>
                        {NavItem.map((curElem, index) => {
                                return (
                                        <li key={index} className='navITems'><Link to={curElem.link}>{curElem.li}</Link></li>
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