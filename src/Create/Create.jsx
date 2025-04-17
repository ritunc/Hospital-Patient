import React, { useState, useEffect, useRef, useCallback } from 'react';
// import axios from "axios";
import { Data } from '../NavItem';
import NavCreate from './Nav_Create';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import Web_cam from 'react-webcam';


import { Medicine } from './Medicine';
import { Desies } from './Desies';
// import { noop } from 'react-query/types/core/utils';

const URL = process.env.URL || window.location.origin;

const UserData = Data.map((curElem) => {
        return curElem;
});

export const collapse = 'collapse';


const Create = () => {

        const navigate = useNavigate();
        useEffect(() => {
                const auth_datas = document.cookie;

                const userCreateData = () => {

                        fetch(`https://hospital-backend-ibkd-one.vercel.app/info/userCreater`, {

                                method: "post",

                                headers: {

                                        "Content-Type": "application/json",

                                },

                                body: JSON.stringify([auth_datas])
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
        const [Up_Images, setUp_Images] = useState(false);
        const webcamRef = useRef(null);
        const [capture_Image, setCapture_Image] = useState(null);



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

                function generateOTP(length = 6) {
                        let otp = '';
                        const characters = '0123456789'; // Numbers only

                        for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                otp += characters[randomIndex];
                        }

                        return otp;
                }



                const formData = new FormData();
                const imageBlob = dataURLtoBlob(capture_Image);
                formData.append('file', imageBlob, `captured-image${generateOTP()}.jpg`);
                // formData.append('file', image);


                //http://localhost:5010
                //http://localhost:5010
                //http://localhost:5010

                const res = await fetch(`https://hospital-backend-ibkd-one.vercel.app/worker/userCreateImage`, { method: "POST", body: formData })
                const data = await res.json();
                console.log(data);

                // .then(res => res.json())
                // .then((data) => console.log(data));

                const res2 = await fetch(`https://hospital-backend-ibkd-one.vercel.app/worker/userCreate`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(worker) })
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


        const Take_Picture = (e) => {
                e.preventDefault();
                setUp_Images(true);
                console.log("Open");

        }

        //Not use function
        const videoConstraints = {
                // width: 1280,
                // height: 1820,
                facingMode: 'environment',
        };


        const capture = (e) => {
                e.preventDefault()

                const imageSrc = webcamRef.current.getScreenshot();
                setCapture_Image(imageSrc);
                // console.log(imageSrc);
                setUp_Images(false);
        }


        // Function to convert base64 to Blob
        const dataURLtoBlob = (dataURL) => {
                const byteString = atob(dataURL.split(',')[1]);
                const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
                const ab = new ArrayBuffer(byteString.length);
                const ia = new Uint8Array(ab);

                for (let i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                }

                return new Blob([ab], { type: mimeString });
        };



        return (
                <>
                        <NavCreate NavItem={UserData} />
                        <section className='section_Create'>

                                <main className='main_Menu'>
                                        <form id='Create-Formm'>



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





                                                <div className='thirdrow'>
                                                        <label className='Label'>Aadhaar No.:</label>
                                                        <input className="thirdrow_data-input" type="text" name="aadhaar_no" value={worker.aadhaar_no} onChange={handletextInput} />
                                                </div>
                                                <div className='thirdrow'>

                                                        <label className='Label'>Ression Info:</label>
                                                        <input className="thirdrow_data-input" type="text" name="ression_info" value={worker.ression_info} onChange={handletextInput} />
                                                </div>

                                                <div className='thirdrow'>

                                                        <label className='Label'>Ayushman No.:</label>
                                                        <input className="thirdrow_data-input" type="text" name="ayushman_no" value={worker.ayushman_no} onChange={handletextInput} />
                                                </div>





                                                <div className='forthrow'>
                                                        <label id='familyInfo' className='Label'>Family Info:</label>
                                                        <textarea id="text-area" name="family_info" value={worker.family_info} onChange={handletextInput}></textarea>
                                                </div>


                                                <div className='forthrow'>

                                                        <label className='Label' style={{ position: 'relative', bottom: '5px' }}>Image:</label>
                                                        <img className="thirdrow_data-input" src={capture_Image} id="img" alt="Captured" style={{}} />

                                                </div>
                                                <div className='forthrow'>

                                                        <label className='label' id="label_capture">Capture :</label>
                                                        <button id="Capture_Button" onClick={Take_Picture}>Camera On</button>
                                                        {
                                                                Up_Images ? <>


                                                                        <Web_cam id="Web_Cam" style={{}}
                                                                                audio={false}
                                                                                height="300px"
                                                                                ref={webcamRef}
                                                                                screenshotFormat="image/jpeg"
                                                                                width="400px"
                                                                                videoConstraints={videoConstraints}
                                                                        />
                                                                        <button id="button_capture" style={{}} onClick={capture}>Capture photo</button>

                                                                </> : null

                                                        }

                                                </div>



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
