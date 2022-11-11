import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import "../scss/questions_scss/_4_power.scss";
import ProgressBar from './Progress_bar';
// import { round } from "@thomasloven/round-slider";

const Power = ({setCurrentComponent}) => {
    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT THE TYPE OF FUEL
            </section>

            <section className='questions-body power-body'>

            </section>

            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(4)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(6)}>
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

export default Power