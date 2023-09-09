import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedMarks}) => {
    // console.log(country);
    const {name, population, region,flags,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    
    return (
        <div className={`country ${visited && 'visited'}`}>
        <img src={flags.png} alt="" />
            <h4>Name: {name.common}</h4>
            <h4>Population: {population}</h4>
            <h3>Region: {region}</h3>
            <p>Code:<small>{cca3}</small></p>
            <br />
           <button className='btn' onClick={() =>handleVisitedMarks(country)}>Mark Visited</button>
            <br />
            <button className='btn' onClick={handleVisited}>{visited ? 'Visited':"Going"}</button>
            {visited ? 'I have visited this country' : 'I want to Visit'}
        </div>
    );
};

export default Country;