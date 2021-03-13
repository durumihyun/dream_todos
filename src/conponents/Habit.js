import React, { Component } from "react";

class Habit extends Component {
  render() {
    console.log("props//", this.props.key); //key는 왜 못불러오지?
    return (
      <div className="habit">
        <span className="habit-name">{this.props.habit.name}</span>
        <span className="habit-count">{this.props.habit.count} </span>
        <button
          onClick={() => {
            this.props.onInCrement(this.props.habit.id);
          }}
          className="habit-button habit-increment"
        >
          <i class="far fa-plus-square"></i>
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.habit.id)}
          className="habit-button habit-derement"
        >
          <i class="far fa-minus-square"></i>
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.habit.id);
          }}
          className="habit-button habit-delete"
        >
          <i class="fas fa-eraser"></i>
        </button>
      </div>
    );
  }
}

export default Habit;
