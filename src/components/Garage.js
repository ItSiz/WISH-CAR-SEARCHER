// import React from 'react';
import React, { useState } from 'react';
import "../scss/garage.scss";
import CarOusel from './Carousel';
// import App from '../App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


const Garage = ({setCurrentComponent}) => {

    const [open, setOpen] = useState(false);
    // const moreClick = () => {
    //     style={display: none};
    // }
    return (
        <>

        <section className='menu-top'>
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
                    <button/>
                </div>
            </div>
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
        </section>

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
        </Collapse>
        </>
    )
}

export default Garage