import React from 'react';
import './Search.css';
import data from '../../Data/data.json'
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import icon from '../../images/peopleicon.png'

const Search = (props) => {
    const { id, place } = props;
    const [result, setResult] = useState([]);
    useEffect(() => {
        setResult(data);
    },[])
    const vehicle = result.find(e => e.id === id);
    console.log(vehicle, '\n', place);

    return (
        <div className='search-result'>
            <div className='place-result'>
                <small>From <h3>{place.source}</h3></small>
                <small>To <h3>{place.destination}</h3></small>
            </div>
            <div className='show-vehicle'>
                <img src={vehicle?.img} alt=""/>
                <h4>{vehicle?.name}</h4>
                <h4><img src={icon} alt=""/>{vehicle?.capacity}</h4>
                <h4>${vehicle?.cost}</h4>
            </div>
            <div className='show-vehicle'>
                <img src={vehicle?.img} alt=""/>
                <h4>{vehicle?.name}</h4>
                <h4><img src={icon} alt=""/>{vehicle?.capacity}</h4>
                <h4>${vehicle?.cost}</h4>
            </div>
        </div>
    );
};

export default Search;