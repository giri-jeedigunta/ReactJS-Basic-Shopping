import React, { Component } from "react";
import Item from "./Item";

class ShoppingListContainer extends Component {
  render() {
    return (
      <div class="list-group">
        {this.props.shoppingItemsList.map(itemInfo => (
          <Item
            key={itemInfo.id}
            itemInfo={itemInfo}
            onUpdate={this.props.onUpdate}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingListContainer;
