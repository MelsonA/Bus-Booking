import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import BusList from './components/BusList';
import BusSeatBooking from './components/BusSeatBooking';
import BookingDetails from './components/BookingDetails';
import Payment from './components/Payment';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/route" element={<HomeComponent />} />
            <Route path="/bus/:fromLocation/:toLocation" element={<BusList />} />
            <Route path="/bus-seat/:id" element={<BusSeatBooking />} />
            <Route path="/booking-details/:busId/:passengerId" element={<BookingDetails />} />
            <Route path="/payment/:busId/:passengerId" element={<Payment />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
