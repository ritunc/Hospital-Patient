import React,  { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


const NavCreate = ({ NavItem }) => {


        const [screenSize, setScreenSize] = useState(window.innerWidth);
        const [isMenuOpen, setIsMenuOpen] = useState(false);


        // const handleResize = () => {
        //         const widt = window.innerWidth;
        //         console.log("Screen Width:", window.innerWidth, "screenSize::", screenSize);
        //         console.log(widt);
        //         setscreenSize(widt);
        // }

        // handleResize()
        // window.addEventListener('resize', handleResize);
        // useEffect(() => {
        //         console.log("Again::")
        //         window.addEventListener('resize', handleResize);
        //         console.log("Again2::")
        //         return () => {
        //                 window.removeEventListener('resize', handleResize);
        //         };
        // }, []);


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

                                                        {

                                                                NavItem.map((curElem, index) => {
                                                                        return (
                                                                                <a key={index}> <Link to={curElem.link}> {curElem.li} </Link> </a>
                                                                        )
                                                                })
                                                        }
                                                </li>

                                        </ul>


                                </nav>

                        </header>
                        {screenSize <= 400 && (
                                <section className={isMenuOpen ? 'popDownMenue' : 'popUpMenu'} id="popMenu1">
                                        <ul className={isMenuOpen ? 'card-rotate2' : ''} id="popMenu2">
                                                <li>
                                                        {
                                                                NavItem.map((curElem, index) => {
                                                                        return (
                                                                                <a key={index}> <Link to={curElem.link}> {curElem.li} </Link> </a>
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

export default NavCreate















   








        // return (
        //         <>

        //                 <header className='Create-Header'>
        //                         <div className='Containers'>
        //                                 <ul className='Contains'>
        //                                         {NavItem.map((curElem, index) => {
        //                                                 return (
        //                                                         <li key={index} className='Labels'><Link to={curElem.link} state={{ from: `/create` }}>{curElem.li}</Link></li>
        //                                                 )
        //                                         })

        //                                         }
        //                                 </ul>
        //                         </div>
        //                 </header>
        //         </>
        // )