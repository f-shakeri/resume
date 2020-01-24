import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";

class AboutSection extends Component {
  render() {
    return(
      <div id="about">
      <Fullpage bcColor = { this.props.colors.bcColor } className="second">
          <h3
            style = {{
              color : this.props.colors.titleColor
            }}
          >{data.sections[0].title}</h3>
          <p
            style={{
              margin:"10px",
              color : this.props.colors.contentColor
            }}
          >{data.sections[0].item[0].content}</p>
    </Fullpage>
    </div>
    )
  
  }
}

export default AboutSection;
