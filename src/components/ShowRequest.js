import { useEffect, useState } from "react";
import moment from 'moment'

function ShowRequest(){
    let [request,setrequest]=useState([]);

    const getdetails = async () => {
      let details = await fetch('http://localhost:5000/getusers',{
          method:"GET",
          headers:{'Content-Type':'application/json',
          'jwtData':localStorage.getItem('barbertoken')
          }
      })
      let userdetails = await details.json();
      setrequest(userdetails)

  }

    useEffect(()=>{
        getdetails()
    })


    let accept = async (e)=>{
      // let books = []
      // books=book.bookid0
      console.log(e.currentTarget.dataset.id)
      let bookid ={bookid: e.currentTarget.dataset.id}
      let details = await fetch("http://localhost:5000/acceptRequst",{
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookid)
    })
    let updatedetails = await details.json();
    console.log(updatedetails)

    }

    return(
        <>
        <div className="container bg-light mb-5" style={{borderRadius:30,padding:50,marginTop:100}}>
          <h1 className="jumbotron text-primary text-center">Customer's Booking Request</h1>
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
{request.map((req)=>{return (
    <div className="col col-sm-6 col-md-4 col-lg-3 mb-3">
<div className="card">
  <img src="..." class="card-img-top" alt="userimage"/>
  <div className="card-title">
    <p className="card-text  fw-bolder text-center text-danger"> Customer Booking</p></div>
  <div className="card-body"> 
    <p className="card-text fs-4">Booking Name - {req.BookingName}</p>
    <p className="card-text fs-4">Barber Name - {req.BarberName}</p>
    <p className="card-text fs-4">Date & Time - {moment.tz(req.BookingDate,"Asia/kolkata").format("DD/MM/YYYY hh:mm:ss a")}</p>
    <p className="card-text fs-4">Service - {req.Service}</p>
    <p className="card-text fs-4">Contact No. - {req.contact}</p>
    
    <button className="btn btn-success" onClick={accept} data-id={req._id}>Accept</button> 
    <button className="btn btn-danger ml-2">Reject</button>
  </div>
</div>
</div>
 )})}
    </div>
    </div>

        </>
    )
}

export default ShowRequest;