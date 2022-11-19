import React, {useState} from 'react';
// import { Link } from "react-router-dom";
import "../scss/menu.scss";
import CarOusel from './Carousel';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Cars from '../database/car-data-base.json';

const Username = (user) => {
    return "USERONE";
}

const Menu = ({setCurrentComponent}) => {
    const [open, setOpen] = useState(false);


    // const ages = [32, 33, 16, 40];
    // const result = ages.filter(checkAdult);

    // function checkAdult(age) {
    // return age >= 18;
    // }

    const randomCar = ({Cars}) => {
            
        const randomNr = (min, max) => { 
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }
        console.log(randomNr(1, 28));

        // const carDay = () => {
        //     const {cars.id} = randomNr(1, 28)
        // };

        // const carOfTheDay = (Cars.cars).filter(carDay);
        const carOfTheDay = (Cars.cars).filter(() => (Cars.cars).id = randomNr());
        console.log(carOfTheDay)
        // window.onload = randomNr;
    }

    return (
    <>
        <section className='garage-top'>
            Hello {Username()}
        </section>

        <section className='menu-todays-car'>
            {/* <div className='car-presentation'>  */}
                {/* <img className='brand-logo' src='https://upload.wikimedia.org/wikipedia/de/1/1c/Skoda_Logo.svg'/>
                <div className='car-photo'> */}
                    <CarOusel/>
                {/* </div> */}
            {/* </div> */}
            <div className='parameters-box'>
                <div className='car-title'>
                    <div className='title-description'>
                        <p className='car-brand'>SKODA</p>
                        <p className='car-name'>Eniaq IV</p>
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
                            <span className='engine-stats statis'>58,0 kWh</span>
                            <span className='bodytype-stats statis'>electric</span>
                        </div>
                    </div>
                    <div className='box-right'>
                        <span className='car-prize'>200 000</span>
                        <span>PLN *</span>
                    </div>

                </div>
            </div>


            <div className='today-footer'>
                <button className='menu-more-button'
                  onClick={() => setOpen(!open)}
                  aria-controls="more-info"
                  aria-expanded={open}> More</button>
                <Collapse in={open}>
                    <div id="more-info">
                        {/* {(Cars.cars).map((caring, i) => (
                            <div className='class-render' key={i}>
                                <h2 className='car-brand'> {caring.brand}</h2>
                                <h3 className='car-name'> {caring.name}</h3>
                            </div>
                        ))} */}
                        {/* {(Cars.cars).map((i) => ( */}
                            <div className='class-render'>
                                <h2 className='car-brand'> {randomCar.brand}</h2>
                                <h3 className='car-name'> {randomCar.name}</h3>
                            </div>
                        {/* ))} */}
                    </div>
                </Collapse>
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
            {/* <img className='wish-car-logo'/> */}
            <h1>WISH CAR SEARCHER</h1>
            <p>Paweł karpiński 2021</p>
        </section>
    </>
    )
} 

export default Menu;

//onClick={onNextClick}