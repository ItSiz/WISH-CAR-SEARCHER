import React from 'react';
import { Link } from "react-router-dom";
import "../scss/menu.scss";
import CarOusel from './Carousel';
import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Username = (user) => {
    return "USERONE";
}

const Menu = ({setCurrentComponent}) => {
    return (
    <>
        <section className='menu-top'>
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
                {/* <div className='white-box'/> */}
                <div className='car-title'>
                    <div className='title-description'>
                        <p className='car-brand'>SKODA</p>
                        <p className='car-name'>Eniaq IV</p>
                    </div>
                    {/* <img className='like-icon'/> */}
                    <i className="fa-solid fa-heart"></i>
                </div>
                <div className='car-data-box'>
                    <div className='box-left'>
                        <div className='parameters-icons'>
                        {/* <i class="fa-sharp fa-solid fa-engine"></i> */}
                            <img className='engine-icon' src="https://cdn-icons-png.flaticon.com/512/5557/5557346.png"/>
                            <img className='bodytype-icon' src="https://cdn-icons-png.flaticon.com/512/55/55280.png"/>
                        </div>
                        <div className='parameters-datas'>
                            <span className='engine-stats statis'>58,0 kWh</span>
                            <span className='bodytype-stats statis'>city suv</span>
                        </div>
                    </div>
                    <div className='box-right'>
                        <span className='car-prize'>200 000</span>
                        <span>PLN *</span>
                    </div>

                </div>
                <div/>
            </div>
            <div className='today-footer'>
                <button className='menu-more-button'>More</button>
                <p>The car of the Day</p>
            </div>
        </section>

        <section className='menu-nav'>
            <button className='whishlist-button nav-button'>
                {/* <img className='whishlist-icon'/> */}
                <div className='button-inside'>
                    <i className="fa-solid fa-heart"></i>
                    <p>Your Whishlist</p>
                </div>
            </button>
            <button className='whishlist-FullCarList nav-button'>
                <div className='button-inside'>
                    {/* <img className='full-whish-icon'/> */}
                    {/* <i className="fa-solid fa-circle-heart"></i> */}
                    {/* <i className="fa-solid fa-cars"></i>
                    <i className="fa-solid fa-car-garage"></i>
                    <i class="fa-sharp fa-solid fa-cars"></i> */}
                    {/* <i className="fa-solid fa-garage-open"></i>
                    <i class="fa-duotone fa-garage-open"></i>
                    <i class="fa-solid fa-garage-car"></i> */}
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