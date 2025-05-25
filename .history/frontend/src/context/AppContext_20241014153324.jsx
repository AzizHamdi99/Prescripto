import { createContext, useContext,useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";
export const AppContext=createContext(null)
const AppContextProvider=(props)=>{
    const [select, setselect] = useState("home");
    const [Speciality,SetSpeciality]=useState("All doctors");
    
    const [show,setShow]=useState(8);

    const value={
        doctors,
        select,setselect,Speciality,SetSpeciality,show,setShow

    }


    return(
        <AppContext.Provider value={value}>
            {props.children}

        </AppContext.Provider>
    )
}
export default AppContextProvider