import { createContext, useContext,useState,useEffect } from "react";
//import { doctors } from "../assets/assets_frontend/assets";
import axios from'axios'
export const AppContext=createContext(null)
const AppContextProvider=(props)=>{
    const [select, setselect] = useState("home");
    const [Speciality,SetSpeciality]=useState("All doctors");
    
    const [show,setShow]=useState(8);
    const [doctors,setdoctors]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response= await axios.get('http://localhost:3000/api/doctors/getAllDoctors')
                console.log(response.data)
                setdoctors(response.data);

            }catch(error){
                console.error('eroorr fetching daata',error)
            }
            
            
        }   
        fetchData()
     },[])
    const value={
        doctors,setdoctors,
        select,setselect,Speciality,SetSpeciality,show,setShow

    }


    return(
        <AppContext.Provider value={value}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppContextProvider