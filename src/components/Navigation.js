import React, { Component } from "react";
import data from "../data.json"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navigation.css"
import "./SkillCards.css";


class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <Navbar  fixed="top"  variant="light">
          <Nav className="mr-auto">
            <Nav.Link href="#about" > <h5>About</h5></Nav.Link>
            <Nav.Link href="#skill"><h5>Skills</h5></Nav.Link>
          </Nav>
          <img
          onClick={this.props.changeColor}
          className="paint" src={data.icons.paint} />
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
