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
 // const [selectedDate, setSelectedDate] = useState(null); // To store the date
  //const [selectedTime, setSelectedTime] = useState(null); // To store the time

  /*const handleDateTimeChange = (value) => {
    if (value) {
      setSelectedDate(value.format("YYYY-MM-DD")); // Extract date
      setSelectedTime(value.format("HH:mm")); // Extract time
    }
  };*/

  /*const theme = createTheme({
    palette: {
      primary: {
        main: '#5F6FFF', // Light blue ("bleu ciel")
      },
    },
  });*/
  const [selectedDate, setSelectedDate] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    if (newValue) {
      setDate(dayjs(newValue).format("YYYY-MM-DD"));
      setTime(dayjs(newValue).format("HH:mm"));
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
 useEffect(()=>{
    console.log(time)
    console.log(date)
   
  },[time])



  const{doctors,show,setShow}=useContext(AppContext);
  const param=useParams()
  const id=param.id;
  //const data=doctors.find(doc=>doc._id===id);
  const [data,setData]=useState({})
 


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
  
  
  
  //const dayss=[{day:'MON',date:10},{day:'TUE',date:11},{day:'WED',date:12},{day:'THU',date:13},{day:'FRI',date:14},{day:'SAT',date:15},{day:'SUN',date:16} ]
//const [daySelected,setDaySelected]=useState("MON");
//const [timeSelected,settimeSelected]=useState("9.00");
//const time=["8.00","8.30","9.00","9.30","10.00","10.30","11.00","11.30","12.00","14.00","14.30","15.00","15.30","16.00"]
  //////////////////////////////////
//const [days,setDays]=useState([]);
//const [counter,setcounter]=useState(7);
/*const getNext7Days=()=>{
  const today=new Date();
  const next7Days=[];

  for(let i=0;i<counter;i++){
    const nextDay=new Date(today);
    nextDay.setDate(today.getDate()+i);
   /* if(nextDay.getDay()===0){
      nextDay.setDate(nextDay.getDate()+1);
      
      
    }
    next7Days.push(nextDay);
  }
  return next7Days;
}
const getDayAbbreviation=(day)=>{
  return day.toLocaleDateString('en-GB',{
    weekday:'short',
  });
}

const getDateNumber=(day)=>{
  return day.getDate();
}
useEffect(()=>{
  setDays(getNext7Days());
  const intervalId=setInterval(()=>{
    setDays(getNext7Days());
  },24*60*60*1000);
  return ()=>clearInterval(intervalId)

},[])*/






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
