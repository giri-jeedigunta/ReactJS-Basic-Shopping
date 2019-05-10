import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="list-group-item">
        <span className="m-2 item-name">{this.props.itemInfo.name}</span>
        <span
          className={
            "m-2 badge badge-" +
            (this.props.itemInfo.qty ? "success" : "danger")
          }
        >
          QTY: {this.props.itemInfo.qty}
        </span>

        <button
          class="m-2 btn btn-primary"
          onClick={() => this.props.onUpdate("add", this.props.itemInfo)}
        >
          +
        </button>
        <button
          class="m-2 btn btn-dark"
          onClick={() => this.props.onUpdate("remove", this.props.itemInfo)}
        >
          -
        </button>
      </div>
    );
  }
}

export default Item;
