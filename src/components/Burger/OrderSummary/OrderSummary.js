import React, { Fragment } from "react";
import Button from "../../UI/Button/Button";
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
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Fragment>
  );
};

export default orderSummary;
