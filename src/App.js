import React, { Component } from "react";
import TitleAndIcons from "./sections/TitleAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";
import SnowStorm from "react-snowstorm";
import "./App.css";

class App extends Component {

  myColors = [
    "green", "blue", "yellow", "pink", "gray", "aqua", "magenta", "purple", "lightblue", "red",
  ]

  constructor(props) {
    super(props);
    this.state = {
      titleColor: "gray",
      contentColor: "aqua",
      bcColor: "pink"
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    let c1 = this.myColors[Math.floor(Math.random() * this.myColors.length)];
    let c2 = this.myColors[Math.floor(Math.random() * this.myColors.length)];
    let c3 = this.myColors[Math.floor(Math.random() * this.myColors.length)];

    this.setState({
      titleColor: c1,
      contentColor: c2,
      bcColor: c3
    });
  };

  render() {
    return (
      <div className="App">
        <SnowStorm />
        <Navigation changeColor = {this.changeColor} />
        <TitleAndIcons colors = {this.state}/>
        <AboutSection colors = {this.state}/>
        <SkillSection colors = {this.state} />
      </div>
    );
  }
}

export default App;
