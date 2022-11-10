import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import "../scss/questions_scss/_1_segmets.scss";
import ProgressBar from './Progress_bar';

const Segments = () => {
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
                <button className='next-icon'>
                {/* <img src='https://thenounproject.com/api/private/icons/1920781/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23737373&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjap1IE9w640qm8S4cA3GrLafobVGtckVdOQ6GxWZqy39a61Ehsl1v7_49SKdjY3kLm8a4cv1VeB2LZbbnywOBknCdTQ%3D%3D'/> */}
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button className='next-buton'>
                    next
                </button>
                <button className='next-icon'>
                {/* <img src='https://thenounproject.com/api/private/icons/1890803/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23737373&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjap1IE9w640qm8S4cA3GrLafobVGtckVdOQ6GxWZqy39a61Ehsl1v7_49SKdjY3kLm8a4cv1VeB2LZbbnywOBknCdTQ%3D%3D'/> */}
                    <i class="fa-solid fa-x"></i>
                </button>
                {/* <img src='https://thenounproject.com/api/private/icons/1920781/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23737373&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjapjsK0Tdbm7mx1jy4-yoDfy-f0OTUhdr6YTwhciQvSGvAfjg6KljwdnvBhtH0ndjoAmngucuvbAXrmKePyiueNkytA%3D%3D'/> */}
                {/* <button type="button" className="btn-close btn-close-white" aria-label="Close"></button> */}
            </div>
        </section>

        <section className='questions-progress'>
            <ProgressBar/>
        </section>
    </>
    )
}

export default Segments;