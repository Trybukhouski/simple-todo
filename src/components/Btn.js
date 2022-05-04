import React from "react";

class Btn extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick} className={`btn ${this.props.btnMod}`}>{this.props.name}</button>
    )
  }
}

export default Btn;