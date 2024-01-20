import axios from 'axios'

const BUS_BASE_REST_API_URL = 'http://localhost:8080/api/bus'; 

class BusService{
    
    getListBus(fromLocation, toLocation){
        const url = `${BUS_BASE_REST_API_URL}?fromLocations=${fromLocation}&toLocations=${toLocation}`;
        return axios.get(url);
    }

    getBus(busId){
        return axios.get(BUS_BASE_REST_API_URL +"/"+ busId);
    }
}

export default new BusService();