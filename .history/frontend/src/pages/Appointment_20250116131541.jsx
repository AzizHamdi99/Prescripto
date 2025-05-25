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
      setTime(dayjs(newValue).format("HH:mm:ss"));
    }
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#87CEEB", // Sky blue for buttons
      },
      secondary: {
        main: "#f5f5f5", // Light gray for background
      },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  });
 /* useEffect(()=>{
    console.log(selectedDate)
    console.log(selectedTime)
  },[selectedTime])*/



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
           {/* <div className="ml-[330px]">
                <h1 className="text-[25px] text-[#565656] font-normal">Booking slots</h1>
                <div className="flex gap-6 mt-5 text-center">
                  {days.map((day,index)=>{
                    return(
                      <div onClick={()=>setDaySelected(day)} className={daySelected===day? "text-white bg-[#5F6FFF] border-2 p-4 py-5 rounded-[43px] cursor-pointer transition-all duration-300":"text-[#4B5563] border-2 p-4 py-5 rounded-[43px] cursor-pointer transition-all duration-300"}>
                        <h1 className="text-[20px]">{getDayAbbreviation(day)}</h1>
                        <h1 className="text-[24px]">{getDateNumber(day)}</h1>
                      </div>
                    )
                  })}
                </div>
                <div className="flex items-center gap-4">
                <div className="grid grid-cols-8 gap-6 mt-7 text-center">
                  {time.slice(0,show).map((item,index)=>{
                    return(
                      <div onClick={()=>settimeSelected(item)} className={timeSelected===item? "text-white bg-[#5F6FFF] border-2 p-2 px-5 rounded-[43px] cursor-pointer transition-all duration-300":"text-[#4B5563] border-2 p-2 px-5 rounded-[43px] cursor-pointer transition-all duration-300"}>
                        <h1 className="text-[16px]">{item} am</h1>
                        
                      </div>
                    )
                  })}
                </div>
                <img className="border-2 p-2 rounded-[50%] cursor-pointer"  src={show==8? assets.dropdown_icon:assets.dropup_icon} alt="" onClick={()=>{
                  show==8? setShow(time.length):setShow(8);
                  }} />

                </div>
                <button className="text-[20px] text-white  font-normal px-[80px] py-5 bg-[#5F6FFF] rounded-[43px] mt-10">Book an appointment</button>
                

            </div>
           {/*<div >
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Click to select a date"
        className="bg-cyan-300"
      />
      {selectedDate && (
        <p>
          Selected Date: {selectedDate.toDateString()}
        </p>
      )}
    </div>*/}
     {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker orientation="landscape" />
    </LocalizationProvider>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //height: '100vh', // Full height of the viewport
            //backgroundColor: '#f5f5f5', // Light gray background
          }}
        >
          <StaticDateTimePicker
            orientation="landscape"
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: 'white',
            }}
          />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //minHeight: "100vh",
          //backgroundColor: "#f0f8ff", // Light blue background
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            orientation="landscape"
            value={selectedDate ? dayjs(`${selectedDate}T${selectedTime}`) : null}
            onChange={handleDateTimeChange}
            renderInput={(params) => <input {...params} />}
          />
        </LocalizationProvider>
      </Box>
   
    </ThemeProvider>*/}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="#f0f8ff" // Alice blue background
      >
        <Box
          p={4}
          bgcolor="white"
          borderRadius={4}
          boxShadow="0px 4px 16px rgba(0, 0, 0, 0.2)"
          maxWidth={400}
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
                  color: "#87CEEB",
                  fontWeight: "bold",
                },
                "& .MuiPickersDay-root": {
                  borderRadius: "50%",
                },
              }}
            />
          </LocalizationProvider>
          <Box
            mt={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: "20px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              OK
            </Button>
          </Box>
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
