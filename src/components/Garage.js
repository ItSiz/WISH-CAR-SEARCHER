import React, { useState} from 'react';
import "../scss/garage.scss";
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Cars from '../database/car-data-base.json';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
const Garage = ({setCurrentComponent}) => {
    const [open, setOpen] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const carBrandLabel = () => {
        if (Cars.cars.brand === "Skoda") {
            return "'./brands/skoda_logo.png'"
        } else if (Cars.cars.brand === "BMW") {
            return "'./brands/bmw_logo.png'"
        }
    }

    return (     
        <>
            <section className='garage-top'>
                Full Car List
                {/* <p>{Cars.cars.find((a)=>a.id===6).id}</p> */}
                {/* {(Cars.cars).filter(car => car.id===6).map((caring) => (<div>
                    a {caring.name}
                </div>))} */}
            </section>
            <section className='car-render'>
                {(Cars.cars).map((caring) => (
                    <div className='class-render' key={caring.id}>
                        <div className='car-object'>
                            <div className='car-photos'>
                                <img className='brand-logo' src={caring.logo}/>
                                <div className='car-photo'>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img className="d-block w-100 car-front"
                                            src={caring.photo_front}
                                            alt="Front view"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100 car-side"
                                            src={caring.photo_side}
                                            alt="Side view"/>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img className="d-block w-100 car-back"
                                            src={caring.photo_back}
                                            alt="Back view"/>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                            <div v className='parameters-box'>
                                <div className='car-title'>
                                    <div className='title-description'>
                                        <p className='car-brand'>{caring.brand}</p>
                                        <p className='car-name'>{caring.name}</p>
                                    </div>
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <div className='car-data-box'>
                                    <div className='box-left'>
                                        <div className='parameters-icons'>
                                            <img className='engine-icon para-ico' src="https://cdn-icons-png.flaticon.com/512/5557/5557346.png"/>
                                            <img className='bodytype-icon para-ico' src="https://cdn-icons-png.flaticon.com/512/832/832988.png"/>
                                        </div>
                                        <div className='parameters-datas'>
                                            <span className='engine-stats statis'>{caring.engine.hp_max} {caring.engine.unit}</span>
                                            <span className='bodytype-stats statis'>{caring.engine.type}</span>
                                            <i className="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                    <div className='box-right'>
                                        <span className='car-prize'><p>from</p>{caring.price_min}</span>
                                        <span>PLN *</span>
                                    </div>
                                </div>
                                <Collapse in={open}>
                                    <div id="more-infos">
                                        <div className='more-stats'>
                                            <div className='more-ad'><span>Gearbox</span><p>{caring.engine.gearbox}</p></div>
                                            <div className='more-ad'><span>0/100kmh</span><p>{caring.engine.speed}</p></div>
                                            <div className='more-ad'><span>Segment</span><p>{caring.segment}</p></div>
                                            <div className='more-ad'><span>Body</span><p>{caring.body}</p></div>
                                            <div className='more-ad'><span>Range</span><p>{caring.engine.max_range}km</p></div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className='today-footer'>
                                <button className='menu-more-button'
                                    onClick={() => setOpen(!open)}
                                    aria-controls="more-info"
                                    aria-expanded={open}> 
                                    More
                                </button>      
                            </div>
                        </div>    
                    </div>
                ))}
            </section>
            <section className='floating-exit-to-menu-button'>
                <button className='exit-x' onClick={handleShow}>
                    <i className="fa-solid fa-x fa-exit" data-bs-toggle="popover" data-bs-placement="left" title="Exit to Menu" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
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
        </>
    )
}

export default Garage