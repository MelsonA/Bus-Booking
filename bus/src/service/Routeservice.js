import axios from 'axios'

const ROUTE_BASE_REST_API_URL = 'http://localhost:8080/api/route';

class RouteService{

    getAllRoutes(){
        return axios.get(ROUTE_BASE_REST_API_URL);
    }
}

export default new RouteService();