// import React from 'react';
// import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import "../scss/garage.scss";
import CarOusel from './Carousel';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Cars from '../database/car-data-base.json';
import Carousel from 'react-bootstrap/Carousel';

// const API = "http://localhost:3000";
 


const Garage = ({setCurrentComponent}) => {
    const [open, setOpen] = useState(false);
    // const body = cars.name

    // fetch(`http://localhost:3000/cars/`, {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //         "Content-Type": "application/json"
    //       }
    // })
    //     .then(res => res.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.error(err))

    // const [cars,setCars] = useState([]);

    // useEffect(()=> {
    //     fetch("http://localhost:3000/cars")
    //         .then(res => res.json())
    //         .then(json => setCars(json))
    //         .catch(err => console.error(err))

    // }, []);

    // const [open, setOpen] = useState(false);
    // const moreClick = () => {
    //     style={display: none};
    // }

        // Cars.map((cars) => (
        //  <p className='cos'>{cars.name}</p>
        // ))

    return (     
        <>
            <section className='garage-top'>
                Full Car List
                <p>{Cars.cars.find((a)=>a.id===6).id}</p>
                {/* {(Cars.cars).filter(car => car.id===6).map((caring) => (<div>
                    a {caring.name}
                </div>))} */}
            </section>
            <section className='car-render'>
                {(Cars.cars).map((caring) => (
                    <div className='class-render' key={caring.id}>
                        <div className='car-object'>
                            <div className='car-photos'>
                                <img className='brand-logo' src='./brands/skoda_logo.png'/>
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
                                        </div>
                                    </div>
                                    <div className='box-right'>
                                        <span className='car-prize'>{caring.price_min}</span>
                                        <span>PLN *</span>
                                    </div>
                                </div>
                            </div>
                            <div className='today-footer'>
                                <button className='menu-more-button'
                                    onClick={() => setOpen(!open)}
                                    aria-controls="more-info"
                                    aria-expanded={open}> 
                                    More
                                </button>
                                <Collapse in={open}>
                                    <div id="more-info">
                                        <div>
                                            aaxdassa
                                            assasasa
                                            dsadasd
                                            {/* {caring. */}
                                        </div>
                                    </div>
                                </Collapse>
                                <p>The car of the Day</p>
                            </div>
                        </div>    
                            {/* <img className='car-front' src={carz.photo_front}/>
                            <img className='car-side' src={carz.photo_side}/>
                            <img className='car-back' src={carz.photo_back}/> */}
                    </div>
                ))}
                
            </section>




                 {/* {Object.keys(Cars.cars).map((item, i) => (
                    <li key={i}>
                        {/* <span>Car name: {item}</span> */}
                        {/* <span>{Cars.name}</span>
                    </li>
                ))} */}

        {/* <p>{cars.name}</p> */}
        {/* {cars.map((carz) => (
            <p className='cos'>{carz.name}</p>
        ))} */}
        {/* <section className='menu-top'>
                Hello
        </section>
        <section className='menu-todays-car'>
            <CarOusel/>
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
                    <button/>
                </div>
            </div> */}
            {/* <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-bs-target
            </button>
            </p>
            <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
            </div> */}
        {/* </section>


        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>

        click
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
        </Collapse> */}
        </>
    )
}

export default Garage