import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import "../scss/questions_scss/_3_fuel.scss";
import ProgressBar from './Progress_bar';


const Fuel = () => {
    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT THE TYPE OF FUEL
            </section>

            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon'>
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className='next-buton'>
                        next
                    </button>
                    <button className='next-icon'>
                        <i class="fa-solid fa-x"></i>
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