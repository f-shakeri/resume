import React, { Component } from "react";
import data from "../data.json"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css"
import "./SkillCards.css";


class Navigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navigation">
        <Navbar  fixed="top"  variant="light">
          <Nav className="mr-auto">
            <Nav.Link href="#about" > <h5>About</h5></Nav.Link>
            <Nav.Link href="#skill"><h5>Skills</h5></Nav.Link>
          </Nav>
          <img
          onClick={this.changeColor}
          className="paint" src={data.icons.paint} />
        </Navbar>
      </div>
    );
  }

  changeColor = () => {
    let myColors = [
      "green", "blue", "yellow", "pink", "gray", "aqua", "magenta", "purple", "lightblue", "red",
    ];
    let  c1 = "", c2 = "", c3 = "";

    c1 = myColors[Math.floor(Math.random() * myColors.length)];
    c2 = myColors[Math.floor(Math.random() * myColors.length)];
    c3 = myColors[Math.floor(Math.random() * myColors.length)];

    while (c2 == c1)
      c2 = myColors[Math.floor(Math.random() * myColors.length)];
    while (c3 == c1 || c3 == c2)
      c3 = myColors[Math.floor(Math.random() * myColors.length)];

    this.props.parent.setState({
      titleColor: c1,
      contentColor: c2,
      bcColor: c3
    });
  };
}

export default Navigation;
