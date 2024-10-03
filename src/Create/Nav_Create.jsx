import React from 'react'
import { Link } from 'react-router-dom';


const NavCreate = ({NavItem}) => {
        return (
                <>

                        <header className='Create-Header'>
                                <div className='Containers'>
                                        <ul className='Contains'>
                                                {NavItem.map((curElem, index) => {
                                                        return (
                                                                <li key={index} className='Labels'><Link to={curElem.link} state={{ from: `/create`}}>{curElem.li}</Link></li>
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
