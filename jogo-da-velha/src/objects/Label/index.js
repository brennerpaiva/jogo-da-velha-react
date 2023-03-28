import React from "react";
import "./styles.css"

const Label = (props) => {
    return (
      <>
        <label htmlFor="" className="label">{props.content}</label>
      </>
    )
}

export default Label