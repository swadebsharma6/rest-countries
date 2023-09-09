import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data =>setCountries(data))
    }, []);

    const [visited, setVisited] = useState([]);

    const handleVisitedMarks = (country) =>{
        console.log('btn ic clicked on visited', country);
        // const newVisited = visited + 1;
        const newVisitedCountries = [...visited,country ]
        setVisited(newVisitedCountries);

    }

  return (
    <div>
     <div>
     <h4>Visited Countries: {visited.length}</h4>
     <ul>
     {
        visited.map(country => <li 
            key={country.ccn3}
            >Name:{country.name.common}</li>)
     }
     </ul>
     </div>
      <div className='countries'>
      {
        countries.map(country => <Country
           key={country.ccn3} 
           country={country}
           handleVisitedMarks={handleVisitedMarks}
            ></Country>)
      }
      </div>
    </div>
  )
}

export default Countries
