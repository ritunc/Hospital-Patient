import React from 'react'
import { useNavLink } from './Context';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
        // let value;
        const navLink = useNavLink();
        // const location = useLocation(null);

        // if(location !== null){
        //         alert(location.state.prop)
        // }

  return (
   <>
      <main className='menu'>
                <form className='forms'>
                        <div className="formContains">
                                <label className='label'>Code:</label>
                                <input type="text" value={navLink.code} onChange={(event) => navLink.setCode(event.target.value)} autoComplete='off' className='input'/>
                        </div>
                        <div className="btnformContains">
                        <Link to={`https://hospital-backend-p4qh.vercel.app/profile/${navLink.code}`}><button type="submit" onClick={navLink.cleanInputfield} id="btn">Search</button></Link>
                        </div>
                </form>
        </main>
   </>
  )
}

export default Menu

// navLink.code
// onClick={navLink.sendServer}