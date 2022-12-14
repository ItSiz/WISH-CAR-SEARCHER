import React, { useState, useEffect } from 'react';
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
import Cars from './database/car-data-base.json';


const App = () => {
  const [filterOptions, setFilterOptions] = useState({
    selectedSegments: [],
    selectedBody: [],
    selectedFuel: [],
  })
  const [currentComponent, setCurrentComponent] = useState(0);
  const [componentToDisplay, setComponentToDisplay] = useState(<Loading setCurrentComponent={setCurrentComponent} />);
  const [selectedCars, setSelectedCars] = useState([])

  const setSelectedSegments = (selectedSegments) => {
        // console.log(selectedSegments)
    setFilterOptions({...filterOptions, ...{selectedSegments}})
  }
  const setSelectedBody = (selectedBody) => {
    // console.log(selectedBody)
    setFilterOptions({...filterOptions, ...{selectedBody}})
  }
  const setSelectedFuel = (selectedFuel) => {
    // console.log(selectedFuel)
    setFilterOptions({...filterOptions, ...{selectedFuel}})
  }
  const getFilteredCars = () => {
    const filteredCards = Cars.cars.filter((car) => {
      return filterOptions.selectedSegments.includes(car.segment) 
      // && filterOptions.selectedBody.includes(car.body) && filterOptions.selectedFuel.includes(car.fuels)
      // &&
      // filterOptions.gearbox === car.gearbox
    })
    return filteredCards
  }

  const onSelectedFiltersCompleted = async (seletedBudget) => {
    await setFilterOptions({...filterOptions, ...{seletedBudget}})
    setSelectedCars(getFilteredCars())
  }
 

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
      setComponentToDisplay(<Segments setCurrentComponent={setCurrentComponent} segments={filterOptions.selectedSegments} handleChange={setSelectedSegments}/>);
    } 
    else if (currentComponent === 3) {
      setComponentToDisplay(<BodyType setCurrentComponent={setCurrentComponent} bodys={filterOptions.selectedBody} handleChange={setSelectedBody}/>);
    }
    else if (currentComponent === 4) {
      setComponentToDisplay(<Fuel setCurrentComponent={setCurrentComponent} fuels={filterOptions.selectedFuel} handleChange={setSelectedFuel}/>);
    }
    else if (currentComponent === 5) {
      setComponentToDisplay(<Power setCurrentComponent={setCurrentComponent}/>);
    }
    else if (currentComponent === 6) {
      setComponentToDisplay(<Gearbox setCurrentComponent={setCurrentComponent}/>);
    }
    else if (currentComponent === 7) {
      setComponentToDisplay(<Budget setCurrentComponent={setCurrentComponent}  budget={filterOptions.selectedBudget} handleChange={onSelectedFiltersCompleted} />);
    }
    else if (currentComponent === 8) {
      setComponentToDisplay(<Loading setCurrentComponent={setCurrentComponent}/>);
      setTimeout(() => {setCurrentComponent(9);}, 2000);
    }
    else if (currentComponent === 9) {
      setComponentToDisplay(<Results setCurrentComponent={setCurrentComponent} selectedCars={selectedCars}/>);
      
    }
    else if (currentComponent === 10) {
      setComponentToDisplay(<Garage setCurrentComponent={setCurrentComponent}/>);
    }
  }, [currentComponent]);


  return (
    <>
      {/* <Loading/> */}
      <div>
        {/* <div>{filterOptions.selectedBody.join(', ')}</div> */}
        {componentToDisplay}
      </div>
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
