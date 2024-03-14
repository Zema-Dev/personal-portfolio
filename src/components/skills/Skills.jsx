import React from "react";
import "./Skills.css";
import Python from "../../assets/images/Python.png";
import Flutter from "../../assets/images/flutter.png";
import Ubuntu from "../../assets/images/ubuntu.png";
import Git from "../../assets/images/git.png";
import Erpnext from "../../assets/images/erpnext.png";
import Mongodb from "../../assets/images/mongodb.png";
import HtmlCss from "../../assets/images/htmlCss.png";
import Js from "../../assets/images/js.png";
import Frappe from "../../assets/images/frappe.png";
import Net from "../../assets/images/net.png";
import Flask from "../../assets/images/flask.png";
import Mysql from "../../assets/images/mysql.png";
import Aws from "../../assets/images/aws.png";

const Skills = () => {
  const skills = [
    [
      { name: "Python", img: Python },
      { name: "Flutter", img: Flutter },
      { name: "Ubuntu", img: Ubuntu },
      { name: "Git Source Control", img: Git },
    ],
    [
      { name: "ERPNext", img: Erpnext },
      { name: "Mongodb", img: Mongodb },
      { name: "Html & Css", img: HtmlCss },
      { name: "javaScript", img: Js },
    ],
    [
      { name: "Frappe", img: Frappe },
      { name: ".Net", img: Net },
      { name: "Flask Microweb Framework", img: Flask },
    ],
    [
      { name: "MySql", img: Mysql },
      { name: "AWS Sever", img: Aws },
    ],
  ];

  const renderSkills = (skills) => {
    return skills.map((skillRow, index) => (
      <div
        className={`main-skills main-skills-row-${skillRow.length}`}
        key={index}
      >
        {skillRow.map((skill, index) => (
          <div className="main-column" key={index}>
            <div className="main-column-img">
              <img src={skill.img} alt={skill.name} />
            </div>
            <div className="main-column-text">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return renderSkills(skills);
};

export default Skills;
