import React from 'react'
import { useContect } from './Context'
import { Link } from 'react-router-dom'
const NavAdmin = () => {
        const contect = useContect();
  return (
   <>
      <header>
        <div className='container'>
                <ul className='contain'>
                        {contect.UserData.map((curElem) => {
                                return (
                                        <li><Link to={`${window.location.origin}${curElem.link}`}>{curElem.li}</Link></li>
                                )
                        })
                        
                        }
                </ul>
        </div>
     </header>
   </>
  )
}

export default NavAdmin
