// import { Button } from 'bootstrap';
import React, { useState} from 'react';
import "../scss/questions_scss/_2_body_type.scss";
// import ProgressBar from './Progress_bar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BodyType = ({setCurrentComponent, handleChange, body}) => {
    const [carBody, setCarBody] = useState(body);
    const toogleListElement = (body) => {
        const newBodyIndex = carBody.indexOf(body)
        if(newBodyIndex===-1) {
            setCarBody([...carBody, body])
        } else {
            const newBody = [...carBody]
            newBody.splice(newBodyIndex, 1)
            setCarBody(newBody)
        }

    }
    console.log(carBody)
    const onNextClick = () => {
        handleChange(carBody)
        setCurrentComponent(4)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='menu-top menu-segments'>
                SELECT BODYTYPES
            </section>

            <section className='questions-body bodytype-body'>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("hatchback")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55198.png' alt='hatchback-icon'/>
                        <p>hatchback</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("sedan")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55283.png' alt='sedan-icon'/>
                        <p>sedan</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("combi")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55183.png' alt='combi-icon'/>
                        <p>combi</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("coupe")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55180.png' alt='coupe-icon'/>
                        <p>coupe</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("cabrio")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55195.png' alt='cabrio-icon'/>
                        <p>cabrio</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("sport")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55168.png' alt='sport-icon'/>
                        <p>sport</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("minivan")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55349.png' alt='minivan-icon'/>
                        <p>minivan</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("suv")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55280.png' alt='suv-icon'/>
                        <p>suv</p>
                    </button>
                </div>
                <div className='body-question-row'>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("off-road")}>
                        <img src='https://cdn-icons-png.flaticon.com/512/55/55230.png' alt='off-road-icon'/>
                        <p>off-road</p>
                    </button>
                    <button className='body-questions class-hatchback' onClick={() => toogleListElement("pickup")}>
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