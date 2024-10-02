import React, { useState, useEffect } from 'react';
// import axios from "axios";
import { Data } from '../NavItem';
import NavCreate from './Nav_Edit';
import { useNavigate } from 'react-router-dom';
import './Edit.css';
import { Medicine } from './Medicine';
import { Desies } from './Desies';

const UserData = Data.map((curElem) => {
        return curElem;
})

export const collapse = 'collapse';

    
const Edit = () => {

        const navigate = useNavigate();
        useEffect( () => {

                
                const userCreateData = () => {

                                fetch("/info/editworkerValid", {
                                        method:"get",
                                })
                                .then(response => response.json())
                                .then(data => {
                                        if(data) {
                                                console.log(data);
                                                navigate('/home');
                                                // alert(data.message);
                                        }
                                })
                        
                }
                

                userCreateData();
        }, []);
        



        const [image, setImage] = useState({ image:"", });
        const [worker, setWorker] = useState({ Uname:"", age:"", dob:"", line_info:"", code:"", field:"", ression_info:"", family_info:"", Dates:"", hours:"",
        },{ Blood_Presure:"" , Blood_PresureParacetamol:"", Blood_PresureAvil:"", Blood_PresureCetrizine:"", Blood_PresureDecolic:"", 
                Blood_PresureAsthalin:"", Blood_PresureNeurobion_F:"", Blood_PresurePrimulate_N:"", Blood_PresureLasilactone:"", Blood_PresureTrenexamic:"",
                Blood_PresureINJ_Iron_Sucrose:"", Blood_PresureINJ_DICLOFENEC:"", Blood_PresureINJ_ACILOC:"", Blood_PresureINJ_ONDEM:"", 
                Blood_PresureINJ_BUSCOPEN:"", Blood_PresureINJ_PANTOPRAZOLE:"", Blood_PresureINJ_VIT_K:"", Blood_PresureBELLADONA_PLASTER:"",
        },{
                Heart_Rate:"",  Heart_RateParacetamol:"", Heeart_RatAvil:"",   Heeart_RatCetrizine:"",   Heeart_RatDecolic:"", 
                Heeart_RatAsthalin:"",   Heeart_RatNeurobion_F:"",   Heeart_RatPrimulate_N:"",   Heeart_RatLasilactone:"",   Heeart_RatTrenexamic:"",
                Heeart_RatINJ_Iron_Sucrose:"",   Heeart_RatINJ_DICLOFENEC:"",   Heeart_RatINJ_ACILOC:"",   Heeart_RatINJ_ONDEM:"", 
                Heeart_RatINJ_BUSCOPEN:"",   Heeart_RatINJ_PANTOPRAZOLE:"",   Heeart_RatINJ_VIT_K:"",   Heeart_RatBELLADONA_PLASTER:"",
        },{
                Diarrhea:"",  DiarrheaParacetamol:"", DiarrheaAvil:"",   DiarrheaCetrizine:"",   DiarrheaDecolic:"", 
                DiarrheaAsthalin:"",   DiarrheaNeurobion_F:"",   DiarrheaPrimulate_N:"",   DiarrheaLasilactone:"",   DiarrheaTrenexamic:"",
                DiarrheaINJ_Iron_Sucrose:"",   DiarrheaINJ_DICLOFENEC:"",   DiarrheaINJ_ACILOC:"",   DiarrheaINJ_ONDEM:"", 
                DiarrheaINJ_BUSCOPEN:"",   DiarrheaINJ_PANTOPRAZOLE:"",   DiarrheaINJ_VIT_K:"",   DiarrheaBELLADONA_PLASTER:"",
        },{
                Dysentery:"",  DysenteryParacetamol:"", DysenteryAvil:"",   DysenteryCetrizine:"",   DysenteryDecolic:"", 
                DysenteryAsthalin:"",   DysenteryNeurobion_F:"",   DysenteryPrimulate_N:"",   DysenteryLasilactone:"",   DysenteryTrenexamic:"",
                DysenteryINJ_Iron_Sucrose:"",   DysenteryINJ_DICLOFENEC:"",   DysenteryINJ_ACILOC:"",   DysenteryINJ_ONDEM:"", 
                DysenteryINJ_BUSCOPEN:"",   DysenteryINJ_PANTOPRAZOLE:"",   DysenteryINJ_VIT_K:"",   DysenteryBELLADONA_PLASTER:"",
        },{
                Glucose_Level:"",   Glucose_LevelParacetamol:"", Glucose_LevelAvil:"",   Glucose_LevelCetrizine:"",   Glucose_LevelDecolic:"", 
                Glucose_LevelAsthalin:"",   Glucose_LevelNeurobion_F:"",   Glucose_LevelPrimulate_N:"",   Glucose_LevelLasilactone:"",   Glucose_LevelTrenexamic:"",
                Glucose_LevelINJ_Iron_Sucrose:"",   Glucose_LevelINJ_DICLOFENEC:"",   Glucose_LevelINJ_ACILOC:"",   Glucose_LevelINJ_ONDEM:"", 
                Glucose_LevelINJ_BUSCOPEN:"",   Glucose_LevelINJ_PANTOPRAZOLE:"",   Glucose_LevelINJ_VIT_K:"",   Glucose_LevelBELLADONA_PLASTER:"",
        },{
                Suger_Level:"",  Suger_LevelParacetamol:"", Suger_LevelAvil:"",   Suger_LevelCetrizine:"",   Suger_LevelDecolic:"", 
                Suger_LevelAsthalin:"",   Suger_LevelNeurobion_F:"",   Suger_LevelPrimulate_N:"",   Suger_LevelLasilactone:"",   Suger_LevelTrenexamic:"",
                Suger_LevelINJ_Iron_Sucrose:"",   Suger_LevelINJ_DICLOFENEC:"",   Suger_LevelINJ_ACILOC:"",   Suger_LevelINJ_ONDEM:"", 
                Suger_LevelINJ_BUSCOPEN:"",   Suger_LevelINJ_PANTOPRAZOLE:"",   Suger_LevelINJ_VIT_K:"",   Suger_LevelBELLADONA_PLASTER:"",
        },{
                Fever:"",   FeverParacetamol:"", FeverAvil:"",   FeverCetrizine:"",   FeverDecolic:"", 
                FeverAsthalin:"",   FeverNeurobion_F:"",   FeverPrimulate_N:"",   FeverLasilactone:"",   FeverTrenexamic:"",
                FeverINJ_Iron_Sucrose:"",   FeverINJ_DICLOFENEC:"",   FeverINJ_ACILOC:"",   FeverINJ_ONDEM:"", 
                FeverINJ_BUSCOPEN:"",   FeverINJ_PANTOPRAZOLE:"",   FeverINJ_VIT_K:"",   FeverBELLADONA_PLASTER:"",
        },{
                Coughing_or_sneezing:"",  Coughing_or_sneezingParacetamol:"", Coughing_or_sneezingAvil:"",   Coughing_or_sneezingCetrizine:"",   Coughing_or_sneezingDecolic:"", 
                Coughing_or_sneezingAsthalin:"",   Coughing_or_sneezingNeurobion_F:"",   Coughing_or_sneezingPrimulate_N:"",   Coughing_or_sneezingLasilactone:"",   Coughing_or_sneezingTrenexamic:"",
                Coughing_or_sneezingINJ_Iron_Sucrose:"",   Coughing_or_sneezingINJ_DICLOFENEC:"",   Coughing_or_sneezingINJ_ACILOC:"",   Coughing_or_sneezingINJ_ONDEM:"", 
                Coughing_or_sneezingINJ_BUSCOPEN:"",   Coughing_or_sneezingINJ_PANTOPRAZOLE:"",   Coughing_or_sneezingINJ_VIT_K:"",   Coughing_or_sneezingBELLADONA_PLASTER:"",
        },{
                Runny_or_Stuffy_NoseAsthalin:"",   Runny_or_Stuffy_NoseNeurobion_F:"",   Runny_or_Stuffy_NosePrimulate_N:"",   Runny_or_Stuffy_NoseLasilactone:"",   Runny_or_Stuffy_NoseTrenexamic:"",
                Runny_or_Stuffy_Nose:"",   Runny_or_Stuffy_NoseParacetamol:"", Runny_or_Stuffy_NoseAvil:"",   Runny_or_Stuffy_NoseCetrizine:"",   Runny_or_Stuffy_NoseDecolic:"", 
                Runny_or_Stuffy_NoseINJ_Iron_Sucrose:"",   Runny_or_Stuffy_NoseINJ_DICLOFENEC:"",   Runny_or_Stuffy_NoseINJ_ACILOC:"",   Runny_or_Stuffy_NoseINJ_ONDEM:"", 
                Runny_or_Stuffy_NoseINJ_BUSCOPEN:"",   Runny_or_Stuffy_NoseINJ_PANTOPRAZOLE:"",   Runny_or_Stuffy_NoseINJ_VIT_K:"",   Runny_or_Stuffy_NoseBELLADONA_PLASTER:"",
        },{
                Body_aches:"",    Body_achesParacetamol:"", Body_achesAvil:"",   Body_achesCetrizine:"",   Body_achesDecolic:"", 
                Body_achesAsthalin:"",   Body_achesNeurobion_F:"",   Body_achesPrimulate_N:"",   Body_achesLasilactone:"",   Body_achesTrenexamic:"",
                Body_achesINJ_Iron_Sucrose:"",   Body_achesINJ_DICLOFENEC:"",   Body_achesINJ_ACILOC:"",   Body_achesINJ_ONDEM:"", 
                Body_achesINJ_BUSCOPEN:"",   Body_achesINJ_PANTOPRAZOLE:"",   Body_achesINJ_VIT_K:"",   Body_achesBELLADONA_PLASTER:"",
        },{
                Vomiting:"",     VomitingParacetamol:"", VomitingAvil:"",   VomitingCetrizine:"",   VomitingDecolic:"", 
                VomitingAsthalin:"",   VomitingNeurobion_F:"",   VomitingPrimulate_N:"",   VomitingLasilactone:"",   VomitingTrenexamic:"",
                VomitingINJ_Iron_Sucrose:"",   VomitingINJ_DICLOFENEC:"",   VomitingINJ_ACILOC:"",   VomitingINJ_ONDEM:"", 
                VomitingINJ_BUSCOPEN:"",   VomitingINJ_PANTOPRAZOLE:"",   VomitingINJ_VIT_K:"",   VomitingBELLADONA_PLASTER:"",
        },{
                Common_cold:"",   Common_coldParacetamol:"", Common_coldAvil:"",   Common_coldCetrizine:"",   Common_coldDecolic:"", 
                Common_coldAsthalin:"",   Common_coldNeurobion_F:"",   Common_coldPrimulate_N:"",   Common_coldLasilactone:"",   Common_coldTrenexamic:"",
                Common_coldINJ_Iron_Sucrose:"",   Common_coldINJ_DICLOFENEC:"",   Common_coldINJ_ACILOC:"",   Common_coldINJ_ONDEM:"", 
                Common_coldINJ_BUSCOPEN:"",   Common_coldINJ_PANTOPRAZOLE:"",   Common_coldINJ_VIT_K:"",   Common_coldBELLADONA_PLASTER:"",
        },{
                Injury:"",   InjuryParacetamol:"", InjuryAvil:"",   InjuryCetrizine:"",   InjuryDecolic:"", 
                InjuryAsthalin:"",   InjuryNeurobion_F:"",   InjuryPrimulate_N:"",   InjuryLasilactone:"",   InjuryTrenexamic:"",
                InjuryINJ_Iron_Sucrose:"",   InjuryINJ_DICLOFENEC:"",   InjuryINJ_ACILOC:"",   InjuryINJ_ONDEM:"", 
                InjuryINJ_BUSCOPEN:"",   InjuryINJ_PANTOPRAZOLE:"",   InjuryINJ_VIT_K:"",   InjuryBELLADONA_PLASTER:"",
        },); 
        
        

        let name, value;
        const handletextInput = (e) => {
                name = e.target.name;
                value = e.target.value;

                setWorker({...worker, [name]:value});
          
        }
        
        let  value2;
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

                       await fetch("/worker/editWorkerImage", { method:"POST",  body:formData })
                        .then(res => res.json())
                        .then((data) => console.log(data));

                       await fetch("/worker/editWorker", { method:"POST", headers:{ "Content-Type":"application/json"}, body:JSON.stringify(worker) })
                        .then(res => res.json())
                        .then((data) => {alert(data.message); navigate('/search')});
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
                        <section className='sectionCreate'>
                                <NavCreate NavItem={UserData} />

                                <main className='mainmenu'>
                                        <form id='Create-formm'>
                                        {/* action="/userCreate" method="post" enctype="multipart/form-data" */}
                                                <div className="form-Container">
                                                        <label>Name:</label>
                                                        <input className="data-input" type="text" name="Uname" value={worker.Uname}  onChange={handletextInput}/>
                                                        <label>Age:</label>
                                                        <input className="data-input" type="text"  name="age" value={worker.age} onChange={handletextInput}/>
                                                        <label>DOB:</label>
                                                        <input className="data-input" type="text"  name="dob" value={worker.dob} onChange={handletextInput}/>
                                                </div>
                                                <div className="form-Container">
                                                        <label>Line Info:</label>
                                                        <input className="data-input" type="text"  name="line_info" value={worker.line_info} onChange={handletextInput}/>
                                                        <label>Code:</label>
                                                        <input className="data-input" type="text"  name="code" value={worker.code} onChange={handletextInput}/>
                                                        <label>Field:</label>
                                                        <input className="data-input" type="text"  name="field" value={worker.field} onChange={handletextInput}/>

                                                </div>

                                                <div className="uniformContain">
                                                        <label>Ression Info:</label>
                                                        <input className="data-input" type="text"  name="ression_info" value={worker.ression_info} onChange={handletextInput}/>
                                                        <label>Image:</label>
                                                        <input className="data-input" type="file" id="img" accept="image/*"  name="image" value={image.image} onChange={handlefileInput}/>
                                                        {/* name="image" value={image.image} */}
                                                </div>
                                                <div className="uniform">
                                                        <label>Family Info:</label>
                                                        <textarea id="textarea" name="family_info" value={worker.family_info} onChange={handletextInput}></textarea>
                                                </div>
                                                <div className="table_containers">

                                        <table style={{ borderCollapse: collapse }}>
                                        <tbody>
                                        <tr>
                                                <td><input type='text' name="Dates" value={worker.Dates} onChange={handletextInput} className='table-data'/></td>
                                                <td><input type='text' name="hours" value={worker.hours } onChange={handletextInput} className='table-data'/></td>
                                                {
                                                        Medicine.map((curElem, index) => {
                                                                return (
                                                                        <>
                                                                                <th key={index}>{curElem.medicine1}</th>
                                                                        </>
                                                                )
                                                        })
                                                }
                                         </tr>
                                        {
                                            Desies.map((curElem, index) => {
                                            
                                                let {desies2} = curElem;
                                                
                                                
                                                  return (
                                                         <>
                                                          <tr key={index}>
                                                                <th>{ curElem.desies1 }</th>
                                                                <td key={index}><input type="text" name={ desies2 } key={index} value={worker.desies2}  onChange={handletextInput}  className="table-data"   /></td>
                                                                {
                                                                        Medicine.map( (curElem, index) => {

                                                                                let combine = desies2+curElem.medicine2;
                                                                                // console.log(combine);
                                                                                
                                                                                return ( <>
                                                                                     <td ><input type="text" name={combine} key={index} value={worker.combine}   onChange={handletextInput}    className="table-data"   /></td>
                                                                                </>)
                                                                        })
                                                                }
                                                         </tr>
                                                        </>
                                                        )
                                                   })
                                        }
                                                                       
                                        </tbody>
                                        </table>
                                                </div>
                                                <div className="buttonformContains">
                                                        <button type="submit" onClick={UserInfo} id="button">Submit</button>
                                                </div>

                                        </form>
                                </main>
                        </section >
                </>
        )
}

export default Edit
