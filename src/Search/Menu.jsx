import React from 'react'
import { useNavLink } from './Context';
import { Link } from 'react-router-dom';

const Menu = () => {
        // let value;
        const navLink = useNavLink();
        // const location = useLocation(null);

        // if(location !== null){
        //         alert(location.state.prop)
        // }

  return (
   <>

        <main className='SearchMain'>
                <section className='Searchsection'>
                        <form className='forms'>
                                <div className="formContains">
                                        <label className='label'>Code:</label>
                                        <input type="text" value={navLink.code} onChange={(event) => navLink.setCode(event.target.value)} autoComplete='off' className='input'/>
                                </div>
                                <div className="btnformContains">
                                <Link to={`/profile/${navLink.code}`}><button type="submit" onClick={navLink.cleanInputfield} id="btn">Search</button></Link>
                                </div>
                        </form>
                </section>
               
        </main>
   </>
  )
}

export default Menu

// navLink.code
// onClick={navLink.sendServer}