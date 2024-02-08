import { Property } from "./Property";

export const PropertyWrapper = ({ properties = [] }) => {
  return (
    <div>
      {properties.map((value, index) => (
        <Property key={index} contents={value} />
      ))}
    </div>
  );
};
