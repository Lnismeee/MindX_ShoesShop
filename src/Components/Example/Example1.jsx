import React from "react";
import "./styles.css";
import data from "./data";
import { NavLink } from "react-router-dom";
const Example1 = () => {
    return (
        <div id="example">
            {data.map(({ name, icon, link }, index) => (
                <NavLink to={link} target="_blank">
                    <div className="item" key={index}>
                    <img src={icon} alt="" className="itemE" />
                    <p>{name}</p>
                </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Example1;
