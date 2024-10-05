import React, { useState, useRef } from 'react'
import { MenuItem } from './MenuItem';
import { Link } from 'react-router-dom';

// const UserMenu = MenuItem.map((curElem) => {
//         return (curElem);
// });
console.log(MenuItem);

const Menu = () => {
        const {h1, h2, h3, logIn, email, pass, createAcc} = MenuItem;

        const ref1 = useRef(null);
        const ref2 = useRef(null);

        const [userlogin, setUserlogin] = useState({ email: "", password: ""});
        let name, value;
        const AdminUserLogin = (e) => {
                name = e.target.name;
                value = e.target.value;

                setUserlogin({...userlogin, [name]:value })
        }

        const AdminloginPostData = (e) => {

                e.preventDefault();

                const emil = ref1.current.value;
                const pass = ref2.current.value;
                
                if(!emil || !pass){
                        alert("Please fill the form");
                } else {

                        fetch(`https://hospital-backend-ecru.vercel.app/user/login`, {
                                method:"post",
                                headers:{
                                        "Content-Type":"application/json",
                                },
                                body:JSON.stringify(userlogin),
                        })
                        .then(res => res.json())
                        .then(data => {
                                console.log(data);
                                console.log(data.Uid);
                                
                                // document.cookie = data.Uid
                                alert(data.message);
                        })

                }

               
                
        }




  return (
   <>
     <main className='main'>
                <div className="imgContainer">
                        <h1 className="Text">{h1}</h1>
                        <h2 className="Text">{h2}</h2>
                        <h3 className="Text">{h3}</h3>
                </div>
                <div className="LogIn">
                        <h1 id="admins">{logIn}</h1>
                        <form className='home-form'>
                                <div className="FormContains">
                                        <label className='LABALS'>{email}:</label>
                                        <input type="email" name="email" required  value={userlogin.email} ref={ ref1 } onChange={AdminUserLogin} className='LogInputs'/>
                                </div>

                                <div className="FormContains">
                                        <label className='LABALS'>{pass}:</label>
                                        <input type="password" name="password" required  value={userlogin.password} ref={ ref2 } onChange={AdminUserLogin} className='LogInputs'/>
                                </div>

                                <div className="btnFormContain">
                                        <button type="submit" onClick={AdminloginPostData} id="btns">{logIn}</button>
                                </div>
                        </form>
                        <div id="createAccount">
                                <a><Link to={"/createAcc"}>{createAcc}</Link></a>
                        </div>
                </div>
        </main>
   </>
  )
}

export default Menu
