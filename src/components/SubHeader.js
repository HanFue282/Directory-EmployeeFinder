import React from "react";
import "./style.css";


function SubHeader(props) {
    return <h1 className="sub-header">{props.children}</h1>;
  }

export default SubHeader;