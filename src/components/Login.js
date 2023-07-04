import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link  from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as Ink} from 'react-router-dom';
//import axios from 'axios';
import { useState } from 'react';
import './background.css';
import {useNavigate} from 'react-router-dom';
import Parse from "parse";


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
function Login(props,{setToken}){
	const navigate = useNavigate();
	const [email,setemail]=useState("");
	const [password,setpassword]=useState("");
	const emailChange=(e)=>{
		setemail(e.target.value)
	}
	const passwordChange=(e)=>{
		setpassword(e.target.value)
	}
/*	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
		  email: data.get('email'),
		  password: data.get('password'),
		});
	  };*/



	  var Loginuser;
	  if(props.title === 'Barber'){
		Loginuser = true;
	  }	

	  if(props.title ==='Barber'){
		var barbersaveForm = async (e) => {
			e.preventDefault();
	
			const data = {
			  email: email,
			  password: password
			}
			
			const result = await fetch('http://localhost:5000/barberlogin',{
				method:"POST",
				headers:{'Content-Type':'application/json'},
				body: JSON.stringify(data)
			})
			const usertoken = await result.json()
			if(usertoken.success === true){

					try{
			// 	const parseobj = new Parse.Object('NewShop')
			// const loggeduser = await parseobj.logIn(email,password);
			localStorage.setItem("barbertoken",usertoken.jwtData);
				//alert("invalid credentials",loggeduser.get('username'));
				navigate("/")
				
				}catch(error){
					alert("Please verify your email account.");	
				}

			}else{
				alert(usertoken.success,usertoken.msg)
	
			}

			
		}
	  }else{

	  var saveForm = async (e) => {
		e.preventDefault();

		const data = {
		  email: email,
		  password: password
		}

		// const salt = await bcrypt.genSalt(10);
		// const secpass=await bcrypt.hash(password,salt);

		// const pass=await bcrypt.compare(password,secpass);
		// axios.get('http://localhost:5000/fetchusers', data)
		//   .then((res) => { 
		// 	alert('Save successful')
		// 	// setToken(res.data)
		// 	// 
		// })
		//   .catch((error) => {console.log(error)});

		
		const result = await fetch('http://localhost:5000/login',{
			method:"POST",
			headers:{'Content-Type':'application/json'},
			body: JSON.stringify(data)
		})
		const usertoken = await result.json()
		if(usertoken.success === true){
			//const userpass = JSON.parse(`${usertoken.secpass}`);
			
			// const userpwd = sessionStorage.getItem("pwd");
			// alert(userpwd)
			//if(usertoken.secpass !== null){
				try{
		const loggeduser = await Parse.User.logIn(email,password);
		localStorage.setItem("token",usertoken.jwtData);
			//alert("invalid credentials",loggeduser.get('username'));
			navigate("/")
			
			}catch(error){
				alert("Please verify your email account.");	
			}
	// 	return await query
	// 	
	// 	.then(async (queriedUsers)=>{
	// 		console.log(queriedUsers);
    //   return true;
	// 	})
	
	// alert(JSON.stringify(objid));
	// const abc = await objid.find();
	// 		alert(abc);
		
		//window.localStorage.setItem("token" , usertoken.jwtData)
		//navigate("/")
		}else{
			alert(usertoken.success,usertoken.msg)
		//navigate("/user")
		}
		//;
		//alert(window.localStorage.getItem("token"));
			//navigate("/")
		
	}
}
		// if(res){
		// 	await fetch('http://localhost:5000/fetchusers',{
		// 	method:"GET",
		// 	headers:{'Content-Type':'application/json',
		// 	'jwtData':''
		// 	}
		// 	}).then(async (response) =>{
		// 	const userdetails = await response.json()
		// 	console.log(userdetails)
		// 	}).catch((error) => {console.log(error)});
		
		// }

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
				{props.title} Sign in
			  </Typography>
			  <Box component="form"    sx={{ mt: 1 }}>
				
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="email"
				  label="Email Address"
				  name="email"
				  autoComplete="email"
				  autoFocus
				  onChange={emailChange}
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  name="password"
				  label="Password"
				  type="password"
				  id="password"
				  autoComplete="current-password"
				  onChange={passwordChange} 
				/>
				<FormControlLabel
				  control={<Checkbox value="remember" color="primary" />}
				  label="Remember me"
				/>
				{props.title === 'Barber'?
								<Button
								type="submit"
								fullWidth
								onClick={barbersaveForm}
								variant="contained"
								sx={{ mt: 3, mb: 2 }}
							  >
								Sign In
							  </Button>
				:				<Button
				type="submit"
				fullWidth
				onClick={saveForm}
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			  >
				Sign In
			  </Button>}

				
				<Grid container>
				  <Grid item xs>
					<Link href="#" variant="body2">
					  Forgot password?
					</Link>
				  </Grid>
				  <Grid item>
					{Loginuser ? (
					<Link  variant="body2"><Ink to="/registrationbarber" ><p style={{fontSize:`10px`}}>Don't have an account? Sign Up</p></Ink></Link>
					) : (
					<Link  variant="body2"><Ink to="/registration" ><p style={{fontSize:`10px`}}>Don't have an account? Sign Up</p></Ink></Link>
					)}
					</Grid>
				</Grid>
				<Copyright sx={{ mt: 5 }} />
			  </Box>
			</Box>
		  </Grid>
		</Grid>
	  </ThemeProvider>
    );
}
export default Login;








  
