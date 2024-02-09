import Header from "./components/Header";
import { useState, useEffect } from "react";
import { PropertyWrapper } from "./components/PropertyWrapper";

const App = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    let response = await fetch("./data.json");
    response = await response.json();
    setProperties(response.houses);
  };

  const handleNewProperty = (newData) => {
    setProperties([
      ...properties,
      newData
    ])
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header handleNewProperty={handleNewProperty} />
      <PropertyWrapper properties={properties} />
    </div>
  );
};

export default App;
