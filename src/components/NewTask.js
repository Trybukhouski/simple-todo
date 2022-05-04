import React from "react";
import Btn from "./Btn";

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask() {
    if(this.state.inputValue) {
      this.props.addTask(this.state.inputValue);
      this.setState({
        inputValue: ""
      })
    }
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div className="new-task">
        <input value={this.state.inputValue} 
          onChange={this.handleChange}
          className="task-input"/>
        <Btn name="Add" 
          handleClick={this.addNewTask}
          btnMod="btn_black"/>
      </div>
    )
  }
}

export default NewTask;