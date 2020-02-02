import React, { Component } from "react";
import TitleAndIcons from "./sections/TitleAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";
import SnowStorm from "react-snowstorm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleColor: "gray",
      contentColor: "aqua",
      bcColor: "pink"
    };
  }

  render() {
    return (
      <div className="App">
        <SnowStorm />
        <Navigation parent = {this} />
        <TitleAndIcons colors = {this.state} />
        <AboutSection colors = {this.state} />
        <SkillSection colors = {this.state} />
      </div>
    );
  }
}

export default App;