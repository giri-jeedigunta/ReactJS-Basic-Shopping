import React, { Component } from "react";

class CartBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">
          Cart: Total QTY: {this.props.totalQtyCount}> Total Items:
          {this.props.totalItemCount}
        </span>
      </nav>
    );
  }
}

export default CartBar;
