// BookingDetails.js

import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import PassengerService from '../service/PassengerService';
import BusService from '../service/BusService';

const BookingDetails = () => {
  const { busId, passengerId } = useParams();
  const [busDetails, setBusDetails] = useState({});
  const [passengerDetails, setPassengerDetails] = useState({});

  useEffect(() => {
    // Fetch bus details using busId
    BusService.getBus(busId).then((response) => {
      setBusDetails(response.data);
    });

    // Fetch passenger details using passengerId
    PassengerService.getPassenger(passengerId).then((response) => {
      setPassengerDetails(response.data);
    });
  }, [busId, passengerId]);

  return (
      <div className="container">
      <br/><br/><br/><br/><br/><br/>
    <div className="card w-100 bg-black">
      <div className="card-body">
        <h2 className="text-danger card-title">Booking Details</h2>
        <br />
        <div className="row">
        {/* Bus Details */}
        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Bus Name:</label>
          <input type="text" className="form-control" value={busDetails.busName} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Bus Number:</label>
          <input type="text" className="form-control" value={busDetails.busNumber} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">From Locations:</label>
          <input type="text" className="form-control" value={busDetails.fromLocations} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">To Locations:</label>
          <input type="text" className="form-control" value={busDetails.toLocations} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Departute Time:</label>
          <input type="text" className="form-control" value={busDetails.ticketPrice} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Ticket Price:</label>
          <input type="text" className="form-control" value={busDetails.departureTime} readOnly />
        </div>
</div>
<br/><br/><br/>
<div className="row">
        {/* Passenger Details */}
        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Passenger Name:</label>
          <input type="text" className="form-control" value={passengerDetails.name} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Mobile:</label>
          <input type="text" className="form-control" value={passengerDetails.mobile} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Email:</label>
          <input type="text" className="form-control" value={passengerDetails.email} readOnly />
        </div>

        <div className="form-group mb-2 col">
          <label className="form-label fw-bold text-danger">Seats Booked:</label>
          <input type="text" className="form-control" value={passengerDetails.seats} readOnly />
        </div>
      </div>
    </div>
    
    </div>
    <br/><br/>
    <Link to={`/payment/${busId}/${passengerId}`}className="btn btn-success" style={{ marginLeft: '950px' }}>Proceed Payment</Link>
    </div>
  );
};

export default BookingDetails;
