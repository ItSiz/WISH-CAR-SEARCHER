import React, {useState} from 'react';
// import { Link } from "react-router-dom";
import "../scss/menu.scss";
import CarOusel from './Carousel';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Cars from '../database/car-data-base.json';

const Username = (user) => {
    return "USERONE";
}

const getRandomNr = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const randomCarIndex = getRandomNr(1, 28);

const Menu = ({setCurrentComponent}) => {
    const [open, setOpen] = useState(false);

    const carOfTheDay = Cars.cars[randomCarIndex]

    
    return (
    <>
        <section className='menus-up'>
            Hello {Username()}
        </section>

        <section className='menu-todays-car'>
            <div className='car-photos menu-car'>
                <img className='brand-logo' src={carOfTheDay.logo}/>
                <div className='car-photo'>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100 car-front"
                            src={carOfTheDay.photo_front}
                            alt="Front view"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 car-side"
                            src={carOfTheDay.photo_side}
                            alt="Side view"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 car-back"
                            src={carOfTheDay.photo_back}
                            alt="Back view"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='parameters-box'>
                <div className='car-title'>
                    <div className='title-description'>
                        <p className='car-brand'>{carOfTheDay.brand}</p>
                        <p className='car-name'>{carOfTheDay.name}</p>
                    </div>
                    <i className="fa-solid fa-heart"></i>
                </div>
                <div className='car-data-box'>
                    <div className='box-left'>
                        <div className='parameters-icons'>
                            <img className='engine-icon' src="https://cdn-icons-png.flaticon.com/512/5557/5557346.png"/>
                            <img className='bodytype-icon' src="https://cdn-icons-png.flaticon.com/512/832/832988.png"/>
                        </div>
                        <div className='parameters-datas'>
                            <span className='engine-stats statis'>{carOfTheDay.engine.hp_max} {carOfTheDay.engine.unit}</span>
                            <span className='bodytype-stats statis'>{carOfTheDay.engine.type.join(', ')}</span>
                        </div>
                    </div>
                    <div className='box-right'>
                        <span className='car-prize'><p>from</p>{carOfTheDay.price_min}</span>
                        <span>PLN *</span>
                    </div>
                </div>
                {/* <div className='xd'>
                <Collapse in={open}>
                    <div id="more-infos">
                        <div className='more-stats'>
                            <div className='more-ad'><span>Gearbox</span><p>{carOfTheDay.engine.gearbox}</p></div>
                            <div className='more-ad'><span>0/100kmh</span><p>{carOfTheDay.engine.speed}</p></div>
                            <div className='more-ad'><span>Segment</span><p>{carOfTheDay.segment}</p></div>
                            <div className='more-ad'><span>Body</span><p>{carOfTheDay.body}</p></div>
                            <div className='more-ad'><span>Range</span><p>{carOfTheDay.engine.max_range}km</p></div>
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

                    </div> */}
            </div>
                <Collapse in={open}>
                    <div id="more-infos">
                        <div className='more-stats'>
                            <div className='more-ad'><span>Gearbox</span><p>{carOfTheDay.engine.gearbox}</p></div>
                            <div className='more-ad'><span>0/100kmh</span><p>{carOfTheDay.engine.speed}</p></div>
                            <div className='more-ad'><span>Segment</span><p>{carOfTheDay.segment}</p></div>
                            <div className='more-ad'><span>Body</span><p>{carOfTheDay.body}</p></div>
                            <div className='more-ad'><span>Range</span><p>{carOfTheDay.engine.max_range}km</p></div>
                        </div>
                    </div>
                </Collapse>
            <div className='today-footer'>
                <button className='menu-more-button'
                  onClick={() => setOpen(!open)}
                  aria-controls="more-info"
                  aria-expanded={open}> 
                  More
                </button>
                <p>The car of the Day</p>    
            </div>
        </section>

        <section className='menu-nav'>
            <button className='whishlist-button nav-button'>
                <div className='button-inside'>
                    <i className="fa-solid fa-heart"></i>
                    <p>Your Whishlist</p>
                </div>
            </button>
            <button className='whishlist-FullCarList nav-button' onClick={() => setCurrentComponent(10)}>
                <div className='button-inside'>
                    <img src='https://cdn-icons-png.flaticon.com/512/1295/1295093.png'/>
                    <p>Full Car List</p>
                </div>
            </button>
        </section>

        <section className='menu-start-searcher'>
            <button className='searching-start-button' onClick={() => setCurrentComponent(2)}>START</button>
            <h1>WISH CAR SEARCHER</h1>
            <p>Paweł karpiński 2021</p>
        </section>
    </>
    )
} 

export default Menu;

//onClick={onNextClick}