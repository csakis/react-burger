import React from "react";
import classes from "./BuildControl.css";
const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button onClick={props.removed} className={classes.Less} disabled={props.disableState}>Less</button>
      <button onClick={props.added} className={classes.More}>
        More
      </button>
    </div>
  );
};

export default buildControl;
