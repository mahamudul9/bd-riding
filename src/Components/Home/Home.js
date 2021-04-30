import React from 'react';
import { useEffect } from 'react';
import './Home.css';
import data from '../../Data/data.json'
import { useState } from 'react';
import Vehicles from '../Vehicles/Vehicles';
import { Link } from 'react-router-dom';

const Home = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(data);
    }, [])
    return (
        <div className='background'>
            <div style={{paddingRight:'50px'}} className='row vahicles'>
                {vehicles.map(vehicle => <div className='col-md-3 '> <Vehicles vehicle={vehicle}></Vehicles></div>)}
            </div>
        </div>
    );
};

export default Home;