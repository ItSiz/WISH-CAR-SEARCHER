import React, { useState } from 'react';
import "../scss/questions_scss/_5_gearbox.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Gearbox = ({setCurrentComponent}, {handleChange} ) => {
    const [carGearbox, setCarGearbox] = useState("");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT GEARBOX
            </section>

            <section className='questions-body gearbox-body'>
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
            </section>

            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(5)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => setCurrentComponent(7)}>
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