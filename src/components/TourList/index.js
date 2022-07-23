import React, { useState } from 'react';
import './TourList.scss'
import Tour from '../Tour/Tour'
import tourData from '../tourData.js';

const TourList = () =>{
  const [tours, setTours] = useState(tourData);
  function removeTour(tourP){
    const filteredTours = tours.filter(tour => tour.id !== tourP.tour.id);
    setTours(filteredTours);
  }
    return (
     <section className='tourlist'>
       {tours.map(tour =>{
        return(
            <Tour key={tour.id} tour = {tour}
            removeTour = {removeTour}/>
        )
       })}
     </section>
    )
}

export default TourList;
