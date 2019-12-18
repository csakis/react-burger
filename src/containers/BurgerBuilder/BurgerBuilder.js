import React, { Fragment, Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 4,
  meat: 13,
  bacon: 7
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 0,
    purchasable: false,
    isOrdered: false
  };

  updatePurchaseState() {
    const ingredients = { ...this.state.ingredients };
    const sum = Object.keys(ingredients)
      .map(igKey => INGREDIENT_PRICES[igKey] * ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      { totalPrice: newPrice, ingredients: updatedIngredients },
      () => {
        this.updatePurchaseState();
      }
    );
    // this.setState(prevState => ({...prevState,
    //     prevState.ingredients[type]:...prevState.ingredients,
    //     [type]: ingredients[type]+1,

    // totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]}
    //      ))
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount > 0 ? oldCount - 1 : 0;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice =
      oldPrice - priceAddition > 0 ? oldPrice - priceAddition : 0;
    this.setState(
      { totalPrice: newPrice, ingredients: updatedIngredients },
      () => {
        this.updatePurchaseState();
      }
    );
  };

  isOrderedHandler = () =>{
    // const ordered = this.state.purchasable;
    this.setState({ isOrdered: true });
  }
  modalHandler = () =>{
    // const ordered = this.state.purchasable;
    this.setState({ isOrdered: false });
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Fragment>
         
        <Modal show={this.state.isOrdered} modalClosed={this.modalHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
    
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          isOrdered={this.isOrderedHandler}
          
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
