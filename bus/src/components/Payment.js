import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Modal from 'react-modal';
import BusService from '../service/BusService';
import PassengerService from '../service/PassengerService';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [paymentError, setPaymentError] = useState('');
  const [isPaymentSuccess, setPaymentSuccess] = useState(false);

  const [busDetails, setBusDetails] = useState('')
  const [passengerDetails, setPassengerDetails] = useState('')
  const {busId,passengerId}=useParams();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate total amount when busDetails and passengerDetails are available
    if (busDetails && passengerDetails) {
      const { departureTime } = busDetails;
      const seatsCount = passengerDetails.seats.split(',').length;

      // Calculate total amount
      const calculatedTotalAmount = departureTime * seatsCount;
      setTotalAmount(calculatedTotalAmount);
    }
  }, [busDetails, passengerDetails]);

  useEffect(() => {
      
    BusService.getBus(busId).then((response)=>{
        setBusDetails(response.data)
    });

    PassengerService.getPassenger(passengerId).then((response)=>{
        setPassengerDetails(response.data)
    });
  }, [busId,passengerId])


  const submitPayment = () => {
    setPaymentError('');
    setPaymentSuccess(true);
    resetForm();
  };

  const resetForm = () => {
    setCardNumber('');
    setExpiryDate('');
    setCvc('');
  };

  const closeModal = () => {
    setPaymentSuccess(false);
  };

  return (
      <div className="container">
<br/><br/><br/><br/><br/><br/><br/>
      <table className="table table-striped table-hover text-danger">
        <thead>
          <tr>
            <th>Name</th>
            <th>Bus Name</th>
            <th>Bus Number</th>
            <th>Seat Number</th>
            <th>Ticket Price /person</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{passengerDetails.name}</td>
            <td>{busDetails.busName}</td>
            <td>{busDetails.busNumber}</td>
            <td>{passengerDetails.seats}</td>
            <td>{busDetails.departureTime}</td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="payment-container" style={styles.container}>
        <h2 className="text-danger text-center">Payment</h2>
        <form style={styles.form}>
          <label htmlFor="card-number" style={styles.label}>
            Card Number
          </label>
          <input
            type="text"
            id="card-number"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            style={styles.input}
            required
          />

          <label htmlFor="expiry-date" style={styles.label}>
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry-date"
            placeholder="MM/YYYY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            style={styles.input}
            required
          />

          <label htmlFor="cvc" style={styles.label}>
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            style={styles.input}
            required
          />

          <button type="button" onClick={submitPayment} style={styles.button}>
            Submit Payment
          </button>

          {paymentError && <p className="payment-error" style={styles.error}>{paymentError}</p>}
        </form>
      </div>
      <Modal
        isOpen={isPaymentSuccess}
        contentLabel="Payment Success Modal"
        onRequestClose={closeModal}
        style={modalStyles}
      >
        <div>
          <div style={{ fontSize: '24px', marginBottom: '20px' }}>Payment Successful!</div>
          <div style={{ textAlign: 'center' }}>
            {/* Replace with your tick mark or animation */}
            &#10004;
          </div>
          <Link to="/route" className="btn btn-primary">OK</Link>
        </div>
      </Modal>
    </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '300px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '5px 0',
  },
  input: {
    margin: '5px 0',
    padding: '8px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    margin: '10px 0',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },

};

const modalStyles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      textAlign: 'center',
    },
};

export default Payment;
