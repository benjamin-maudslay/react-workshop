import Header from "./components/Header";
import { useState, useEffect } from "react";
import { PropertyWrapper } from "./components/PropertyWrapper";
import { Modal } from "./components/Modal";

const App = () => {
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    let response = await fetch("./data.json");
    response = await response.json();
    setProperties(response.houses);
  };

  const handleNewProperty = (newData) => {
    setProperties([newData, ...properties]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <Header handleNewProperty={handleNewProperty} />
      <Modal />
      <PropertyWrapper properties={properties} />
    </div>
  );
};

export default App;
