import React, { useState } from 'react';
import "../scss/questions_scss/_1_segmets.scss";
import CarOusel from './Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Results = ({setCurrentComponent}) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <section className='menu-top menu-segments'>
            YOUR RESULTS
        </section>
        <section className='menu-todays-car'>
                    <div className='firstcar'>
                        <CarOusel/>
                    </div>
        </section>
        <section className='questions-body'>
        </section>

        <section className='questions-bottom'>



        <section className='exit-to-menu-button'>
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

        </section>
        
        {/* <i className="fa-solid fa-x" data-bs-toggle="popover" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?" 
        style={{"top": "200px", "position": "fixed"}}> </i> */}
        
        </section>
        
        </>
    )
}

export default Results