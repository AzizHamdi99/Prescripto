import React, { useContext, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import DatePicker from "react-datepicker";
import axios from 'axios'
import { CssBaseline } from "@mui/material";
import dayjs from "dayjs"

import { Box, Button, Typography } from "@mui/material";




import { createTheme, ThemeProvider } from '@mui/material/styles';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

function Appointment() {
 
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
//const[user,setUser]=useState({})
  const {user}=useContext(AppContext)

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    if (newValue) {
      setDate(dayjs(newValue).format("YYYY-MM-DD"));
      setTime(dayjs(newValue).format("HH:mm:ss"));
    }
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5F6FFF", // Sky blue for buttons
      },
      secondary: {
        main: "#f5f5f5", // Light gray for background
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });
 



  const{doctors,show,setShow}=useContext(AppContext);
  const param=useParams()
  const id=param.id;
  //const data=doctors.find(doc=>doc._id===id);
  const [data,setData]=useState({})
  const info={
    user_id:localStorage.getItem("id"),
    doctor_id:id,
    date:date,
    time:time,
    payed:false

  }
  useEffect(()=>{
  
    console.log(info)
   
    
 
 
},[time])

const bookAppointment =async()=>{

  if (!date || !time) {
   // setMessage("Please select both date and time.");
    return;
  }
  const info={
    user_id:localStorage.getItem("id"),
    doctor_id:id,
    date:date,
    time:time,
    payed:false

  }
  try{
    const response =await axios.post('http://localhost:3000/api/appointment/bookAppointment',info)
    console.log(response.data)
    setDate("")
    setTime("")
  }catch(eroor){
    console.log( eroor)
    res.json({success:false,message:'eroor ading apointment'})
  }



}
 


  useEffect(()=>{
   const getSingleDocotor=async()=>{
    try{
      const response=await axios.get(`http://localhost:3000/api/doctors/${id}`);
      setData(response.data)
      
    }catch(error){
      console.error('errror fetching data doctor',error)
    }
   }
   getSingleDocotor()

  },[data])
  const related=data.speciality;
  
  
  
  







  return <div className="mx-32">
            <div className="grid grid-cols-[1fr_3fr] my-16 gap-7 ">
              <img src={`http://localhost:3000/${data.image}`}className="bg-[#5F6FFF] h-full rounded-xl"  alt="" />
              <div className="border-2 p-10 rounded-lg ">
                <div className="flex gap-3">
                <h1 className="text-[35px] font-medium text-[#1F2937]">{data.name}</h1>
                <img src={assets.verified_icon} alt="" />

                </div>
                <div className="flex gap-1 text-[#4B5563] text-[20px] font-normal mb-2">
                  <p>{data.education} -</p>
                  <p>{data.speciality}</p>
                  <p className="border-[1px] border-[#4B5563] px-3 rounded-3xl text-[16px] text-center items-center">{data.experience}</p>
                </div>
                <div className="flex gap-2">
                <p className="text-[18px] font-medium">About</p>
                <img src={assets.info_icon} alt="infoIcon" />
                </div>
                <p className="text-[18px] font-normal mt-3 text-[#4B5563]">{data.about}</p>
                <div className="mt-4">
                  <p className="text-[#4B5563] font-normal text-[22px]">Appointment fee: <span className="font-semibold text-[#1F2937]">{data.fees}$</span></p>
                
                </div>
              
                
              </div>

             
            </div>
        
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        //minHeight="100vh"
        //bgcolor="#f0f8ff" // Alice blue background
      >
        <Box
          p={4}
          bgcolor="white"
          borderRadius={4}
          boxShadow="0px 4px 16px rgba(0, 0, 0, 0.2)"
         // maxWidth={400}
        >
          <Typography variant="h6" gutterBottom align="center">
            Select Date & Time
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDateTimePicker
              value={selectedDate}
              onChange={handleDateChange}
              orientation="landscape"
              sx={{
                "& .MuiTypography-root": {
                  //color: "#5F6FFF",
                  fontWeight: "bold",
                },
                "& .MuiPickersDay-root": {
                  borderRadius: "50%",
                },
              }}
            />
          </LocalizationProvider>
          
        </Box>
      </Box>
    </ThemeProvider>
    <div className="mt-8 text-center">
    <Button
  variant="contained"
  color="primary"
  onClick={bookAppointment}
  sx={{
    fontSize: '18px',      // Makes the text larger
    padding: '12px 24px',  // Adds more padding (top-bottom, left-right)
    borderRadius: '8px',   // Slightly rounded corners (optional)
    minWidth: '200px',     // Minimum width to ensure a bigger button
    textTransform: 'none', // Prevents the button text from being uppercased
    boxShadow: 3,          // Adds a shadow effect (optional)
  }}
>
  Book Appointment
</Button>
        
      </div>
            <div className=" my-32 ">
              <h1 className="text-[40px] text-center text-[#1F2937] font-medium">Related Doctors</h1>
              <p className="text-[18px] text-center text-[#4B5563] font-normal ">Simply browse through our extensive list of trusted doctors.</p>
              <div className="grid grid-cols-5 gap-5 mt-10">
                {doctors.map((item)=>{
                  if(related==item.speciality &&item.id!=id){
                    return(
                      <div>
                       <DoctorCard id={item.id} name={item.name} image={item.image} speciality={item.speciality}/>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
            <Footer/>
            
            
        
    



  </div>;
}
//}

export default Appointment;
