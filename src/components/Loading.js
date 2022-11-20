import "../scss/elements/loading.scss"
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
return (
    <>
        <section className="loading-page">
            <div className="Wish-Car-Logo">
                <img src="./logo512.png"/>
            </div>
            <div className="App-name">
                <h1>WISH CAR</h1>
                <div className="name-bottom">
                    <span className="le-triangle triangle-left"/>
                    <h2>SEARCHER</h2>
                    <span className="le-triangle triangle-right"/>
                </div>
            </div>
            <div className="loading-spinner">
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            <div className="app-info">
                <p>Powered by Paweł Karpiński</p>
                <p>V026.2022.11</p>
            </div>

        </section>
    </>
)
}

export default Loading