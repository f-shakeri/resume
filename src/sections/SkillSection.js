import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCards"


class SkillSection extends Component {
  render() {
    return (
      <div id="skill">
      <Fullpage bcColor = { this.props.colors.bcColor } className="third">
        <h3
          style = {{
            color : this.props.colors.titleColor
          }}
        >{data.sections[1].title}</h3>
        <div className="cards-wrapper"
          style={{
            color : this.props.colors.contentColor
          }}
        >
          {data.sections[1].item.map(eachSkill => {
            return (
             <SkillCard skill={eachSkill} />
            );
          })}
        </div>
      </Fullpage>
      </div>
    );
  }
}

export default SkillSection;
