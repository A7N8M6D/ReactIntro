import React from "react";
import "./Button.css";

const Button = ({ name, selectedTopic, handleSelect }) => {
  const isSelected = name === selectedTopic;

  const handleClick = () => {
    console.log("Clicked")
    handleSelect(name);
  };

  return (
    <button
      onClick={handleClick}
      className={`${isSelected ? "active" : ""} p-3 Btn`}
    >
      {name}
    </button>
  );
};

export default Button;
