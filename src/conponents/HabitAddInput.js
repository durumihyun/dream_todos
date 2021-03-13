import React, { Component } from "react";

class HabitAddInput extends Component {
  //(1)왜 input.value 초기화를 상위 handleSubmit이 아니라
  //여기서 해주는 걸까? 저 state도 상위에 써줘야 하나?

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.props.onSubmit(e);
          }}
        >
          <input
            onChange={(e) => {
              this.props.onChange(e.target.value);
            }}
            type="text"
            placeholder="입력하세요"
            value={this.props.inputValue}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default HabitAddInput;
