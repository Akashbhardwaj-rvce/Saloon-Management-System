import { useState} from 'react';
import { useNavigate } from 'react-router';
function Manage(){
  const navigate=useNavigate()
	const [name,setname]=useState("");
	const [address,setaddress]=useState("");
	const [ownername,setownername]=useState("");
	const [password,setpassword]=useState("");
	const [email,setemail]=useState("");
	const [mobile,setmobile]=useState("");


	const handeladdress=(e)=>{
		setaddress(e.target.value)
	}
	const handelname=(e)=>{
		setownername(e.target.value)
	}
	const handelemail=(e)=>{
		setemail(e.target.value)
	}
	const handelspe=(e)=>{
		setpassword(e.target.value)
	}
	const handelexp=(e)=>{
		setname(e.target.value)
	}
	const handelnumber=(e)=>{
		setmobile(e.target.value)
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		const shop = {
			experience:name,
			address:address,
			barbername:ownername,
			barbercontact:mobile,
			email: email,
			specilist: password
			
		  }
		  const response = await fetch('http://localhost:5000/insertbarber',{
			method:"POST",
			headers:{'Content-Type':'application/json',
      'jwtData':localStorage.getItem('barbertoken')
      },
			body:JSON.stringify(shop)
		})
			const result = await response.json()
			console.log(result.pass)
		  //.catch((error) => {console.log(error)});

		  if( shop !== null ){
			//alert(`New object created with success! ObjectId: ${user.id}, ${user.get("emailVerified")}`);
			
				//localStorage.setItem('token', result.jwtData);
				navigate("/");
        // window.location.reload(true); 
			}
			else{
				alert("Something wrrong");
			}

		
	}

	  

  return(
<>

<section className="container mb-5  vh-80" style={{borderRadius:40, backgroundColor: "#eee"}}>
  <div className="container h-100 " style={{marginTop:100, paddingTop:100, paddingBottom:100}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Barber Registration</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" onChange={handelname} className="form-control" />
                      <label className="form-label" for="form3Example1c">Barber Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-address-card fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" onChange={handeladdress} className="form-control" />
                      <label className="form-label" for="form3Example3c">Address</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" onChange={handelemail} className="form-control" />
                      <label className="form-label" for="form3Example3c">Barber Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-mobile-alt fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example4c" onChange={handelnumber} className="form-control" />
                      <label className="form-label" for="form3Example4c">Mobile Number</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example3c" onChange={handelspe} className="form-control" />
                      <label className="form-label" for="form3Example3c">Specilist</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-history fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example4cd" onChange={handelexp} className="form-control" />
                      <label className="form-label" for="form3Example4cd">Experience</label>
                    </div>
                  </div>

                  {/* <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</> 
  )   
}

export default Manage;
