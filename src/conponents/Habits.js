import React, { Component } from "react";
import Habit from "./Habit";
import HabitAddInput from "./HabitAddInput";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddInput
          inputValue={this.props.inputValue}
          onSubmit={this.props.onSubmit}
          onChange={this.props.onChange}
        />
        <div>
          <button className="reset" onClick={this.props.onReset}>
            리셋
          </button>
          <button className="reset" onClick={this.props.onResetCount}>
            카운트리셋
          </button>
          {this.props.habits.map((habit) => {
            return (
              <Habit
                habit={habit}
                key={habit.id}
                onInCrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                //중간 컴포넌트는 인자 안써도 됨.. 자동 저장되어 있음.
                //중간 컴포넌트, 하위컴포넌트는 이름으로 한줄로, 쭉쭉 연결해주면 됨.
                //3단,2단은 이름 똑같이, 최종만 handle로 변수작성
                onDelete={this.props.onDelete}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Habits;
