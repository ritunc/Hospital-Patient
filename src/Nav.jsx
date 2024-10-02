import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({NavItem}) => {

  return (
  <>
     <header>
        <div className='container'>
                <ul className='contain'>
                        {NavItem.map((curElem, index) => {
                                return (
                                        <li key={index}><Link to={`${window.location.origin}${curElem.link}`}>{curElem.li}</Link></li>
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
