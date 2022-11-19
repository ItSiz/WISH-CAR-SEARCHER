import Carousel from 'react-bootstrap/Carousel';
import "../scss/elements/carousel.scss";

function CarOusel() {
  return (
    <>
    <img className='brand-logo' src='./brands/skoda_logo.png'/>
    <div className='car-photo'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://iprenders.blob.core.windows.net/base5azs23100905/2X2X.Z9hLdiHPbBTVo-qdMnEIaU9SJBtvQO-_xmeFU6V0sSh2fZLcvDqJPjt-vsdE_XacgVLC3SQlI1FptmNj85K-AEC-688387dayvext_front1080.png"
          src='https://wisg-car-database.netlify.app/audi/e-tron_front.png'
          alt="Front view"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://iprenders.blob.core.windows.net/base5azs23100905/2X2X.Z9hLdiHPbBTVo-qdMnEIaU9SJBtvQO-_xmeFU6V0sSh2fZLcvDqJPjt-vsdE_XacgVLC3SQlI1FptmNj85K-AEC-688387dayvext_side1080.png"
          src='https://wisg-car-database.netlify.app/audi/e-tron_side.png'
          alt="Side view"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="./skoda/Superb_sedan_back.png"
          src="https://wisg-car-database.netlify.app/audi/e-tron_back.png"
          alt="Back view"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default CarOusel;