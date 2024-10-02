import React from 'react'
import { Link } from "react-router-dom";
const NavProfile = ({NavItem}) => {
  return (
  <>
     <header className="Profilehader">
                <div className="profilecontainer">
                        <ul className="profilecontain">
                             {NavItem.map((curElem, index) => {
                                let code;
                                return (
                                        <li key={index}><Link to={`${window.location.origin}${curElem.link}`} state={{ from:`${window.location.origin}/profile/${undefined}`}}>{curElem.li}</Link></li>
                                )
                             })

                             }
                        </ul>
                </div>
        </header>
  </>
  )
}

export default NavProfile
