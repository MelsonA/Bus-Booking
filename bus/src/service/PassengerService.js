import axios from 'axios'

const PASSENGER_BASE_REST_API_URL = 'http://localhost:8080/api/passenger';

class PassengerService{
    createPassenger(passenger){
        return axios.post(PASSENGER_BASE_REST_API_URL,passenger);
    }

    getPassenger(passengerId){
        return axios.get(PASSENGER_BASE_REST_API_URL + "/" + passengerId);
    }
}

export default new PassengerService();