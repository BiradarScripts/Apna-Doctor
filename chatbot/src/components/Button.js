import React from "react";

export default function Button(props) {
  let { subject } = props;
  return (
    <>
      <div className="buttonClass mx-2">
        <input type="button" style = {{width:'10vw',backgroundColor:'wheat',color:'black'}} className="btn btn-outline-dark btn-rounded" value={subject} onClick={props.ClickOptions}>
        </input>
      </div>
    </>
  );
}
