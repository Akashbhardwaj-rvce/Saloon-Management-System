import { useEffect, useState } from "react";
import moment from 'moment'
function Payment(){

  let [request,setrequest]=useState([]);

  const getdetails = async () => {
    let details = await fetch('http://localhost:5000/payment',{
        method:"GET",
        headers:{'Content-Type':'application/json',
        'jwtData':localStorage.getItem('token')
        }
    })
    let userdetails = await details.json();
    setrequest(userdetails)

}

  useEffect(()=>{
      getdetails()
  })
  return(
    <>

<div className="container bg-light mb-5" style={{borderRadius:30,padding:50,marginTop:100}}>
          <h1 className="jumbotron text-primary text-center">Complete Booking Payment</h1>
<div className="row">
{request.map((req)=>{return (
    <div className="col col-sm-6 col-md-4 col-lg-3 mb-3">
<div className="card">
  {/* <img src="..." class="card-img-top" alt="userimage"/> */}
  <div className="card-title">
    <p className="card-text  fw-bolder text-center text-danger"> Payment Done</p></div>
  <div className="card-body"> 
  <p className="card-text fs-5">Transaction Date - {moment.tz(req.date,"Asia/kolkata").format("DD/MM/YYYY hh:mm:ss a")}</p>
  <p className="card-text fs-5">Receipt No. - {req.receipt}</p>
    <p className="card-text fs-5">Order ID - {req.razorpay_orderid}</p>
    <p className="card-text fs-5">Transaction ID - {req.transactionid}</p>
    <p className="card-text fs-4">Amount - {(req.transactionamount)/Math.pow(10,2)}&#8377;</p>
    <center>
    <button className="btn btn-success btn-lg">Confirmed</button>
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
export default Payment;