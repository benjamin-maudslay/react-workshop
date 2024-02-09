export const Property = ({ contents }) => (
  <div className="property-wrapper">
    <div className="property-image-wrapper">
      <img src={contents.img} alt="Property" height="200px" width="200px" />
    </div>
    <div className="property-text-wrapper">
      <div>
        <h3>{contents.name}</h3>
        <p>Sleeps: {contents.sleeps}</p>
      </div>
      <div className="property-text-inner">
        <p>{contents.rating}/5</p>
        {!contents.available && <p>UNAVAILABLE</p>}
      </div>
    </div>
  </div>
);
