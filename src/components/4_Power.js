import React, { useState} from 'react';
import "../scss/questions_scss/_4_power.scss";
// import ProgressBar from './Progress_bar';
import { round } from "@thomasloven/round-slider";
// import Logo from '../../assets/Logo_car.png';
// import Logo from '.../assets/Logo_car.png';
// import favicon from '../../public/favicon.ico';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Power = ({setCurrentComponent}) => {
    const [value, setValue] = useState(0);
    const [low, setLow] = useState("");
    const [high, setHigh] = useState("");
    window.addEventListener('value-changed', (event)=>{console.log(event)});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='menu-top menu-segments'>
                CHOSE THE ENGINE POWER
            </section>

            <section className='questions-body power-body'>
                <round-slider
                    low="10"
                    high="50"
                    class="highlow"
                    highLabel="High"
                    lowLabel="Low"
                    handleZoom="2"
                    className="slider"
                    handleSize="10"
                    style={{ 
                        "--round-slider-bar-color" : "#FEA01E",
                        "--round-slider-path-width": 30,
                        "--round-slider-handle-color" : "#242323",
                        "--round-slider-path-color": "#737373",}}
                    // onChange={(low)=>setLow(low)}

                    />

                <div className='slider-center'>
                    <div className='circle'/>
                    <img className='pitson' src='./icons/pits_icon.png'/>
                </div>

                <div className='power-counter'>
                    <div className='counter-value'>
                        <p>min</p>
                        <div className='counter-box'>
                            <p className='km-value'>
                                {low} km
                            </p>
                            <p className='kWh-value'>
                                {low} kWh
                            </p>
                        </div>
                    </div>
                    <div className='counter-value'>
                        <p>max</p>
                        <div className='counter-box'>
                            <p className='km-value'>
                                {high} km
                            </p>
                            <p className='kWh-value'>
                                {high} kWh
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(4)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(6)}>
                        next
                    </button>
                    <button className='next-icon' onClick={handleShow}>
                    <i className="fa-solid fa-x" data-bs-toggle="popover" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                </button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className='button-to-menu'>
                    <Modal.Body className='modal-text'> 
                        Do You want to cancel your dream car search and return to the MENU?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='close-button' onClick={handleClose}> Close </Button>
                        <Button className='exit-button' onClick={() => setCurrentComponent(1)}>Exit to Menu</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </section>

            <section className='questions-progress power-progress'>
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

export default Power