import React, { useState, useEffect } from 'react';
// import axios from "axios";
import { Data } from '../NavItem';
import NavCreate from './Nav_Create';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import { Medicine } from './Medicine';
import { Desies } from './Desies';

const UserData = Data.map((curElem) => {
        return curElem;
})

export const collapse = 'collapse';


const Create = () => {

        const navigate = useNavigate();
        useEffect(() => {
                const auth_datas = document.cookie

                const userCreateData = () => {

                        fetch(`https://hospital-backend-ecru.vercel.app/info/userCreater`, {
                                method: "post",
                                headers:{
                                        "Content-Type":"application/json",
                                },
                                body:JSON.stringify([auth_datas])
                        })
                                .then(response => response.json())
                                .then(data => {
                                        if (data) {
                                                console.log(data);
                                                navigate('/');
                                                // alert(data.message);
                                        }
                                })

                }


                userCreateData();
        }, []);




        const [image, setImage] = useState({ image: "", });
        const [worker, setWorker] = useState({
                Uname: "", age: "", dob: "", line_info: "", code: "", field: "", aadhaar_no: "", ression_info: "", family_info: "", ayushman_no: "",
        });



        let name, value;
        const handletextInput = (e) => {
                name = e.target.name;
                value = e.target.value;

                setWorker({ ...worker, [name]: value });

        }

        let value2;
        const handlefileInput = (e) => {
                // name1 = e.target.name;
                // value2 = e.target.value;
                // name1 = e.target.files[0].name;
                value2 = e.target.files[0];


                setImage(value2);

                // setImage(e.target.files[0]);
        }

        const UserInfo = async (e) => {
                e.preventDefault();


                const formData = new FormData();
                formData.append('file', image);
                // formData.append("workerss", worker);
                // formData.append("file", image);

                //http://localhost:5010
                //http://localhost:5010
                //http://localhost:5010

                const res = await fetch(`https://hospital-backend-ecru.vercel.app/worker/userCreateImage`, { method: "POST", body: formData })
                const data = await res.json();
                console.log(data);

                // .then(res => res.json())
                // .then((data) => console.log(data));

                const res2 = await fetch(`https://hospital-backend-ecru.vercel.app/worker/userCreate`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(worker) })
                const data2 = await res2.json()
                //        console.log(data2);
                alert(data2.message);

                // .then(res => res.json())
                // .then((data) => alert(data.message));
                // headers:{
                //         // "Content-Type":"application/json",
                //         // 'Content-Type': 'multipart/form-data',
                //         // "Custom-Header": "value",
                //         // 'Content-Type': 'application/x-www-form-urlencoded'
                //         // 'content-type': 'file.type'
                // },
                // body:JSON.stringify(worker),


                // body:JSON.stringify(worker)
                // });
                // const data1 = response1.json();
                // const data2 = response2.json();
                // console.log(data);



                // try{

                //         const response = await axios.post("http://localhost:5010/userCreate", formData);
                //         console.log(response);

                // } catch (ex) {
                //         console.log("ex",ex);

                // }



        }
        return (
                <>
                        <section className='SectionCreate'>
                                <NavCreate NavItem={UserData} />

                                <main className='mainMenu'>
                                        <form id='Create-Formm'>
                                                {/* action="/userCreate" method="post" enctype="multipart/form-data" */}
                                                {/* <div className="Form-Container"> */}
                                                        <div className='firstrow'>

                                                                <label className='Label'>Name:</label>
                                                                <input className="first-Data-Input" type="text" name="Uname" value={worker.Uname} onChange={handletextInput} />

                                                        </div>
                                                        <div className='firstrow'>

                                                                <label className='Label'>Age:</label>
                                                                <input className="first-Data-Input" type="text" name="age" value={worker.age} onChange={handletextInput} />

                                                        </div>
                                                        <div className='firstrow'>

                                                                <label className='Label'>DOB:</label>
                                                                <input className="first-Data-Input" type="text" name="dob" value={worker.dob} onChange={handletextInput} />

                                                        </div>
                                                {/* </div> */}
                                                {/* <div className="Form-Container"> */}
                                                        <div className='secondrow'>
                                                                <label className='Label'>Line Info:</label>
                                                                <input className="second-Data-Input" type="text" name="line_info" value={worker.line_info} onChange={handletextInput} />
                                                        </div>

                                                        <div className='secondrow'>
                                                                <label className='Label'>Code:</label>
                                                                <input className="second-Data-Input" type="text" name="code" value={worker.code} onChange={handletextInput} />
                                                        </div>

                                                        <div className='secondrow'>

                                                                <label className='Label'>Field:</label>
                                                                <input className="second-Data-Input" type="text" name="field" value={worker.field} onChange={handletextInput} />
                                                        </div>

                                                {/* </div> */}

                                                {/* <div className="UniformContain"> */}

                                                        <div className='thirdrow'>
                                                                <label className='Label'>Aadhaar No.:</label>
                                                                <input className="thirdrow_data-input" type="text" name="aadhaar_no" value={worker.addhar_no} onChange={handletextInput} />
                                                        </div>
                                                        <div className='thirdrow'>

                                                                <label className='Label'>Ression Info:</label>
                                                                <input className="thirdrow_data-input" type="text" name="ression_info" value={worker.ression_info} onChange={handletextInput} />
                                                        </div>
                                                        <div className='thirdrow'>

                                                                <label className='Label'>Image:</label>
                                                                <input className="thirdrow_data-input" type="file" id="img" accept="image/*" name="image" value={image.image} onChange={handlefileInput} />
                                                   </div>

                                                {/* </div> */}

                                                {/* <div className="Uniform"> */}

                                                        <div className='forthrow'>
                                                                <label id='familyInfo' className='Label'>Family Info:</label>
                                                                <textarea id="text-area" name="family_info" value={worker.family_info} onChange={handletextInput}></textarea>
                                                        </div>

                                                        <div className='forthrow'>
                                                                <label className='Label'>Ayushman No.:</label>
                                                                <input className="thirdrow_data-input" type="text" name="ression_info" value={worker.ayushman_no} onChange={handletextInput} />
                                                        </div>

                                                {/* </div> */}



                                        </form>
                                                <div className="ButtonformContains">
                                                        <button type="submit" onClick={UserInfo} id="Button">Submit</button>
                                                </div>
                                </main>
                        </section >
                </>
        )
}

export default Create
