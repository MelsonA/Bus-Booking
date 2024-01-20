import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import BusService from '../service/BusService';


const BusList = () => {

    // const [busName, setBusName] = useState('')
    // const [busNumber, setBusNumber] = useState('')
    // const [fromLocations, setFromLocations] = useState('')
    // const [toLocations, setToLocations] = useState('')
    // const [departureTime, setDepartureTime] = useState('')
    // const [ticketPrice, setTicketPrice] = useState('')

    const [buses, setBuses] = useState([])

    const {fromLocation,toLocation}=useParams();

    // useEffect(() => {
    //     BusService.getListBus(fromLocations,toLocations).then((response)=>{
    //         setBusName(response.data.busName)
    //         setBusNumber(response.data.busNumber)
    //         setFromLocations(response.data.fromLocations)
    //         setToLocations(response.data.toLocations)
    //         setDepartureTime(response.data.departureTime)
    //         setTicketPrice(response.data.ticketPrice)
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    // }, [])

    useEffect(() => {
        BusService.getListBus(fromLocation,toLocation).then((response)=>{
            setBuses(response.data)
            console.log(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    return (
        <div>
            <br/><br/><br/><br/><br/>
            <h3 className="text-center">BUs list</h3>
            <br/>
            <div className="row justify-content-center">
            {buses.map(bus=>
            <div className="col-md-10 mb-4" key={bus.id}>
            <Link to={`/bus-seat/${bus.id}`} className="text-decoration-none">
                <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{bus.busName}</h3>
                  <br/>
                  <div className="row">
                  <div className="col">
                  <p className="card-text">Bus Number : {bus.busNumber}</p>
                  </div>
                  <div className="col">
                  <p className="card-text">Source : {bus.fromLocations}</p>
                  </div>
                  <div className="col">
                  <p className="card-text">Destination : {bus.toLocations}</p>
                  </div>
                  <div className="col">
                  <p className="card-text">Ticket Price : {bus.departureTime}</p>
                  </div>
                  <div className="col">
                  <p className="card-text">Timing : {bus.ticketPrice}</p>
                  </div>
                </div>
                </div>
              </div>
              </Link>
         </div>
            )}
        </div>
        </div>
    )
}

export default BusList
