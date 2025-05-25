import { createContext, useContext,useState,useEffect } from "react";
//import { doctors } from "../assets/assets_frontend/assets";
import axios from'axios'
export const AppContext=createContext(null)
const AppContextProvider=(props)=>{
    const [select, setselect] = useState("home");
    const [Speciality,SetSpeciality]=useState("All doctors");
    
    const [show,setShow]=useState(8);
    const [doctors,setdoctors]=useState([])
    const [token,setToken]=useState(false);
    const [login,setlogin]=useState(false);
    
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
        const loadUser=async()=>{
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
            }
        }
        fetchData()
        loadUser()
     },[])
    const value={
        doctors,setdoctors,
        select,setselect,Speciality,SetSpeciality,show,setShow,token,setToken,login,setlogin

    }


    return(
        <AppContext.Provider value={value}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppContextProvider