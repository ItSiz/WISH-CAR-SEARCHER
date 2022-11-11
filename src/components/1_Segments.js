import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import "../scss/questions_scss/_1_segmets.scss";
import ProgressBar from './Progress_bar';
// import BodyType from './components/2_Body_Type';
// import Menu from './components/Menu';
import App from '../App';

const Segments = ({setCurrentComponent}) => {
    return (
    <>
        <section className='menu-top menu-segments'>
            SELECT SEGMENTS
        </section>

        <section className='questions-body segemnts-body'>
            <button className='segemnts-question class-a'>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/26/26435.png' alt='mini car icon'/>
                    <p>Class A</p>
                </div>
            </button>
            <p>mini cars</p>

            <button className='segemnts-question class-b'>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/26/26886.png' alt='smal car icon'/>
                    <p>Class B</p>
                </div>
            </button>
            <p>small city cars</p>

            <button className='segemnts-question class-c'>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/27/27003.png' alt='medium car icon'/>
                    <p>Class C</p>
                </div>
            </button>
            <p>medium compact cars</p>

            <button className='segemnts-question class-d'>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/26/26352.png' alt='large car icon'/>
                    <p>Class D</p>
                </div>
            </button>
            <p>large family cars</p>

            <button className='segemnts-question class-e'>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/27/27068.png' alt='executive car icon'/>
                    <p>Class E</p>
                </div>
            </button>
            <p>excutive comfort cars</p>

            <button className='segemnts-question class-f'>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/27/27061.png' alt='luxury car icon'/>
                    <p>Class F</p>
                </div>
            </button>
            <p>luxury premium cars</p>
        </section>

        <section className='questions-bottom'>
            <div className='buttons-section'>
                <button className='next-icon' onClick={() => setCurrentComponent(1)}>
                    <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                </button>
                <button className='next-buton' onClick={() => setCurrentComponent(3)}>
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

export default Segments;