import React, { Component } from "react";
import Habit from "./conponents/Habit";
import "./App.css";
import Habits from "./conponents/Habits";
import Nav from "./conponents/Nav";

class App extends Component {
  state = {
    habits: [
      {
        id: 1,
        name: "Water 한잔하기",
        count: 0,
      },
      {
        id: 2,
        name: "YOUTUBE 보기",
        count: 0,
      },
      {
        id: 3,
        name: "React 공부 10분 집중",
        count: 0,
      },
    ],
    inputValue: "",
  };

  handleIncrement = (id) => {
    const _habits = this.state.habits.map((habit) =>
      habit.id === id
        ? {
            ...habit,
            count: habit.count + 1,
          }
        : habit
    );

    this.setState({
      ...this.state,
      habits: _habits,
    });
  };

  handleDecrement = (id) => {
    const _habits = this.state.habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          count: habit.count > 0 ? habit.count - 1 : 0,
        };
      }
      return habit;
    });

    this.setState({
      ...this.state,
      habits: _habits,
    });
  };

  handleDelete = (id) => {
    //여기에서는 [... ]으로 복사 안하고 바로 하네..
    const _habits = this.state.habits.filter((el) => el.id !== id);

    this.setState({
      habits: _habits,
    });
  };

  handleChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      habits: [
        ...this.state.habits,
        {
          id: Date.now(),
          name: this.state.inputValue,
          count: 0,
        },
      ],
      inputValue: "",
    });
  };

  handleReset = () => {
    this.setState({
      ...this.state,
      habits: [],
    });
  };

  handleResetCount = () => {
    const _habits = this.state.habits.map((el) => ({
      ...el, //오브젝트 전체가 el이 된다고 한다.
      count: 0, //부분적으로 바꿔주고 싶은 것만 수정하기
    })); //중괄호 안에 객체를 그대로 넣고, 그걸 감싸는 소괄호
    console.log(`_habits : ${_habits}`);

    this.setState({
      habits: _habits,
    });
  };

  render() {
    return (
      <div className="AppComponent">
        <Nav
          totalCount={this.state.habits.filter((el) => el.count > 0).length}
          partCount={this.state.habits.reduce((acc, cur) => acc + cur.count, 0)}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
          onResetCount={this.handleResetCount}
          inputValue={this.state.inputValue}
        />
      </div>
    );
  }
}

export default App;
