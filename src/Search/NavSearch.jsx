import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useNavLink } from './Context';


const Nav = () => {
        const [screenSize, setScreenSize] = useState(window.innerWidth);
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const navLink = useNavLink();


        // Function to update screen size
        const handleResize = () => {
                const width = window.innerWidth;
                setScreenSize(width); // Update the state
        };

        // Add resize event listener
        useEffect(() => {
                window.addEventListener('resize', handleResize);

                // Cleanup the event listener on component unmount
                return () => {
                        window.removeEventListener('resize', handleResize);
                };
        }, []); // Empty dependency array ensures this runs only once on mount

        // Log the updated screenSize whenever it changes
        useEffect(() => {
                console.log("Updated Screen Width:", screenSize);
        }, [screenSize]); // This effect runs whenever screenSize changes





        function popUp() {
                if (isMenuOpen == false) {

                        setIsMenuOpen(true);
                        console.log('It is true')
                } else {
                        setIsMenuOpen(false);
                        console.log("It is false");

                }
                // setIsMenuOpen(!isMenuOpen);

        }

        return (
                <>

                        <header>
                                <nav className='container'>
                                        <div className="logo">Logo</div>
                                        <ul className='nav-links'>
                                                <li>
                                                        <a className="icon" id="menu" onClick={popUp}> <i className="fa fa-bars"></i></a>

                                                        {navLink.UserData.map((curElem, index) => {
                                                                return (
                                                                        <a key={index}><NavLink to={curElem.link} state={{ from: `/search` }}>{curElem.li}</NavLink > </a>
                                                                )
                                                        })

                                                        }
                                                </li>

                                        </ul>


                                </nav>

                        </header>

                        {screenSize <= 400 && (
                                <section className={isMenuOpen ? 'searchpopDownMenue' : 'searchpopUpMenu'} id="popMenu1">
                                        <ul className={isMenuOpen ? 'card-rotate2' : ''} id="popMenu2">
                                                <li>
                                                        {
                                                                navLink.UserData.map((curElem, index) => {
                                                                        return (
                                                                                <a key={index} > <Link to={curElem.link}  state={{ from: `/search` }}> {curElem.li} </Link> </a>
                                                                        )
                                                                })
                                                        }
                                                </li>
                                        </ul>
                                </section>
                        )}
                </>
        )
}

export default Nav
