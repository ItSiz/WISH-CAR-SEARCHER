import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import "../scss/questions_scss/_1_segmets.scss";
// import ProgressBar from './Progress_bar';
import App from '../App';

const Segments = ({setCurrentComponent}) => {
    const [carSegment, setCarSegment] = useState("");
    return (
    <>
        <section className='menu-top menu-segments'>
            SELECT SEGMENTS
        </section>

        <section className='questions-body segemnts-body'>
            <button className='segemnts-question class-a' onClick={() => setCarSegment("A")}>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/26/26435.png' alt='mini car icon'/>
                    <p>Class A</p>
                </div>
            </button>
            <p>mini cars</p>

            <button className='segemnts-question class-b' onClick={() => setCarSegment("B")}>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/26/26886.png' alt='smal car icon'/>
                    <p>Class B</p>
                </div>
            </button>
            <p>small city cars</p>

            <button className='segemnts-question class-c' onClick={() => setCarSegment("C")}>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/27/27003.png' alt='medium car icon'/>
                    <p>Class C</p>
                </div>
            </button>
            <p>medium compact cars</p>

            <button className='segemnts-question class-d' onClick={() => setCarSegment("D")}>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/26/26352.png' alt='large car icon'/>
                    <p>Class D</p>
                </div>
            </button>
            <p>large family cars</p>

            <button className='segemnts-question class-e' onClick={() => setCarSegment("E")}>
                <div className='question-space-segments'>
                    <img src='https://cdn-icons-png.flaticon.com/512/27/27068.png' alt='executive car icon'/>
                    <p>Class E</p>
                </div>
            </button>
            <p>excutive comfort cars</p>

            <button className='segemnts-question class-f' onClick={() => setCarSegment("F")}>
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

        <section className='questions-progress segment-progress'>
        <ul className="pagination">
                <li className="page-item"></li>
                <li className="page-item"></li>
                <li className="page-item"></li>
                <li className="page-item"></li>
                <li className="page-item"></li>
                <li className="page-item"></li>
                <li className="page-item"></li>
            </ul>
        </section>
    </>
    )
}

export default Segments;