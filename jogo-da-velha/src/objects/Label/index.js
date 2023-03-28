import React from "react";
import "./styles.css"

const Label = (props) => {
    return (
      <>
        <label htmlFor="">{props.content}</label>
      </>
    )
}

export default Label