import React, { Component } from "react";
import CartBar from "./components/CartBar";
import ShoppingListContainer from "./components/ShoppingListContainer";

class MyApp extends Component {
  /* 
    State is declared in the top most Component App
    Because this can be accessed by both CartBar and ShoppingListContainer

    Components: 
    App 
      - CartBar
      - ShoppingListContainer
          - Item

  */
  state = {
    shoppingItemsList: [
      { id: 0, name: "Milk", qty: 0 },
      { id: 1, name: "Eggs", qty: 0 },
      { id: 2, name: "Bread", qty: 0 },
      { id: 3, name: "Butter", qty: 0 },
      { id: 4, name: "Cheese", qty: 0 },
      { id: 5, name: "Apples", qty: 0 }
    ],

    totalQtyCount: 0,
    totalItemCount: 0
  };

  /* 
    Arrown Function Have direct access to `this` / content 
    if arrow fn is not used we have to explicitly bind this
  */
  updateCart = (actionType, itemObj) => {
    let shoppingItemsList = [...this.state.shoppingItemsList],
      activeIndex = shoppingItemsList.indexOf(itemObj);

    shoppingItemsList[activeIndex] = { ...itemObj };

    switch (actionType) {
      case "add":
        shoppingItemsList[activeIndex].qty++;
        break;

      case "remove":
        shoppingItemsList[activeIndex].qty > 0 &&
          shoppingItemsList[activeIndex].qty--;
        break;
    }

    let totalQtyCount = shoppingItemsList
      .map(e => {
        return e.qty;
      })
      .reduce((prev, curr) => {
        return prev + curr;
      });

    let totalItemCount = shoppingItemsList.filter(e => {
      return e.qty > 0;
    }).length;

    this.setState({ shoppingItemsList, totalQtyCount, totalItemCount });
  };

  /* 
    When STATE is passed down to the components 
    the values of state can be accessed via PROPS in the child compoennts
  */

  render() {
    return (
      <React.Fragment>
        <CartBar
          totalQtyCount={this.state.totalQtyCount}
          totalItemCount={this.state.totalItemCount}
        />
        <ShoppingListContainer
          shoppingItemsList={this.state.shoppingItemsList}
          onUpdate={this.updateCart}
        />
      </React.Fragment>
    );
  }
}

export default MyApp;
