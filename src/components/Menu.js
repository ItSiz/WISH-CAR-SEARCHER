import React, {useState} from 'react';
// import { Link } from "react-router-dom";
import "../scss/menu.scss";
import CarOusel from './Carousel';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
// import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Username = (user) => {
    return "USERONE";
}

const Menu = ({setCurrentComponent}) => {
    const [open, setOpen] = useState(false);

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
                <button className='menu-more-button'
                  onClick={() => setOpen(!open)}
                  aria-controls="more-info"
                  aria-expanded={open}> More</button>
        <Collapse in={open}>
            <div id="more-info">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
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