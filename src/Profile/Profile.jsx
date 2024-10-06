import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { useParams, useNavigate, Link } from 'react-router-dom';
import NavProfile from './Nav_Profile';
import './Profile.css';
import { Data } from '../NavItem';
import { collapse } from '../Create/Create';




const UserData = Data.map((curElem) => {
        return curElem;
})

const Profile = () => {

        // const navigate = useNavigate();
        // const param = useParams();
        // const code = param.code;
        // console.log("code:", code);
        

        // const workerDataFetch = async () => {
            
        //         console.log("enter");
                
        //         try{
        //                 const res =  await fetch(`/worker/workerData/${code}`, { method: "get", headers: { "Accept": "application/json", } })
                        
        //                 const data = await res.json();
        //                 console.log("message:", data);

        //                 if (data.message === "undefined") {
        //                         alert("Date is not present"); 
        //                         // exports.stringify("Date is not present")
        //                         // navigate("/search");
        //                         window.location.href = '/search';
        //                 }  else if (data.message === "unothorised") {
        //                         console.log("nav:", data);
        //                         navigate("/home");
        //                 } else{
        //                         return data;
        //                 }
                       

                       

        //         } catch(error){
        //                 throw new Error("Somthing went wrong!!!");
        //         }
               

              
        // }
        // const {data, isLoading, isFetching, isError, error} = useQuery( ["worker-code", code], workerDataFetch,
        // {
        //         // cacheTime:1000,
        //         // cacheTime:5000,
        //         staleTime:30000,
        //         refetchOnMount:true, 
        //         refetchOnWindowFocus:true,  //update change and reflect autometically

        //         // refetchInterval:2000,
        //         // refetchIntervalInBackground:true,

        //         // enabled:false,
        // })

        // let medData, image;
        // if(data){
        //         console.log("medData:", data);
        //         medData = data.medReport;
        //         console.log("workers:", data.medReport);
        //         image = `/images/${data.name}`
        // }
        
        // const [medreport, setMedreport] = useState({
        //         code: "", Dates: "", hours: "", b_p: "", h_p: "", Temp: "", Suger_Level: "", Complain: "", Paracetamol: "", Avil: "", Cetrizine: "",
        //         Decolic: "", Asthalin: "", Neurobion_F: "", Primulate_N: "", Lasilactone: "", Trenexamic: "", Remark: "",
        // });

        // const [state, setState] = useState(false);






        //Without using useQuery Hook---

        const param = useParams();
        const code = param.code;
        console.log("code:", code);
        const navigate = useNavigate();

      
        const [worker, setWorker] = useState("");
        const [medreport, setMedreport] = useState({
                code: "", Dates: "", hours: "", b_p: "", h_p: "", Temp: "", Suger_Level: "", Complain: "", Paracetamol: "", Avil: "", Cetrizine: "",
                Decolic: "", Asthalin: "", Neurobion_F: "", Primulate_N: "", Lasilactone: "", Trenexamic: "", Remark: "",
        });

        const [state, setState] = useState(false);
        

        console.log("workers:", worker.medReport);
        let medData;
        if(worker){
                console.log("medData", worker);
                medData = worker.medReport;
        }


        useEffect(() => {
                if (code !== 'undefined') {

                        //if request come from here->https://hospital-backend-ecru.vercel.app/profile/code

                        console.log("parameter if part:", code);
                
                        const auth_datas = document.cookie
                                const workerDataFetch = async () => {
                                        try{
                                                const res =  await fetch(`https://hospital-backend-ecru.vercel.app/worker/workerData/${code}`, { method: "get", headers: { "Content-type": "application/json" }, body:JSON.stringy(auth_datas) })
                                                const data = await res.json();
                                                console.log("message:", data);
                 
                                                if (data.message === "undefined") {
                                                        alert("Date is not present");
                                                        navigate("/search");
                                                }
                 
                                                if (data.message === "unothorised") {
                                                        console.log("nav:", data);
                                                        navigate("/");
                                                }
                                                setWorker(data);
                                        } catch(error){
                                                throw new Error("Somthing went wrong!!!");
                                        }
                                       
                                        // fetch(`/worker/workerData/${code}`, { method: "get", headers: { "Accept": "application/json", } })
                                        //  .then(res => res.json())
                                        //  .then(data => {
                                        //         console.log("message:", data);
                 
                                        //         if (data.message === "undefined") {
                                        //                 navigate("/search");
                                        //                 alert("Date is not present");
                                        //         }
                 
                                        //         if (data.message === "unothorised") {
                                        //                 console.log("nav:", data);
                                        //                 navigate("/home");
                                        //         }
                                        //         setWorker(data);
                                                
                                        //  });
                                }
                                workerDataFetch();

                       
                      
                              
                } else {
                        //if request come from here->https://hospital-backend-ecru.vercel.app/profile
                        console.log("else-part");
                      
                        const searchDataValidation = () => {
                                const auth_datas = document.cookie;

                                fetch(`https://hospital-backend-ecru.vercel.app/info/handleWorkerValid`, {
                                        method: "get",
                                        headers: { "Content-type": "application/json" }, body:JSON.stringy(auth_datas)
                                })
                                        .then(response => response.json())
                                        .then(data => {
                                                if (data) {
                                                        console.log(data);
                                                        navigate('/');

                                                }
                                        })

                        }

                        searchDataValidation();

                }

        }, []);






        const deleteEditData = () => {
                fetch(`https://hospital-backend-ecru.vercel.app/medDelete/DeleteWorker/${worker.hours}`, { method: "get" })
                        .then(res => res.json())
                        .then(data => console.log(data));
        }



        const Todate = () => {
                //date---
                const time = new Date();
                const date = time.getDate();
                const month = time.getMonth() + 1;
                const year = time.getFullYear();
                const Dates = date + "-" + month + "-" + year;
                //time---
                const Houre = time.getHours();
                const minute = time.getMinutes();
                const sec = time.getSeconds();
                const hours = Houre + ":" + minute + ":" + sec;
                medreport.Dates = Dates;
                medreport.hours = hours;
                medreport.code = code;

                return { Dates, hours };
        }

        let name, value;
        const selectOption = (e) => {
                name = e.target.value;
                value = e.target.value;
                console.log("name:", name, "value:", value);

                setMedreport({ ...medreport, [name]: value });
        }


        let name2, value2;
        const handleReading = (e) => {
                name2 = e.target.name;
                value2 = e.target.value;

                setMedreport({ ...medreport, [name2]: value2 });
        }



        const workerMedReport = async () => {
                setState(false);        
              const res = await fetch(`https://hospital-backend-ecru.vercel.app/medReport/workerCreateMedreport`, { method: "post", headers: { "Content-type": "application/json" }, body: JSON.stringify(medreport) })
              const data = await res.json();
              alert(data.message);
                


                const res2 = await fetch(`https://hospital-backend-ecru.vercel.app/worker/workerData/${code}`, { method: "get", headers: { "Accept": "application/json", } })
                const data2 = await res2.json();
                if(data2){
                     setWorker(data2);    
                     setMedreport({
                        code: "", Dates: "", hours: "", b_p: "", h_p: "", Pulse: "", Temp: "", Suger_Level: "", Complain: "", Paracetamol: "", Avil: "", Cetrizine: "",
                        Decolic: "", Asthalin: "", Neurobion_F: "", Primulate_N: "", Lasilactone: "", Trenexamic: "", Remark: "",
                     });    
                }


        }

        const newEntry_cancle = () => {
                setState(false);
        }

        /* Search Log */


        const data1 = '8px';
        const data2 = '300px';

        return (
                <>
                         

                        {/* {isLoading && <p>Loading......</p>} */}
                        {/* {isLoading && isFetching && <p>Loading......</p>} */}
                      
                        {/* {isError && <p>{error.message}</p>} */}

                       {/* {
                         data && */}
                        
                          <section className="sectionProfile">
                                <NavProfile NavItem={UserData} />
                                <main className="profilemain">
                                      
                                                
                                                <div className="profileform">
                                                <div className="profile_image">
                                                        <img src={`https://hospital-backend-ecru.vercel.app/images/${worker.name}`} id="profileimg" alt="imageUser" />
                                                        {/* <img src={image} id="profileimg" alt="imageUser" /> */}

                                                </div>
                                                <div className="profile_info_1">
                                                        <p className="profile_p" id="box-1">Name: <span>{worker.Uname}</span></p>
                                                        <p className="profile_p" id="box-2">Age: <span>{worker.age}</span></p>
                                                        <p className="profile_p" id="box-3">Line Info: <span>{worker.line_info}</span></p>
                                                        <p className="profile_p" id="box-4">DOB: <span>{worker.dob}</span></p>
                                                        <p className="profile_p" id="box-4">Aadhaar no.: <span>{worker.aadhaar_no}</span></p>
                                                        <p className="profile_p" id="box-4">Ayushman no.: <span>{worker.ayushman_no}</span></p>
                                                        <p className="profile_p" id="box-5">Ression Info: <span>{worker.ression_info}</span></p>
                                                        <p className="profile_p" id="box-6">Code: <span>{worker.code}</span></p>
                                                        <p className="profile_p" id="box-7">Family Info: <span>{worker.family_info}</span></p>
                                                        <p className="profile_p" id="box-8">Field: <span>{worker.field}</span></p>
                                                </div>
                                            </div> 
                                      
                         


                                        <hr style={{ marginInline: data1, width: data2 }} />


                                        <div className="form-2">
                                                <div className="profile_info_3">

                                                        <button className="profile-Search-button" onClick={() => setState(true)}>New Entry</button>
                                                        <button className="profile-Search-button space" onClick={deleteEditData}>Delete Worker</button> 
                                                        <input type="text" placeholder=" Search with date" className="profile-Search"/>
                                                         
                                                                        
                                                                       {
                                                                                state ? <>
                                                                                        <table style={{ borderCollapse: collapse }} className="profile_table">
                                                                                        <tr>
                                                                                                <th className="profile-table-head medthead" rowSpan="2">Dates</th>
                                                                                                <th className="profile-table-head medthead" rowSpan="2">Time</th>
                                                                                                <th className="profile-table-head medthead" colSpan="5">Reding</th>
                                                                                                <th className="profile-table-head medthead data-3" rowSpan="2">Complain</th>
                                                                                                <th className="profile-table-head medthead" rowSpan="2">Advice</th>
                                                                                                <th className="profile-table-head medthead" rowSpan="2">Remark</th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <th className='profile-table-head medthead'>B.P</th>
                                                                                                <th className='profile-table-head medthead'>Pulse</th>
                                                                                                <th className='profile-table-head medthead'>H.R</th>
                                                                                                <th className='profile-table-head medthead'>Temp</th>
                                                                                                <th className='profile-table-head medthead'>Suger Level</th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                                <td className='medtdata data-2'>{Todate().Dates}</td>
                                                                                                <td className='medtdata data-2'>{Todate().hours}</td>
                                                                                                <td className='medtdata'><input type="text" value={medreport.b_p} name='b_p' onChange={handleReading} className="worker_Reading profile-table-head" /></td>
                                                                                                <td className='medtdata'><input type="text" value={medreport.Pulse} name='Pulse' onChange={handleReading} className="worker_Reading profile-table-head" /></td>
                                                                                                <td className='medtdata'><input type="text" value={medreport.h_p} name='h_p' onChange={handleReading} className="worker_Reading profile-table-head" /></td>
                                                                                                <td className='medtdata'><input type="text" value={medreport.Temp} name='Temp' onChange={handleReading} className="worker_Reading profile-table-head" /></td>
                                                                                                <td className='medtdata'><input type="text" value={medreport.Suger_Level} name='Suger_Level' onChange={handleReading} className="worker_Reading profile-table-head" /></td>
                                                                                                <td ><textarea rows="5" cols="15" value={medreport.Complain} name='Complain' onChange={handleReading} id="worker_TextArea"></textarea></td>
                                                                                                <td>
                                                                                                        
                                                                                                        <select className="worker_Reading_select" onChange={selectOption}>
                                                                                                                <option value="Paracetamol" selected="Paracetamol">Paracetamol</option>
                                                                                                                <option value="Avil" selected="Avil">Avil</option>
                                                                                                                <option value="Cetrizine" selected="Cetrizine">Cetrizine</option>
                                                                                                                <option value="Decolic" selected="Decolic">Decolic</option>
                                                                                                                <option value="Asthalin" selected="Asthalin">Asthalin</option>
                                                                                                                <option value="Neurobion_F" selected="Neurobion_F">Neurobion F</option>
                                                                                                                <option value="Primulate_N" selected="Primulate_N">Primulate N</option>
                                                                                                                <option value="Lasilactone" selected="Lasilactone">Lasilactone</option>
                                                                                                                <option value="Trenexamic" selected="Trenexamic">Trenexamic</option>
                                                                                                        </select>
                                                                                                        
                                                                                                        {/* <Select options={options}/> */}

                                                                                                </td>
                                                                                                <td><textarea id="workerTextArea" value={medreport.Remark} name='Remark' onChange={handleReading}></textarea></td>
                                                                                        </tr>
                                                                                        </table>
                                                                                        {/* <div className='med_space'></div> */}
                                                                                        <div className='new_entry_and_cancel'>
                                                                                           <button className="profile-newEntry-button" onClick={workerMedReport}>Submit</button>
                                                                                           <button className="profile-newEntry-button" onClick={newEntry_cancle}>Cancel</button>
                                                                                        </div>    

                                                                                </> : null





                                                                        }
                                                               
                                                                        {
                                                                                // data ? medData.map((curElem, index) => {
                                                                                worker ? medData.map((curElem, index) => {
                                                                                        return (
                                                                                                <>
                                                                                                    <table style={{ borderCollapse: collapse }} className="profile_table" key={index}>
                                                                                                        <tr>
                                                                                                                <th className="profile-table-head medthead" rowSpan="2">Dates</th>
                                                                                                                <th className="profile-table-head medthead" rowSpan="2">Time</th>
                                                                                                                <th className="profile-table-head medthead" colSpan="5">Reding</th>
                                                                                                                <th className="profile-table-head medthead data-3" rowSpan="2">Complain</th>
                                                                                                                <th className="profile-table-head medthead" rowSpan="2">Advice</th>
                                                                                                                <th className="profile-table-head medthead" rowSpan="2">Remark</th>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                                <th className='profile-table-head medthead'>B.P</th>
                                                                                                                <th className='profile-table-head medthead'>Pulse</th>
                                                                                                                <th className='profile-table-head medthead'>H.R</th>
                                                                                                                <th className='profile-table-head medthead'>Temp</th>
                                                                                                                <th className='profile-table-head medthead'>Suger Level</th>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                                <td className='medtdata data-2'>{curElem.Dates}</td>
                                                                                                                <td className='medtdata data-2'>{curElem.hours}</td>
                                                                                                                <td className='medtdata'>{curElem.b_p}</td>
                                                                                                                <td className='medtdata'>{curElem.Pulse}</td>
                                                                                                                <td className='medtdata'>{curElem.h_p}</td>
                                                                                                                <td className='medtdata'>{curElem.Temp}</td>
                                                                                                                <td className='medtdata'>{curElem.Suger_Level}</td>
                                                                                                                <td><textarea rows="5" cols="15"  name='Complain' id="worker_TextArea">{curElem.Complain}</textarea></td>
                                                                                                                <td>
                                                                                                                    
                                     
                                                                                                                  <textarea id="workerTextArea" className='med-medicine' value={curElem.Paracetamol +" "+ curElem.Avil +" "+ curElem.Cetrizine +" "+ curElem.Decolic +" "+ curElem.Asthalin +" "+ curElem.Neurobion_F +" "+ curElem.Primulate_N +" "+ curElem.Lasilactone +" "+ curElem.Trenexamic}  onChange={handleReading}></textarea>

                                                                                                                </td>
                                                                                                                <td><textarea id="workerTextArea" value={curElem.Remark} name='Remark' onChange={handleReading}></textarea></td>
                                                                                                        </tr>
                                                                                                        </table>
                                                                                                        <div className='med_space'></div>
                                                                                                </>
                                                                                        )
                                                                                }):null
                                                                        }




                                                 </div>
                                        </div>
                                </main>
                           </section>
                        
                        {/* } */}
                
                
                        
                </>
        )
}

export default Profile


