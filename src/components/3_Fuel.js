import React, { useState } from 'react';
// import React, { useState, useEffect, Fragment } from 'react';
import "../scss/questions_scss/_3_fuel.scss";
// import ProgressBar from './Progress_bar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Fuel = ({setCurrentComponent, handleChange, fuels}) => {
    const [carFuel, setCarFuel] = useState(fuels)
    const toogleListElement = (fuel) => {
        const newFuelIndex = carFuel.indexOf(fuel)
        if(newFuelIndex===-1) {
            setCarFuel([...carFuel, fuel])
        } else {
            const newFuels = [...carFuel]
            newFuels.splice(newFuelIndex, 1)
            setCarFuel(newFuels)
        }
    }
    console.log(carFuel);
    const onNextClick = () => {
        handleChange(carFuel)
        setCurrentComponent(5)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT THE TYPE OF FUEL
            </section>

            <section className='questions-body fuel-body'>
                <button className='body-questions fuel-questions' onClick={() => toogleListElement("petrol")}>
                    <div className='question-space-fuel petrol-fuel'>
                        <img src='https://wisg-car-database.netlify.app/icons/95icon.png' alt='petrol icon'/>
                        <p>petrol</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions' onClick={() => toogleListElement("diesel")}>
                    <div className='question-space-fuel diesel-fuel'>
                        <img src='https://wisg-car-database.netlify.app/icons/ONicon.png' alt='diesel icon'/>
                        <p>diesel</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions' onClick={() => toogleListElement("hybrid")}>
                    <div className='question-space-fuel hybrid-fuel'>
                        <img src='https://t4.ftcdn.net/jpg/04/74/63/63/360_F_474636324_LJrUMpEfBUf5lQDvXdH5hDMJINYfCSFa.jpg' alt='hybrid icon'/>
                        <p>hybrid</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions' onClick={() => toogleListElement("electric")}>
                    <div className='question-space-fuel electric-fuel'>
                        <img src='https://i.pinimg.com/originals/a4/4e/48/a44e483f3e006cdffeea9888bfb054a6.png' alt='electric icon'/>
                        <p>electric</p>
                    </div>
                </button>
                <button className='body-questions fuel-questions' onClick={() => toogleListElement("alternative")}>
                    <div className='question-space-fuel alternative-fuel'>
                        <img src='https://static.vecteezy.com/system/resources/previews/002/416/506/non_2x/international-biodiesel-day-10-august-for-ecology-and-environmental-help-the-world-with-eco-friendly-ideas-free-vector.jpg' alt='alternative icon'/>
                        <p>alternative</p>
                    </div>
                </button>
            </section>
                
            <section className='questions-bottom'>
                <div className='buttons-section'>
                    <button className='next-icon' onClick={() => setCurrentComponent(3)}>
                        <i className="fa-solid fa-arrow-left" data-bs-toggle="popover" title="Previous page" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
                    </button>
                    <button className='next-buton' onClick={() => onNextClick()}>
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

            <section className='questions-progress fuel-progress'>
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

export default Fuel