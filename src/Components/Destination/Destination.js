import './Destination.css';
import data from '../../Data/data.json'
import { useState } from 'react';
import Vehicles from '../Vehicles/Vehicles';
import { useEffect } from 'react';

const Destination = () => {
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(data);
    }, [])
    return (
        <div className='background'>
            <div className='row vahicles'>
                {vehicles.map(vehicle => <div className='col-md-3 '> <Vehicles vehicle={vehicle}></Vehicles></div>)}
            </div>
        </div>
    );
};

export default Destination;