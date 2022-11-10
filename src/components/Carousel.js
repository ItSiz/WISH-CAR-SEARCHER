import Carousel from 'react-bootstrap/Carousel';
import "../scss/elements/carousel.scss";

function CarOusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iprenders.blob.core.windows.net/base5azs23100905/2X2X.Z9hLdiHPbBTVo-qdMnEIaU9SJBtvQO-_xmeFU6V0sSh2fZLcvDqJPjt-vsdE_XacgVLC3SQlI1FptmNj85K-AEC-688387dayvext_front1080.png"
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
          src="https://iprenders.blob.core.windows.net/base5azs23100905/2X2X.Z9hLdiHPbBTVo-qdMnEIaU9SJBtvQO-_xmeFU6V0sSh2fZLcvDqJPjt-vsdE_XacgVLC3SQlI1FptmNj85K-AEC-688387dayvext_side1080.png"
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
          src="https://iprenders.blob.core.windows.net/base5azs23100905/2X2X.Z9hLdiHPbBTVo-qdMnEIaU9SJBtvQO-_xmeFU6V0sSh2fZLcvDqJPjt-vsdE_XacgVLC3SQlI1FptmNj85K-AEC-688387dayvext_rear1080.png"
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
  );
}

export default CarOusel;