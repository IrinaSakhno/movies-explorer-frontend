import React from "react";
import "./StackItem.css";

const StackItem = ({ title }) => {
  return <li className="stack-item">{title}</li>;
};

export default StackItem;
