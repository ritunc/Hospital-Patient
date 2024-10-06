import React, { createContext, useContext, useEffect, useState } from 'react';
import { Data } from '../NavItem';
import { useNavigate} from 'react-router-dom';

const CounterContext = createContext(null);

export const useNavLink = () => {   //custome Hook
        const Link = useContext(CounterContext);
        return Link;
}






const ContextProvider = (props) => {

        // const location = useLocation();
        // const { from } = location.state;

        const auth_datas = document.cookie;

        const navigate = useNavigate();
        useEffect( () => {
                const searchDataValidation = () => {

                                fetch(`https://hospital-backend-ecru.vercel.app/info/searchValid`, {
                                        method:"get",
                                        headers: { "Content-type": "application/json" }, body: JSON.stringify(auth_datas)
                                })
                                .then(response => response.json())
                                .then(data => {
                                        if(data) {
                                                console.log(data);
                                                navigate('/');
                                             
                                        }
                                })
                        
                }

                searchDataValidation();
        }, []);

        const UserData = Data.map((curElem) => {
                return curElem;
        });

        const [code, setCode] = useState("");

        const cleanInputfield = () => {
                setCode("");
        }

    
        return (
                <>
                        <CounterContext.Provider value={{ UserData, code, setCode, cleanInputfield}}>{props.children}</CounterContext.Provider>
                </>
        )
}

export default ContextProvider;
