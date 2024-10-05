import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const LogOut = () => {

        const location = useLocation();
        const { from } = location.state;

        // const navigate = useNavigate();
        useEffect(() => {
                const logOut = async () => {
                        const logOutresponse = await fetch(`https://hospital-backend-ecru.vercel.app/user/logOut`, {
                                method: "delete",
                        });
                        const data = await logOutresponse.json();
                        console.log("data.path:", data.path);
                        console.log("from:",from);
                        
                        if(data){
                          console.log(data.message);
                        //   window.location.href = from;
                          window.location.href = '/';
                        }
                       

                }
                logOut();
              
        }, []);




        return (
                <>
                </>
        )
}

export default LogOut
