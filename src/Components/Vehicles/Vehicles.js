import React from 'react';
import { Link } from 'react-router-dom';
import './Vehicles.css'

const Vehicles = (props) => {
    const{name,img,id}=props.vehicle;
    return (
        <Link to={'/path/'+id}> 
            <div className='vehicle-card'>
                <img src={img} alt=""/>
                <h1>{name}</h1>
            </div>
        </Link>
    );
};

export default Vehicles;