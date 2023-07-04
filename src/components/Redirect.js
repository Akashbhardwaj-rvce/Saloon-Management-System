import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import Link  from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright() {
    return (
        <>
      <Link sx={{mt:2}} color="inherit" href="/">
          Please Login here
        </Link>
      </>
    );
  }
  const theme = createTheme();

function Redirect(props){
    
    return(
		<ThemeProvider theme={theme}>

		  <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
			<Box
			  sx={{
				my: 15,
				mx: 15,
                p:20,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			  }}
			>
			  <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }} src="">
				
			  </Avatar>
			  <Typography component="h1" variant="h5" align="center">
			     Hii... {props.username}<br/>Please verify your E-mail.
                 
			  </Typography>
              <Copyright sx={{ mt: 2 }} />
			</Box>
		  </Grid>
		
	  </ThemeProvider>
    )
}
export default Redirect;