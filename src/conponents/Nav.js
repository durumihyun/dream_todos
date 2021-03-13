import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <span className="nav-title">HABIT Tracker</span>
        <span className="habit-count nav-count">{this.props.totalCount}</span>
        <span className="habit-count nav-count">{this.props.partCount}</span>
      </div>
    );
  }
}

export default Nav;
