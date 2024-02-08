import propertyImg from "../assets/property-img.svg";

export const Property = ({ contents }) => (
  <div className="property-wrapper">
    <div className="property-image-wrapper">
      <img src={propertyImg} alt="Property overlooking a countryside view" height="200px" width="200px" />
    </div>
    <div className="property-text-wrapper">
      <div>
        <h3>{contents.name}</h3>
        <p>Sleeps: {contents.sleeps}</p>
      </div>
      <div className="property-text-inner">
        <p>{contents.rating}/5</p>
      </div>
    </div>
  </div>
);
