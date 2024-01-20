// BusSeatBooking.js

import React, { useState ,useEffect} from 'react';
import {Link,useParams,useNavigate} from 'react-router-dom'
import './BusSeatBooking.css';
import PassengerService from '../service/PassengerService';
import BusService from '../service/BusService';

const BusSeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const navigate = useNavigate();

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [seats, setSeats] = useState('')

  const [busDetails, setBusDetails] = useState({});
  const [passengerId, setPassengerId] = useState(null);

  const [busName, setBusName] = useState('')
    const [busNumber, setBusNumber] = useState('')
    const [fromLocations, setFromLocations] = useState('')
    const [toLocations, setTolocations] = useState('')
    const [departureTime, setDepartureTime] = useState('')
    const [ticketPrice, setTicketPrice] = useState('')
    

    const {id}= useParams();

    useEffect(() => {
        BusService.getBus(id).then((response) => {
          setBusDetails(response.data);
        });
      }, [id]);

  const savePassenger=(e)=>{
    e.preventDefault();

    const seatsString = selectedSeats.join(', ');

    const passenger = { name, age, mobile, email, gender, seats: seatsString };

    PassengerService.createPassenger(passenger).then((response)=>{
        console.log(response.data);
        setPassengerId(response.data.id);
        navigate(`/booking-details/${id}/${response.data.id}`);
        }).catch(error=>{
            console.log(error)
        })
  }

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Seat is already selected, remove it
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Seat is not selected, add it
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const rows = 4;
    const columns = 10;
    const totalSeats = rows * columns;
    const seats = [];

    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= columns; col++) {
        const seatNumber = (col - 1) * rows + row;
        const isSelected = selectedSeats.includes(seatNumber);
        seats.push(
          <div key={seatNumber} className="seat-card">
            <div
              className={`seat ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </div>
          </div>
        );
      }
    }

    return seats;
  };

  useEffect(() => {
      BusService.getBus(id).then((response)=>{
          setBusName(response.data.busName)
          setBusNumber(response.data.busNumber)
          setFromLocations(response.data.fromLocations)
          setTolocations(response.data.toLocations)
          setTicketPrice(response.data.ticketPrice)
          setDepartureTime(response.data.departureTime)
      })
  }, [id])

  return (
      <div className="container">
      <br/><br/><br/><br/><br/><br/><br/>
    <div className="bus-seat-booking row">
    <div className="card w-50 bg-black col mx-5">
    <div className="card-body">
      <h2 className="text-danger card-title">Select the Seats</h2>
      <br/><br/><br/>
      <div className="seat-container">{renderSeats()}</div>
      <br/><br/><br/>
      <div className="selected-seats">
        <p className="text-danger">Selected Seats: {selectedSeats.join(', ')}</p>
      </div>
<br/><br/>
      
      </div>
      </div>
      <div className="card w-50 bg-black col">
      <div className="card-body">
      
      <form>
      <h2 className="text-danger card-title">Passenger Details</h2>
      <br/>
            <div className="form-group mb-2">
            <label className="form-label fw-bold text-danger">Name :</label>
            <input type="text" placeholder="Enter Name" name="name" className="form-control"
            value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label  fw-bold text-danger">Age :</label>
            <input type="text" placeholder="Enter age" name="age" className="form-control"
            value={age} onChange={(e)=>setAge(e.target.value)}></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label  fw-bold text-danger">Email Address :</label>
            <input type="email" placeholder="Enter valid Email" name="email" className="form-control"
            value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label  fw-bold text-danger">Mobile :</label>
            <input type="text" placeholder="Enter Mobile" name="mobile" className="form-control"
            value={mobile} onChange={(e)=>setMobile(e.target.value)}></input>
            </div>

            <div className="form-group mb-2">
  <label className="form-label fw-bold text-danger">Gender:</label>
  <div>
    <label className="radio-label">
      <input
        type="radio"
        name="gender"
        value="male"
        checked={gender === 'male'}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
    </label>
    <label className="radio-label">
      <input
        type="radio"
        name="gender"
        value="female"
        checked={gender === 'female'}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
    </label>
    <label className="radio-label">
      <input
        type="radio"
        name="gender"
        value="others"
        checked={gender === 'others'}
        onChange={(e) => setGender(e.target.value)}
      />
      Others
    </label>
  </div>
</div>


            <div className="form-group mb-2">
            <label className="form-label  fw-bold text-danger">No.of Seats :</label>
            <input type="number" placeholder="Enter No.of seats" name="seats" className="form-control"
            value={seats} onChange={(e)=>setSeats(e.target.value)}></input>
            </div>

            <br/>
            <div className="d-flex align-items-center justify-content-evenly">
            <button className="btn btn-success fw-bold" onClick={(e)=>savePassenger(e)}>Book Ticket</button>
            <Link to={`/bus/${fromLocations}/${toLocations}`} className="btn btn-danger fw-bold">Cancel</Link>
            </div>
        </form>
        </div>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};

export default BusSeatBooking;
