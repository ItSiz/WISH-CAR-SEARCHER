import { Button } from 'bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
import "../scss/questions_scss/_5_gearbox.scss";
// import ProgressBar from './Progress_bar';

// const DataCatcher = () => {
//     const [gearboxinfo, setGearboxInfo] = useState({gearbox: []});

//     const handleChange = (e) => {
//         const {value, checked } = e.target;
//         const {gearbox} = gearboxinfo;

//         console.log(`${value} is ${checked}`);

//         if (checked) {
//             setGearboxInfo({
//                 gearbox: [...gearbox, value],
//                 response: [...gearbox, value],
//             });
//         } else {
//             setGearboxInfo({
//                 gearbox: gearbox.filter((e)=> e !== value),
//                 response: gearbox.filter((e)=> e !== value),
//             })
//         }
//     }
// }

// const button = document.querySelector('input');
// const fieldset = document.querySelector('fieldset');

// button.addEventListener('click', disableButton);

// function disableButton() {
//   fieldset.disabled = true;
//   setTimeout(() => {
//     fieldset.disabled = false;
//   }, 2000);
// }


const Gearbox = ({setCurrentComponent}, {handleChange} ) => {
    const [carGearbox, setCarGearbox] = useState("");
    // const button = document.getElementsByClassName('gearbox-questions');

    // button.addEventListener("click", klik);

    // const klik = () => {
    //     console.log("jej")
    // }

    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT GEARBOX
            </section>

            <section className='questions-body gearbox-body'>
{/* 
                <input type="button">
                </input> */}
                {/* <input type="button"value="manual" onChange={handleChange}> */}
                    <button type='submit' className='body-questions gearbox-questions' onClick={() => setCarGearbox("manual")}>
                        <div className='question-space-gearbox manualG'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3011/3011864.png' alt='manual gearbox icon'/>
                            <p>manual</p>
                        </div>
                    </button>
                    <button type='submit' className='body-questions gearbox-questions' onClick={() => setCarGearbox("automatic")}>
                        <div className='question-space-gearbox automatG'>
                            <img src='https://cdn-icons-png.flaticon.com/512/635/635700.png' alt='automatic gearbox icon'/>
                            <p>automatic</p>
                        </div>
                    </button>
                    <button type='submit' className='body-questions gearbox-questions' onClick={() => setCarGearbox("any")}>
                        <div className='question-space-gearbox snyG'>
                            <img src='https://cdn-icons-png.flaticon.com/512/3082/3082942.png' alt='any type of gearbox icon'/>
                            <p>any type</p>
                        </div>
                    </button>
                {/* </input> */}

            </section>

            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(5)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(7)}>
                        next
                    </button>
                    <button className='next-icon' onClick={() => setCurrentComponent(1)}>
                        <i className="fa-solid fa-x" data-bs-toggle="popover" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                </div>
            </section>

            <section className='questions-progress gearbox-progress'>
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

export default Gearbox