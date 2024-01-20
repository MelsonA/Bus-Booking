import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import Routeservice from '../service/Routeservice';

const HomeComponent = () => {

    const [routes, setRoutes] = useState([])

    const [selectedSource, setSelectedSource] = useState('');
    const [selectedDestination, setSelectedDestination] = useState('');


    useEffect(() => {
        getAllRoute();
    }, [])

    const getAllRoute=()=>{
        Routeservice.getAllRoutes().then((response)=>{
            setRoutes(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <br/><br/><br/><br/>
                <div className="pt-5 text-center text-light" >
                        <h3>Have a Wonderful Journey with BlackBUS.com</h3>
                </div>
                <br/><br/><br/><br/><br/>
                <div className="d-flex justify-content-center align-items-center">
                <div className="card" style={{width:850}}>
                                <div className="card-body">
                                  <h5 className="card-title text-center">Choose your Destination</h5>
                                  <br/>
                                <div className="row">
                                
                                <div className="form-group col">
                                <label htmlFor="fromSelect">From</label>
                                    <select id="fromSelect" className="form-control" value={selectedSource}
                                    onChange={(e) => setSelectedSource(e.target.value)}>
                                    <option value="">Select Source</option>
                                    {routes.map((route)=>{
                                        return(
                                            <option key={route.id} value={route.fromLocation}>
                                            {route.fromLocation}
                                            </option>
                                        );
                                    })}
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="toSelect">To</label>
                                    <select id="fromSelect" className="form-control" value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}>
                                    <option value="">Select Destination</option>
                                    {routes.map((route)=>{
                                        return(
                                            <option key={route.id} value={route.toLocation}>
                                            {route.toLocation}
                                            </option>
                                        );
                                    })}
                                    </select>
                                    
                                </div>
                                <div className="col">
                                {/* <Link to={`/bus?fromLocations=${selectedSource}&toLocations=${selectedDestination}`} className="btn btn-dark text-light mb-4" style={{marginTop:24,marginLeft:50}}>Search</Link> */}
                                <Link
    to={`/bus/${selectedSource}/${selectedDestination}`}
    className="btn btn-dark text-light mb-4"
    style={{ marginTop: 24, marginLeft: 50 }}
>
    Search
</Link>

                                </div>
                                
                                </div>
                                
                                </div>     
                        </div>
                        
                        </div>
                        
        </div>
    )
}

export default HomeComponent