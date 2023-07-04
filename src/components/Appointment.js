import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import InputLabel from '@mui/material/InputLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import moment from 'moment'
import tz from 'moment-timezone'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './background.css';
import Login from '../components/Login';
import { Checkbox } from '@mui/material';
// import Parse from "parse";
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function Appointment(){
	const location = useLocation();
	const barberid={barberid:location.state.barberid}
	const shopid={shopid:location.state.shopid}
	const barbername={barbername:location.state.barbername}
	let usrid;
	const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
        getdetails()
        }
    })

    const getdetails = async () => {
    const details = await fetch('http://localhost:5000/fetchusers',{
        method:"GET",
        headers:{'Content-Type':'application/json',
        'jwtData':localStorage.getItem('token')
        }
    })    
    const userdetails = await details.json();
    var userid = userdetails._id
	usrid=userid
    }
	const [bookingname,setbookingname]=useState("");
	const [bookingdate,setdate]=useState("");
	const [bookingtime,settime]=useState("");
	const [service,setservice]=useState([]);
	const [mobile,setmobile]=useState("");



	const changebookingname=(e)=>{
		setbookingname(e.target.value)
	}
	const changedate=(e)=>{
		setdate(e.target.value)
	}
	const timeChange=(e)=>{
		settime(e.target.value)
	}
	const changeservice=(e)=>{
		setservice(e.target.value)
	}
	const phoneChange=(e)=>{
		setmobile(e.target.value)
	}
  const handleSubmit = async (event) => {
		event.preventDefault();
		const date = moment(bookingdate).format('YYYY-MM-DD')
		const hair = {
			shopid:shopid.shopid,
			barberid:barberid.barberid,
			userid:usrid,
			barbername:barbername.barbername,
			bookingname:bookingname,
			bookingdate:date,
			bookingtime:bookingtime,
			contact:mobile,
			service: service,
			
		  }
		  const response = await fetch('http://localhost:5000/hairappointment',{
			method:"POST",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify(hair)
		})
			const result = await response.json()
			const time = tz.tz(result.BookingDate, "Asia/Kolkata")
			console.log(result.Service, time)
			navigate('/')
	// 	  //.catch((error) => {console.log(error)});
	// 	  if(result){
	// 	  let shop = new Parse.Object('NewShop');
	// 	  shop.set("username", result.shop.shopname);
	// 	  shop.set("email", result.shop.email);
	// 	  shop.set("password", result.pass);
	// 	  try{
	// 	  shop = await shop.save();

	// 	  if( shop !== null ){
	// 		//alert(`New object created with success! ObjectId: ${user.id}, ${user.get("emailVerified")}`);
			
	// 			//localStorage.setItem('token', result.jwtData);
	// 			navigate("/redirect", {username:result.shop.shopname});
	// 		}
	// 		else{
	// 			alert("Something wrrong");
	// 		}
	// 	}catch(err){
	// 		alert(`Error: ${err.message}`);
	// 	}
	// }

	  };
	  if(localStorage.getItem('token')){
    return(
        <>
	
        {/*slider Area Start */} 
        <div className="slider-area position-relative fix">
          <div className="slider-active">
              {/*Single Slider */}
              <div className="single-slider slider-height d-flex align-items-center">
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-8 col-lg-9 col-md-11 col-sm-10">
                              <div className="hero__caption">
                                  <span data-animation="fadeInUp" data-delay="0.2s">with patrick potter</span>
                                  <h1 data-animation="fadeInUp" data-delay="0.5s">Our Hair Style make your look elegance</h1>
                              </div>
                          </div>
                      </div>
                  </div>          
              </div>
          </div>
          {/*stroke Text */}
          <div className="stock-text">
              <h2>Get More confident</h2>
              <h2>Get More confident</h2>
          </div>

      </div>

    
		
		<ThemeProvider theme={theme}>
		<Grid Container component="main" sx={{  p:5 }}>
    <Typography component="h1" variant="h2" sx={{ textAlign : 'center'}}>
				Confirm Appoinment
			  </Typography>
		  <Grid item xs={12} sm={12} md={12} lg={12} sx={{borderRadius:20}} component={Paper} className="text-center" elevation={10} square >
			<Box
			  sx={{
				my: 8,
				mx: 4,
				p:10,
				// display: 'flex',
				// flexDirection: 'column',
				// alignItems: 'center',
			  }}
			>
			  {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			  </Avatar> */}
			  <Typography component="h1" variant="h5">
				Book An Appoinment
			  </Typography>
			  <Box component="form" noValidate  sx={{ mt: 1 }}>
			  <TextField
				  margin="normal"
				  required
				  sx={{mr:3}}
				  name="barbername"
				  disabled
				  value={barbername.barbername}
				  InputLabelProps={{ shrink: true }}
				  label="Barber Name"
				  type="text"
				  id="barbername"
				  autoComplete="barbername"
				/>
			  <TextField
				  margin="normal"
				  required
				  
				  id="shop"
				  label="Booking Name"
				  onChange={changebookingname}
				  name="shop"
				  type="text"
				  autoComplete="shop"
				  autoFocus
				  sx={{mr:3}}
				/>
				<TextField
				  margin="normal"
				  required
				  sx={{mr:3}}
				  id="address"
				  onChange={changedate}
				  value={bookingdate}
				  label="Booking Date"
				  InputLabelProps={{ shrink: true }}
				  name="address"
				  type="date"
				  autoComplete="address"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  sx={{mr:3}}
				  id="owner"
				  onChange={timeChange}
				  value={bookingtime}
				  label="Time"
				  InputLabelProps={{ shrink: true }}
				  name="owner"
				  type="time"
				  autoComplete="Name"
				  autoFocus
				/>

				<TextField
				  margin="normal"
				  required
				  sx={{mr:3}}
				  id="contact"
				  onChange={phoneChange}
				  label="Contact"
				  name="contact"
				  type="number"
				  autoComplete="contact"
				  autoFocus
				/>
				 <Grid item xs={12} sm={12} md={12} lg={12} component={Paper}>
				 <Typography component="h1" sx={{mt:2, p:2, borderRadius:30}} variant="h5">
				 Select Service
			  </Typography>
				<FormControlLabel control={<Checkbox defaultChecked value={"haircut"} onChange={changeservice} size="large" />} label="Hair-cut only" />
				<FormControlLabel control={<Checkbox onChange={changeservice} value={"beardcut"} size="large" />}label="Beard-cut only" />
      			<FormControlLabel control={<Checkbox onChange={changeservice} value={"hairandbeardcut"} size="large" />}label="Hair-cut + Beard-cut" />
      			<FormControlLabel control={<Checkbox onChange={changeservice} value={"massage"} size="large" />}label="Body Massage"/>
      			<FormControlLabel control={<Checkbox onChange={changeservice} value={"beardandfacial"} size="large" />}label="Beard + Facial"/>
				  </Grid>

				<Button
				  type="submit"
				  variant="contained"
				  onClick={handleSubmit}
				  sx={{ mt: 3, mb: 2 }}
				>
				  Book
				</Button>

				{/* <Copyright sx={{ mt: 5 }} /> */}
			  </Box>
			</Box>
		  </Grid>
		</Grid>
	  </ThemeProvider>
	  
   
      

    {/* <div className="container mt-5 mb-5 p-5">
      
    <form id="ft-form"  accept-charset="UTF-8">
        <fieldset className="ml-5">
          <legend className="text-center " style={{fontSize: `60px`}}>Book Appoinment</legend>
          
          <label>
            Name                     
            <input type="text" className="ml-5" name="name" required/>
          </label>
          <div className="two-cols">
            <label>
              Email address
              <input type="email" className="ml-5" name="email" required/>
            </label>
            <br/>
            <label>
              Phone number
              <input type="tel" className="ml-5" name="phone"/>
            </label>
          </div>
        </fieldset>
        <fieldset className="ml-5">
          <legend style={{fontSize: `20px`}}>Appointment request</legend>
          <div className="two-cols">
            <label>
              Date
              <input type="date" className="ml-5" name="appointment_date" required/>
            </label>
            <div className="inline">
              <label>
        
                <input type="radio" name="shift" value="Morning"/>
                Morning
              </label>
              <label>
        
                <input type="radio" name="shift" value="Afternoon"/>
                Afternoon
              </label>
            </div>
          </div>
          <p style={{fontSize: `20px`}}>Confirmation requested by</p>
          <div className="inline">
            <label>
              <input type="radio" name="confirmation" value="confirm_email" checked/>
              Email
            </label>
            <label>
              <input type="radio" name="confirmation" value="confirm_phone"/>
              Phone call
            </label>
          </div>
        </fieldset>
        <div className="btns ml-5">
          <input type="text" name="_gotcha" value="" style={{display:`none`}}/>
          <input type="submit" className="btn btn-primary" value="Confirm Appointment"/>
        </div>

      </form>
     
    </div> */}



    </>
    );
}else{

	return(
	<>
	<Login title={"User"} />
	</>
	)
	  
}
}
export default Appointment;