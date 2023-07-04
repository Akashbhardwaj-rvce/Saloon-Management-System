import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
function Header(){
    const navigate = useNavigate();
    var [user,setuser]=useState([]);
    var [barber,setbarber]=useState([]);
    
    const logouthandle =()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('barbertoken');
        localStorage.clear();
        navigate("/")
    }


    
    const getdetails = async () => {
        let details = await fetch('http://localhost:5000/fetchusers',{
            method:"GET",
            headers:{'Content-Type':'application/json',
            'jwtData':localStorage.getItem('token')
            }
        })    
        const userdetails = await details.json();
        setuser(userdetails)
        //  localStorage.setItem('username',userdetails.name)
        }
    
  
    
        const getbarberdetails = async () => {
            let details = await fetch('http://localhost:5000/fetchbarber',{
                method:"GET",
                headers:{'Content-Type':'application/json',
                'jwtData':localStorage.getItem('barbertoken')
                }
            })    
            const userdetails = await details.json();
            setbarber(userdetails)
            //  localStorage.setItem('username',userdetails.ownername)
            }
        
            useEffect(()=>{
                if(localStorage.getItem('token'))
                {
                getdetails()
                
                }
                if(localStorage.getItem('barbertoken'))
                {
                getbarberdetails()
               
                }
            })

return(
   
   <header>
    {/* Header Start */}
    <div className="header-area header-transparent ">
        <div className="main-header header-sticky">
            <div className="container-fluid ">
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-xl-2 col-lg-2 col-md-1 col-sm-1">
                        <div className="logo">
                            <Link to="/"><img src='/img/logo/logo.png' className="img-fluid" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-11">
                        <div className="main-menu d-flex align-items-center justify-content-end ">
                            {/* Main-menu */}
                            <div className="main-menu f-right  ">
                                <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-inverse">
                                    <div className="container-fluid">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav">
                                        <li className="active nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                        {localStorage.getItem('barbertoken') ? 
                                        
                                        <li className="nav-item"><Link className="nav-link" to="/">Manage</Link>
                                            <ul className="submenu">
                                                <li className="nav-item"><Link className="nav-link" to="/confirm">Requests</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/manage">Add Barber </Link></li>
                                              
                                            </ul>
                                        </li>:    
                                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                        }
                                        <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                                        { localStorage.getItem('token') ?
                                        <>
                                        <li className="nav-item"><Link className="nav-link" to="/bookings">Booking</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/pay">Payment</Link></li>
                                        </>
                                        :
                                        
                                        <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                        }
                                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                                        {localStorage.getItem('token')  ?
                                        <li className="nav-item"><Link className="nav-link" to="/" onClick={logouthandle}>Logout </Link></li>
                                       :
                                        localStorage.getItem('barbertoken') ?
                                        <li className="nav-item"><Link className="nav-link" to="/" onClick={logouthandle}>Logout </Link></li>
                                         :
                                        <li className="nav-item"><Link className="nav-link" to="/">Login</Link>
                                            <ul className="submenu">
                                                <li className="nav-item"><Link className="nav-link" to="/user">User</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/barber">Barber </Link></li>
                                              
                                            </ul>
                                        </li>
                                        }
                                        
                                    </ul>
                                    </div>
                                    </div>
                                </nav>
                            </div>
                            
                            <div className="header-right-btn f-right d-none d-lg-block ml-30">
                            {localStorage.getItem('token') ? 
                                <Link to="/" className="btn header-btn fs-4 text-white fw-bolder">Hello {JSON.stringify(user.name)}</Link>
                                :
                                localStorage.getItem('barbertoken') ?
                                <Link to="/" className="btn header-btn fs-4 text-white fw-bolder">Hello Barber {JSON.stringify(barber.ownername)}</Link>
                                :
                                <Link to="/barber" className="btn header-btn">became a member</Link>
                                }
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu 
                    <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none"></div>
</div>*/}
                </div>
            </div>
        </div>
    </div>
        {/*} Header End */}
    </header>

);
}
export default Header;

