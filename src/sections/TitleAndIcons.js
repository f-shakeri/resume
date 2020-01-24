import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import DownIcon from "../components/DownIcon";
import { SocialIcon } from "react-social-icons";
import "./TitleAndIcons.css";

class TitleAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage bcColor = { this.props.colors.bcColor } className="first">
          <h1 className="title"
            style = {{
              color : this.props.colors.titleColor
            }}
          >{data.title}</h1>
          <h3
           style = {{
            color : this.props.colors.contentColor
           }}
          >{data.subtitle}</h3>
          <div className="iconss">
            {Object.keys(data.links).map(key => {              
              return <SocialIcon className="icon" url={data.links[key]} />;
            })}
          </div>
            <DownIcon icon={data.icons.button} />
        </Fullpage>
      </div>
    );
  }
}

export default TitleAndIcons;
