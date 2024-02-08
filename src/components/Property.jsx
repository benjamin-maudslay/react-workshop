import propertyImg from "../assets/property-img.svg";

export const Property = ({ contents }) => (
  <div>
    <img src={propertyImg} alt="Property overlooking a countryside view" height="200px" />
    <h3>{contents.name}</h3>
    <p>Sleeps: {contents.sleeps}</p>
    <p>{contents.rating}/5</p>
  </div>
);
