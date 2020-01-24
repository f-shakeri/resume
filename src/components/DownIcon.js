import React, { Component } from "react";
import data from "../data.json";
import "./DownIcon.css";

const DownIcon = (props) => {
  return (
    <div className="downdiv">
    <a href="#about"> 
    <img className="downbutton" src={props.icon} />
      </a>  
    </div>
  );
};

export default DownIcon