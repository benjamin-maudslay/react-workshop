import Title from "./components/Title";
import { Content } from "./components/Content";
import { useState, useEffect } from "react";
import { PropertyWrapper } from "./components/PropertyWrapper";

const App = () => {
  const [properties, setProperties] = useState([])

  const fetchData = async () => {
    let response = await fetch("./data.json")
    response = await response.json()
    setProperties(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Title text="Einstein - Sykes Property Management CMS" />
      <Content text="Welcome to einstein. Here you will find every tool you need to manage properties uploaded to the Sykes site." />
      <PropertyWrapper properties={properties.houses} />
    </div>
  );
};

export default App;
