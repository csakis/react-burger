import React, { Fragment } from "react";
const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(x => (
    <li key={x}>
      <span style={{ textTransform: "capitalize" }}>{x}</span>:{" "}
      {props.ingredients[x]}
    </li>
  ));
  return (
    <Fragment>
      <h3>Order Summary</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingSummary}</ul>
      <p>Continue to checkout!</p>
    </Fragment>
  );
};

export default orderSummary;
