import React from 'react'
import { useContect } from './Context';

const Menu = () => {

        const contect = useContect();




        return (
                <>
                <main className='adminMain'>
                <div className="adminimgContainer">
                        <h1 class="text">Welcome to Med Stack</h1>
                        <h2 class="text">Share your Info</h2>
                        <h3 class="text">Protect Info</h3>
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
        </main>
                </>
        )
}

export default Menu
