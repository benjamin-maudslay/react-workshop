import { Property } from "./Property";

export const PropertyWrapper = ({ properties = [] }) => {
  return (
    <div className="properties-wrapper">
      {properties.map((value, index) => (
        <Property key={index} contents={value} />
      ))}
    </div>
  );
};
