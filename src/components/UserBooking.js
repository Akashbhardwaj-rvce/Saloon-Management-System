import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import moment from 'moment'

function UserBooking(){
    // const navigate =useNavigate();
    const [request,setrequest]=useState([]);

    const loadScript = (src) =>{
      return new Promise((resolve)=>{
        const script = document.createElement('script')
        script.src = src
        script.onload = () =>{
          resolve(true)
        }
        script.onerror= ()=>{
          resolve(false)
        }
        document.body.appendChild(script)
      })
    }
    const getdetails = async () => {
        let details = await fetch('http://localhost:5000/CnfRequst',{
            method:"GET",
            headers:{'Content-Type':'application/json',
            'jwtData':localStorage.getItem('token')
            }
        })
        let userdetails = await details.json();
        setrequest(userdetails)

    }

    useEffect(()=>{
      // if(localStorage.getItem('token')){
        getdetails();
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
      // }
    },[])


    let accept = async (e)=>{
      // let books = []
      // books=book.bookid0
      console.log(e.currentTarget.dataset.id)
      const paydata ={
        receipt:e.currentTarget.dataset.id,
        amount:799,
      }

    const data = await fetch("http://localhost:5000/razorpay",{
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body : JSON.stringify(paydata)
    }).then((t)=> t.json())

    console.log(data)

    const options = {
      key: 'rzp_test_1SFoqicpDDeIKr',
      currency : "INR",
      amount: data.amount, 
      description: "Wallet Transaction",
      order_id: data.id,
      handler :async function(response) {
          console.log(response.razorpay_order_id);
          console.log(response.razorpay_payment_id);
          console.log(response.razorpay_signature);
          console.log(data.amount);
          const values ={
              razorpay_signature : response.razorpay_signature,
              razorpay_order_id : response.razorpay_order_id,
              transactionid : response.razorpay_payment_id,
              transactionamount : data.amount,
              receipt:data.receipt
            }  
            const paydetails = await fetch('http://localhost:5000/paymentcnf',{
              method:"POST",
              headers:{'Content-Type':'application/json','jwtData':localStorage.getItem('token')},
              body:JSON.stringify(values)
            })
            console.log(paydetails)  

},
prefill:{

  name:'Saurabh verma',
  email:'saurabh@gmail.com',
  contact:'9658923685',
}
    };
    const paymentobj = new window.Razorpay(options)
    paymentobj.open()




  }

    return(
        <>
               <div className="container bg-light mb-5" style={{borderRadius:30,padding:50,marginTop:100}}>
          <h1 className="jumbotron text-primary text-center">Confirm Booking Request</h1>
        {/* <table className="table fs-3 table-dark table-hover" style={{borderRadius:30}}>
        <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Booking Name</th>
      <th scope="col">Barber Name</th>
      <th scope="col">Date & Time</th>
      <th scope="col">Service</th>
      <th scope="col">Contact</th>
      <th scope="col">Accept</th>
      <th scope="col">Reject</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <th scope="row">#</th>
      
    </tr>

  </tbody>
</table> */}
   
        
       
<div className="row">
{request.map((req)=>{ return (
    <div className="col col-sm-6 col-md-4 col-lg-3 mb-3">
<div className="card">
  {/* <img src="..." class="card-img-top" alt="userimage"/> */}
  <div className="card-title">
    <p className="card-text  fw-bolder text-center text-danger"> Customer Booking</p></div>
  <div className="card-body"> 
    <p className="card-text fs-4">Booking Name - {req.BookingName}</p>
    <p className="card-text fs-4">Barber Name - {req.BarberName}</p>
    <p className="card-text fs-4">Date & Time - {moment.tz(req.BookingDate,"Asia/kolkata").format("DD/MM/YYYY hh:mm:ss a")}</p>
    <p className="card-text fs-4">Service - {req.Service}</p>
    <p className="card-text fs-4">Contact No. - {req.contact}</p>
    {/* <input type="hidden" value={ req.shop } onChange={handelshop} /> */}
    <center>
    <button className="btn btn-primary btn-lg" onClick={accept} data-id={req._id}>Pay Now</button> 
    </center>
  </div>
</div>
</div>
 )})}
    </div>
    </div>

        </>
    )
}
export default UserBooking;