//import { useState } from 'react';
import Redirect from './components/Redirect';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Appointment from './components/Appointment';
import Login from './components/Login';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import {  Routes, Route } from 'react-router-dom';
import RegistrationUser from './components/RegistrationUser';
import RegistrationBarber from './components/RegistrationBarber';
import Barbers from './components/Barbers';
import Manage from './components/Manage';
import Parse from 'parse/dist/parse.min.js'
import ShowRequest from './components/ShowRequest';
import UserBooking from './components/UserBooking';
import Payment from './components/Payment'
Parse.initialize("KNBuu3AyEFzeik2dozcluGkCoiqPgyLTANOdr5qr", "0tpxii7i6svNqYUr5xlMxYOQwmh7efUl9xEeCIJE");
Parse.serverURL = "https://parseapi.back4app.com/";



function App() {

  return (
    <>
   
    <div>
      <Header />
      <Routes>
          <Route path="/about"
            element={<About />}
          />
          <Route path="/"
          element={<MainBody />}
          />
          <Route path="/appointment"
          element={<Appointment />}
          />
          <Route path="/user"
          element={<Login title={"User"}  />}
          />
          <Route path="/barber"
          element={<Login title={"Barber"} />}
          />
          <Route path="/registration"
          element={<RegistrationUser title={"User"}/>}
          />
          <Route path="/registrationbarber"
          element={<RegistrationBarber title={"Barber"}/>}
          />
          <Route path="/manage"
          element={<Manage />}
          />
          <Route path="/bookings"
          element={<UserBooking />}
          />
          <Route path="/pay"
          element={<Payment />}
          />
          <Route path="/confirm"
          element={<ShowRequest />}
          />
         <Route path="/barbers"
          element={<Barbers />}
          />
          <Route path="/portfolio"
          element={<Portfolio />}
          />
          <Route path="/services"
          element={<Services />}
          />
          <Route path="/redirect"
          element={<Redirect />}
          />
        </Routes>
      <Footer />
    </div>
    
    </>
  );

}

export default App;
