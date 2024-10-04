import React, { createContext, useContext, useState } from 'react';
import { Data } from './NavitemAdmin';
import { useNavigate } from 'react-router-dom'
const CounterContext = createContext(null);

export const useContect = () => {
        const Contect = useContext(CounterContext);
        return Contect;
};


const ContextProvider = (props) => {
        const navigate = useNavigate()

        const UserData = Data.map((curElem) => {
                return curElem;
        });


        const [user, setUser] = useState({ name:"", email:"", password:"" });

        let name, value;
        const handleInputs = (e) => {
                name = e.target.name;
                value = e.target.value;

                setUser({...user, [name]:value});

        }
        
     

        const AdminSignUpPostData = (e) => {

                e.preventDefault();

                // console.log("User",user);

                fetch(`https://hospital-backend-p4qh.vercel.app/user/signup`, {
                        method:"post",
                        headers:{
                                'Accept':'application/json',
                                'Content-Type':'application/json',
                        },
                        body:JSON.stringify(user),
                }).then(res => res.json())  //It must present unless we can't read body
                .then(data => {
                        alert(data.message);
                        console.log(data.message);
                });
                navigate('/home');
        }





        return (
        <CounterContext.Provider value={{UserData, user, setUser, handleInputs, AdminSignUpPostData}}>{props.children}</CounterContext.Provider>
  )
}

export default ContextProvider
