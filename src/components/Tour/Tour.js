import React, { useState } from 'react'
import './Tour.scss'

const Tour = ({ tour, removeTour } ) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <article className="tour">
            <div className="img-container">
                <img src={tour.img} alt='img' />
                <span className="close-btn" onClick={()=> removeTour({tour})}>
                    <i className="fas fa-window-close" />
                </span>
            </div>

            <div className='tour-info'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div> 
                        <h3>{tour.city}</h3>
                        <h4>{tour.name}</h4>
                    </div>
                    <div style={{alignItems:"flex-end"}}>
                        <h5 onClick={(e) =>setShowInfo(!showInfo)}>
                            <span>
                                <i className="fa-solid fa-circle-info"></i>
                            </span>
                        </h5>
                    </div>
                </div>
               
                {showInfo && <p>{tour.info}</p>}
               
            </div>
        </article>
    )
}

export default Tour;