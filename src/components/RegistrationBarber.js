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
import { useState } from 'react';
import './background.css';
import Parse from "parse";
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
function RegistrationBarber(props){
	let navigate = useNavigate();
	const [name,setname]=useState("");
	const [address,setaddress]=useState("");
	const [ownername,setownername]=useState("");
	const [password,setpassword]=useState("");
	const [email,setemail]=useState("");
	const [mobile,setmobile]=useState("");


	const changeaddress=(e)=>{
		setaddress(e.target.value)
	}
	const changeownername=(e)=>{
		setownername(e.target.value)
	}
	const emailChange=(e)=>{
		setemail(e.target.value)
	}
	const passwordChange=(e)=>{
		setpassword(e.target.value)
	}
	const changeshopname=(e)=>{
		setname(e.target.value)
	}
	const phoneChange=(e)=>{
		setmobile(e.target.value)
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		const shop = {
			shopname:name,
			shopaddress:address,
			ownername:ownername,
			shopcontact:mobile,
			email: email,
			password: password
			
		  }
		  const response = await fetch('http://localhost:5000/newshop',{
			method:"POST",
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify(shop)
		})
			const result = await response.json()
			console.log(result.pass)
		  //.catch((error) => {console.log(error)});
		  if(result){
		  let shop = new Parse.Object('NewShop');
		  shop.set("username", result.shop.shopname);
		  shop.set("email", result.shop.email);
		  shop.set("password", result.pass);
		  try{
		  shop = await shop.save();

		  if( shop !== null ){
			//alert(`New object created with success! ObjectId: ${user.id}, ${user.get("emailVerified")}`);
			
				//localStorage.setItem('token', result.jwtData);
				navigate("/redirect", {username:result.shop.shopname});
			}
			else{
				alert("Something wrrong");
			}
		}catch(err){
			alert(`Error: ${err.message}`);
		}
	}

	  };


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
				  id="shop"
				  label="Shop Name"
				  onChange={changeshopname}
				  name="shop"
				  type="text"
				  autoComplete="shop"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="address"
				  onChange={changeaddress}
				  label="Shop Address"
				  name="address"
				  type="text"
				  autoComplete="address"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="owner"
				  onChange={changeownername}
				  label="Shop Owner Name"
				  name="owner"
				  type="text"
				  autoComplete="Name"
				  autoFocus
				/>

				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="contact"
				  onChange={phoneChange}
				  label="Shop Contact"
				  name="contact"
				  type="number"
				  autoComplete="contact"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  id="email"
				  onChange={emailChange}
				  label="Email"
				  name="email"
				  type="email"
				  autoComplete="email"
				  autoFocus
				/>
				<TextField
				  margin="normal"
				  required
				  fullWidth
				  name="password"
				  onChange={passwordChange}
				  label="Password"
				  type="password"
				  id="password"
				  autoComplete="current-password"
				/>
				<FormControlLabel
				  control={<Checkbox value="remember" color="primary" />}
				  label="Remember me"
				/>
				<Button
				  type="submit"
				  fullWidth
				  variant="contained"
				  onClick={handleSubmit}
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
export default RegistrationBarber;