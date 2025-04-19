import React from 'react'
import { useContect } from './Context';

const Menu = () => {

        const contect = useContect();




        return (
                <>
                        <main>
                                <section className="container">
                                        <div className="grid">

                                                <div className="card card-rotate">

                                                        <h1 className="Texts">Welcome to Med Stack</h1>
                                                        <h2 className="Texts">Share your Info</h2>
                                                        <h3 className="Texts">Protect Info</h3>




                                                </div>
                                                <div className="card">
                                                        <div className="LogIn">
                                                                <h1 id="admins">Admin</h1>
                                                                <form className='home-form'>
                                                                        <div className="FormContains">
                                                                                <label className='LABALS'>Name:</label>
                                                                                {/* <input type="email" name="email" required value={userlogin.email} ref={ref1} onChange={AdminUserLogin} className='LogInputs' /> */}
                                                                                <input type="text" name="name" required value={contect.user.name} onChange={contect.handleInputs} className='LogInputs' />

                                                                        </div>

                                                                        <div className="FormContains">
                                                                                <label className='LABALS'>Email:</label>
                                                                                {/* <input type="email" name="email" required value={userlogin.email} ref={ref1} onChange={AdminUserLogin} className='LogInputs' /> */}
                                                                                <input type="email" name="email" required value={contect.user.email} onChange={contect.handleInputs} className='LogInputs' />
                                                                        </div>

                                                                        <div className="FormContains">
                                                                                <label className='LABALS'>Password:</label>
                                                                                {/* <input type="password" name="password" required value={userlogin.password} ref={ref2} onChange={AdminUserLogin} className='LogInputs' /> */}
                                                                                <input type="password" name="password" required value={contect.user.password} onChange={contect.handleInputs} className='LogInputs' />
                                                                        </div>

                                                                        <div className="btnFormContain">
                                                                                {/* <button type="submit" onClick={AdminloginPostData} id="btns">{logIn}</button> */}
                                                                                <button type="submit" onClick={contect.AdminSignUpPostData} id="btns">Submit</button>
                                                                        </div>
                                                                </form>

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


{/* <main className='adminMain'>
<div className="adminimgContainer">
        <h1 className="text">Welcome to Med Stack</h1>
        <h2 className="text">Share your Info</h2>
        <h3 className="text">Protect Info</h3>
</div>
<div className="logIn">
        <h1 id="admin">Admin</h1>
        <form method='POST'>
                <div className="formContain">
                        <label>Name:</label>
                        <input type="text" name="name" required 
                        value={contect.user.name}
                        onChange={contect.handleInputs} className='adminInput'/>
                </div>

                <div className="formContain">
                        <label>Email:</label>
                        <input type="email" name="email" required 
                        value={contect.user.email}
                        onChange={contect.handleInputs} className='adminInput'/>
                </div>

                <div className="formContain">
                        <label>Password:</label>
                        <input type="password" name="password" required 
                        value={contect.user.password}
                        onChange={contect.handleInputs} className='adminInput'/>
                </div>

                <div className="btnformContain">
                        <button type="submit" onClick={contect.AdminSignUpPostData} id="btn">Submit</button>
                </div>
        </form>
</div>
</main> */}