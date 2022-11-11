import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import "../scss/questions_scss/_3_fuel.scss";
import ProgressBar from './Progress_bar';


const Fuel = ({setCurrentComponent}) => {
    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT THE TYPE OF FUEL
            </section>

            <section className='questions-body fuel-body'>
                <button className='body-questions fuel-questions'>
                    <div className='question-space-fuel petrol-fuel'>
                        <img src='http://www.cena-pradu.pl/95.png' alt='petrol icon'/>
                        <p>petrol</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions'>
                    <div className='question-space-fuel diesel-fuel'>
                        <img src='http://www.cena-pradu.pl/ON.png' alt='diesel icon'/>
                        <p>diesel</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions'>
                    <div className='question-space-fuel hybrid-fuel'>
                        <img src='https://t4.ftcdn.net/jpg/04/74/63/63/360_F_474636324_LJrUMpEfBUf5lQDvXdH5hDMJINYfCSFa.jpg' alt='hybrid icon'/>
                        <p>hybrid</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions'>
                    <div className='question-space-fuel electric-fuel'>
                        <img src='https://i.pinimg.com/originals/a4/4e/48/a44e483f3e006cdffeea9888bfb054a6.png' alt='electric icon'/>
                        <p>electric</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions'>
                    <div className='question-space-fuel alternative-fuel'>
                        <img src='https://static.vecteezy.com/system/resources/previews/002/416/506/non_2x/international-biodiesel-day-10-august-for-ecology-and-environmental-help-the-world-with-eco-friendly-ideas-free-vector.jpg' alt='alternative icon'/>
                        <p>alternative</p>
                    </div>
                </button>
            </section>

            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(3)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(5)}>
                        next
                    </button>
                    <button className='next-icon' onClick={() => setCurrentComponent(1)}>
                        <i className="fa-solid fa-x" data-bs-toggle="popover" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                </div>
            </section>

            <section className='questions-progress'>
                <ProgressBar/>
            </section>
        </>
    )    
}

export default Fuel