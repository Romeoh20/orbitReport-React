import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";
import { useState } from 'react'

function App() {
  // state is used to render certain components in satData
  const [sat,setSat] = useState(satData);
  //displaySats is used for creating the three buttons based on orbit type.
  //Set is used to loop through satData without pushing duplicate data into it.
  //map is used to loop through the data to get the orbit type for Set
  const displaySats = [...new Set(satData.map((data) =>
  data.orbitType))];
  //filterByType filters through the data in satData to assign the data to the right 
  //button once it is clicked on the website. 
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <div>
      <Banner />
      <Buttons
       filterByType = {filterByType}
       setSat = {setSat} 
       displaySats = {displaySats}
       />
      <Table sat={sat} />
    </div>
  );
}

export default App;
