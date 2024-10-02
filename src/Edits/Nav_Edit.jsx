import React from 'react'
import { Link } from 'react-router-dom';


const NavCreate = ({NavItem}) => {
        return (
                <>

                        <header className='Create-header'>
                                <div className='container'>
                                        <ul className='contain'>
                                                {NavItem.map((curElem, index) => {
                                                        return (
                                                                <li key={index}><Link to={curElem.link} state={{ from: "/create"}}>{curElem.li}</Link></li>
                                                        )
                                                })

                                                }
                                        </ul>
                                </div>
                        </header>
                </>
        )
}

export default NavCreate
