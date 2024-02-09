import React, { useState } from "react";

const sleepsOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddNewProperty = ({ handleNewProperty }) => {
  const [name, setName] = useState("");
  const [sleeps, setSleeps] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleAdd = () => {
    handleNewProperty({
      name,
      sleeps,
      available,
      img: "vite.svg",
    });
  };

  return (
    <form className="form-wrapper" onSubmit={handleAdd}>
      <div>
        <label htmlFor="name">Name:</label>
        <label htmlFor="sleeps">Sleeps:</label>
        <label htmlFor="available">Available:</label>
      </div>
      <div>
        <input
          className="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter property name"
        />
        <select
          className="form-select"
          name="sleeps"
          id="sleeps"
          value={sleeps}
          onChange={(e) => setSleeps(e.target.value)}
        >
          {sleepsOptions.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>

        <input
          type="checkbox"
          name="available"
          id="avail"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />
      </div>
      <button className="add-button" type="submit">
        Add new
      </button>
    </form>
  );
};

export default AddNewProperty;
