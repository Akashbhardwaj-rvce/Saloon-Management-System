import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import axios from 'axios';
import { useState } from 'react';
import './background.css';
import Parse from "parse";

//import Redirect from './Redirect';
import { useNavigate } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Saloon
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();
function RegistrationUser(props){
	
	const [email,setemail]=useState("");
	const [password,setpassword]=useState("");
	const [name,setname]=useState("");
	const [mobile,setmobile]=useState("");
	const emailChange=(e)=>{
		setemail(e.target.value)
	}
	const passwordChange=(e)=>{
		setpassword(e.target.value)
	}
	const nameChange=(e)=>{
		setname(e.target.value)
	}
	const phoneChange=(e)=>{
		setmobile(e.target.value)
	}
/*	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
		  email: data.get('email'),
		  password: data.get('password'),
		});

	  };*/
	  let navigate = useNavigate();
	  //const [credentials, setcredentials]=useState({name:"",email:"", password:"",mobile:""})
	  const saveForm = async (e) => {
		e.preventDefault();
		const data = {
		  email: email,
		  password: password,
		  name:name,
		  mobile:mobile,
		}
		
		//  axios.post('http://localhost:5000/newuser', data)
		//   .then(() => { 
		// 	alert('Save successful');

		// 	})
		 const response = await fetch('http://localhost:5000/newuser',{
			method:"POST",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify(data)
		})
			const result = await response.json()
			console.log(result.pass)
		  //.catch((error) => {console.log(error)});
		  if(result){
		  let user = new Parse.User();
		  user.set("username", result.user.name);
		  user.set("email", result.user.email);
		  user.set("password", result.pass);
		  try{
		  user = await user.save();

		  if( user !== null ){
			//alert(`New object created with success! ObjectId: ${user.id}, ${user.get("emailVerified")}`);
			
				//localStorage.setItem('token', result.jwtData);
				navigate("/redirect", {username:result.user.name});
			}
			else{
				alert("Something wrrong");
			}
		}catch(err){
			alert(`Error: ${err.message}`);
		}
	}
	
		// if(result){
		// 	localStorage.setItem('token', result.jwtData);
		// 	navigate("/redirect");
		// }else{
		// 	alert("Something wrrong");
		// }

	  }

    return(
		<ThemeProvider theme={theme}>
		<Grid container component="main" sx={{ height: '100vh', marginTop:'150px' }}>
		  <CssBaseline />
		  <Grid
			item
			xs={false}
			sm={4}
			md={7}
			sx={{
			  backgroundImage: 'url(https://source.unsplash.com/random)',
			  backgroundRepeat: 'no-repeat',
			  backgroundColor: (t) =>
				t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
			  backgroundSize: 'cover',
			  backgroundPosition: 'center',
			}}
		  />
		  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<Box
			  sx={{
				my: 8,
				mx: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			  }}
			>
			  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			  </Avatar>
			  <Typography component="h1" variant="h5">
				{props.title} Sign Up
			  </Typography>
			  <Box component="form" noValidate  sx={{ mt: 1 }}>
			  <TextField
				  margin="normal"
				  required
				  fullWidth
				  id="name"
				  label="Name"
				  name="name"
				  type="text"
				  onChange={nameChange}
				  autoComplete="name"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="phone"
				  label="Mobile"
				  name="phone"
				  type="number"
				  onChange={phoneChange}
				  autoComplete="phone"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="email"
				  label="Email Address"
				  name="email"
				  type="email"
				  onChange={emailChange}
				  autoComplete="email"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  name="password"
				  label="Password"
				  type="password"
				  id="password"
				  onChange={passwordChange} 
				  autoComplete="current-password"
				/>
				<FormControlLabel
				  control={<Checkbox value="remember" color="primary" />}
				  label="Remember me"
				/>
				<Button
				  type="submit"
				  fullWidth
				  onClick={saveForm}
				  variant="contained"
				  sx={{ mt: 3, mb: 2 }}
				>
				  Register
				</Button>

				<Copyright sx={{ mt: 5 }} />
			  </Box>
			</Box>
		  </Grid>
		</Grid>
	  </ThemeProvider>
    );
}
export default RegistrationUser;









  
