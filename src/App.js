import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/app.scss";
import Menu from './components/Menu';
import Segments from './components/1_Segments';
import BodyType from './components/2_Body_Type';
import Fuel from './components/3_Fuel';
import Power from './components/4_Power';
import Gearbox from './components/5_Gearbox';
import Budget from './components/6_Budget';
import Results from './components/7_Results';
import Garage from './components/Garage';
import Loading from './components/Loading';

// import { Routes, Route, Link } from "react-router-dom";


const App = () => {

  const [currentComponent, setCurrentComponent] = useState(0);
  const [componentToDisplay, setComponentToDisplay] = useState(<Loading setCurrentComponent={setCurrentComponent} />);

  // const timer1 = setTimeout(() => {setCurrentComponent(1);}, 1000);

  // const timer1 = setTimeout(() => {setCurrentComponent(1);}, 100);
  // clearTimeout(timer1);
  // const timer2 = setTimeout(() => {clearTimeout(timer1);}, 1000);
  // clearTimeout(timer1)
  // const timeReset = (timer1) => {
  //   if (setCurrentComponent >= 1) {
  //     clearTimeout(timer1)
  //   }
  // }
 
//   const timeReset = () => {
//     if (setCurrentComponent === 0) {
//       setTimeout(() => {setCurrentComponent(1);}, 1000);
//     } else {
//       clearTimeout()
//       console.log("clear")
//     }
//   }
//  const timer = setTimeout(timeReset(), 10);

  useEffect(() => {
    if(currentComponent === 0) {
      setComponentToDisplay(<Loading setCurrentComponent={setCurrentComponent} />)
      setTimeout(() => {setCurrentComponent(1);}, 2500);
    }
    else if(currentComponent === 1) {
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
    else if (currentComponent === 8) {
      setComponentToDisplay(<Results setCurrentComponent={setCurrentComponent}/>);
    }
    // else if (currentComponent === 9) {
    //   setComponentToDisplay(<Favourites setCurrentComponent={setCurrentComponent}/>);
    // }
    else if (currentComponent === 10) {
      setComponentToDisplay(<Garage setCurrentComponent={setCurrentComponent}/>);
    }
  }, [currentComponent]);


  return (
    <>
      {/* <Loading/> */}
      {componentToDisplay}
      {/* <Menu/> */}
      {/* <Segments/> */}
      {/* <BodyType/> */}
      {/* <Fuel/> */}
      {/* <Power/> */}
      {/* <Gearbox/> */}
      {/* <Budget/> */}
      {/* <Results/> */}
      {/* <RoundSlider/> */}
      {/* <Garage/> */}
      </>

  )
}

export default App;
