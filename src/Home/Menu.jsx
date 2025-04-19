import React, { useState, useRef } from 'react'
import { MenuItem } from './MenuItem';
import { Link } from 'react-router-dom';

// const UserMenu = MenuItem.map((curElem) => {
//         return (curElem);
// });
const URL = process.env.URL || window.location.origin;
console.log(MenuItem);

const Menu = () => {
        const { h1, h2, h3, logIn, email, pass, createAcc } = MenuItem;

        const ref1 = useRef(null);
        const ref2 = useRef(null);
        const cookie_data = () => {

                console.log("we entered");

                const cooki_data = document.cookie;
                console.log("auth_datasss:", cooki_data);
                return cooki_data;
        }
        const [userlogin, setUserlogin] = useState({ email: "", password: "" });
        const auth_data = cookie_data();
        // const auth_data = cookie_data();
        // userlogin = auth_data;
        let name, value;
        const AdminUserLogin = (e) => {
                name = e.target.name;
                value = e.target.value;

                setUserlogin({ ...userlogin, [name]: value })
        }

        const AdminloginPostData = (e) => {

                e.preventDefault();

                const emil = ref1.current.value;
                const pass = ref2.current.value;

                if (!emil || !pass) {
                        alert("Please fill the form");
                } else {

                        //
                        fetch(`https://hospital-backend-ibkd-one.vercel.app/user/login`, {
                                method: "post",
                                headers: {
                                        "Content-Type": "application/json",
                                },
                                body: JSON.stringify([userlogin, auth_data]),
                        })
                                .then(res => res.json())
                                .then(data => {
                                        console.log(data);
                                        console.log(data.Uid);

                                        document.cookie = data.Uid;
                                        alert(data.message);
                                })

                }



        }




        return (
                <>
                      

                        <main>
                                <section className="container">
                                        <div className="grid">

                                                <div className="card card-rotate">

                                                        <h1 className="Texts">{h1}</h1>
                                                        <h2 className="Texts">{h2}</h2>
                                                        <h3 className="Texts">{h3}</h3>




                                                </div>
                                                <div className="card">
                                                        <div className="LogIn">
                                                                <h1 id="admins">{logIn}</h1>
                                                                <form className='home-form'>
                                                                        <div className="FormContains">
                                                                                <label className='LABALS'>{email}:</label>
                                                                                <input type="email" name="email" required value={userlogin.email} ref={ref1} onChange={AdminUserLogin} className='LogInputs' />
                                                                        </div>

                                                                        <div className="FormContains">
                                                                                <label className='LABALS'>{pass}:</label>
                                                                                <input type="password" name="password" required value={userlogin.password} ref={ref2} onChange={AdminUserLogin} className='LogInputs' />
                                                                        </div>

                                                                        <div className="btnFormContain">
                                                                                <button type="submit" onClick={AdminloginPostData} id="btns">{logIn}</button>
                                                                        </div>
                                                                </form>
                                                                <div id="createAccount">
                                                                        <a>
                                                                                <Link to={"/createAcc"}>{createAcc}</Link>
                                                                        </a>
                                                                </div>
                                                        </div>
                                                </div>


                                        </div>

                                </section>

                        </main>

                        <footer>
                                <div className="container">
                                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                                </div>
                        </footer>
                </>
        )
}

export default Menu





{/*        <main>
                <section class="container">
                        <div class="grid">

                                <div class="card card-rotate">

                                        <h1 class="Texts">Welcome to Med Stack</h1>
                                        <h2 class="Texts">Share your Info</h2>
                                        <h3 class="Texts">Protect Info</h3>

               


                                </div>
                                <div class="card">




                                        <div class="LogIn">
                                                <h1 id="admins">Log In</h1>
                                                <form class='home-form'>
                                                        <div class="FormContains">
                                                                <label class='LABALS'>Email:</label>
                                                                <input type="email" name="email" required value="" class='LogInputs' />
                                                        </div>

                                                        <div class="FormContains">
                                                                <label class='LABALS'>Password:</label>
                                                                <input type="password" name="password" required value=""
                                                                        onChange={AdminUserLogin} class='LogInputs' />
                                                        </div>

                                                        <div class="btnFormContain">
                                                                <button type="submit" id="btns">Log In</button>
                                                        </div>
                                                </form>
                                                <div id="createAccount">
                                                        <a>
                                                                <Link>Create Account</Link>
                                                        </a>
                                                </div>
                                        </div>
                                </div>


                        </div>

                </section>
            
        </main>

        <footer>
                <div class="container">
                        <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
        </footer>
        */

}


{/*
          <main className='main'>
                                <div className="imgContainer">
                                        <h1 className="Texts">{h1}</h1>
                                        <h2 className="Texts">{h2}</h2>
                                        <h3 className="Texts">{h3}</h3>
                                </div>
                                <div className="LogIn">
                                        <h1 id="admins">{logIn}</h1>
                                        <form className='home-form'>
                                                <div className="FormContains">
                                                        <label className='LABALS'>{email}:</label>
                                                        <input type="email" name="email" required value={userlogin.email} ref={ref1} onChange={AdminUserLogin} className='LogInputs' />
                                                </div>

                                                <div className="FormContains">
                                                        <label className='LABALS'>{pass}:</label>
                                                        <input type="password" name="password" required value={userlogin.password} ref={ref2} onChange={AdminUserLogin} className='LogInputs' />
                                                </div>

                                                <div className="btnFormContain">
                                                        <button type="submit" onClick={AdminloginPostData} id="btns">{logIn}</button>
                                                </div>
                                        </form>
                                        <div id="createAccount">
                                                <a><Link to={"/createAcc"}>{createAcc}</Link></a>
                                        </div>
                                </div>
                        </main>*/}