import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/app.scss";
import Menu from './components/Menu';
import Segments from './components/1_Segments';
import BodyType from './components/2_Body_Type';
import Fuel from './components/3_Fuel';
import Power from './components/4_Power';
import Gearbox from './components/5_Gearbox';
import Budget from './components/6_Budget';
import React, { useState, useEffect, Fragment } from 'react';
// import { Routes, Route, Link } from "react-router-dom";

const App = () => {

  const [currentComponent, setCurrentComponent] = useState(1);
  const [componentToDisplay, setComponentToDisplay] = useState(<Menu setCurrentComponent={setCurrentComponent} />);

  useEffect(() => {
    if(currentComponent === 1) {
      setComponentToDisplay(<Menu setCurrentComponent={setCurrentComponent} />);
    }
    else if(currentComponent === 2) {
      setComponentToDisplay(<Segments setCurrentComponent={setCurrentComponent}/>);
    } 
    else if (currentComponent === 3) {
      setComponentToDisplay(<BodyType setCurrentComponent={setCurrentComponent}/>);
    }
    else if (currentComponent === 4) {
      setComponentToDisplay(<Fuel setCurrentComponent={setCurrentComponent}/>);
    }
    else if (currentComponent === 5) {
      setComponentToDisplay(<Power setCurrentComponent={setCurrentComponent}/>);
    }
    else if (currentComponent === 6) {
      setComponentToDisplay(<Gearbox setCurrentComponent={setCurrentComponent}/>);
    }
    else if (currentComponent === 7) {
      setComponentToDisplay(<Budget setCurrentComponent={setCurrentComponent}/>);
    }
  }, [currentComponent]);


  return (
    <>
      {componentToDisplay}
      {/* <Menu/>
      <Segments/>
      <BodyType/>
      <Fuel/>
      <Power/>
      <Gearbox/>
      <Budget/> */}
      </>

  )
}

export default App;
