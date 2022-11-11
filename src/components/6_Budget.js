import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
// import "../scss/questions_scss/_5_gearbox.scss";
import ProgressBar from './Progress_bar';

const Budget = ({setCurrentComponent}) => {
 return (
    <>
            <section className='menu-top menu-segments'>
                CHOOSE YOUR BUDGET
            </section>



            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(6)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(8)}>
                        next
                    </button>
                    <button className='next-icon' onClick={() => setCurrentComponent(1)}>
                        <i className="fa-solid fa-x" data-bs-toggle="popover" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                </div>
            </section>
    </>
 )
}

export default Budget