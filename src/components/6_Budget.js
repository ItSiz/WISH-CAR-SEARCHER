import React, { useState } from 'react';
import "../scss/questions_scss/_6_budget.scss";
import { round } from "@thomasloven/round-slider";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Budget = ({setCurrentComponent}) => {
    const [carBudgetLow, setCarBudgetLow] = useState("")
    const [carBudgetHigh, setCarBudgetHigh] = useState("")
    window.addEventListener('value-changed', (event)=>{console.log(event)});
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
            <section className='menu-top menu-segments'>
                CHOOSE YOUR BUDGET
            </section>

            <section className='questions-body budget-body'>
                {/* <div className="form-group">
                    <label for="formControlRange"/>
                    <input type="range" className="form-control-range" i="formControlRange"/>
                </div>
                <input type="range" className="c-rng" min="0" max="360" step="1" value="75" data-range="circular" />
             */}

                <round-slider
                    low="5"
                    high="40"
                    class="highlow"
                    highLabel="High"
                    lowLabel="Low"
                    handleZoom="2"
                    className="budget-slider"
                    handleSize="10"
                    arclength="180"
                    startangle="90"
                    style={{ 
                        "--round-slider-bar-color" : "#FEA01E",
                        "--round-slider-path-width": 30,
                        "--round-slider-handle-color" : "#242323",
                        "--round-slider-path-color": "#737373",
                        "width": "240px",
                        "position": "absolute",
                        "right": "20px"}}/>

                <div className='budget-indicators'>
                    <p>50K</p>
                    <p>100K</p>
                    <p>150K</p>
                    <p>200K</p>
                    <p>250K</p>
                </div>
                <div className='quote-counter'>
                    <div className='amount max'>
                        <h2>max</h2>
                        <h1>100000</h1>
                        <h2>PLN</h2>
                    </div>
                    <div className='amount min'>
                        <h2>min</h2>
                        <h1>50000</h1>
                        <h2>PLN</h2>
                    </div>
                </div>
            </section>



            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(6)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(8)}>
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

            <section className='questions-progress budget-progress'>
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

export default Budget