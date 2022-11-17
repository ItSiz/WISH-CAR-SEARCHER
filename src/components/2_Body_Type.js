import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import "../scss/questions_scss/_2_body_type.scss";
// import ProgressBar from './Progress_bar';

const BodyType = ({setCurrentComponent}) => {
    const [carBody, setCarBody] = useState("");
    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT BODYTYPES
            </section>

            <section className='questions-body bodytype-body'>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("hatchback")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55198.png' alt='hatchback-icon'/>
                        <p>hatchback</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("sedan")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55283.png' alt='sedan-icon'/>
                        <p>sedan</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("combi")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55183.png' alt='combi-icon'/>
                        <p>combi</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("coupe")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55180.png' alt='coupe-icon'/>
                        <p>coupe</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("cabrio")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55195.png' alt='cabrio-icon'/>
                        <p>cabrio</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("sport")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55168.png' alt='sport-icon'/>
                        <p>sport</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("minivan")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55349.png' alt='minivan-icon'/>
                        <p>minivan</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("suv")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55280.png' alt='suv-icon'/>
                        <p>suv</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("off-road")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55230.png' alt='off-road-icon'/>
                        <p>off-road</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => setCarBody("pickup")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55277.png' alt='pickup-icon'/>
                        <p>pickup</p>
                    </button>
                </div>

            </section>

            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(2)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(4)}>
                        next
                    </button>
                    <button className='next-icon' onClick={() => setCurrentComponent(1)}>
                        <i className="fa-solid fa-x" data-bs-toggle="popover" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                </div>
            </section>

            <section className='questions-progress body-progress'>
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

export default BodyType