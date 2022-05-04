import React from "react";
import Btn from "./Btn";

class Task extends React.Component {

  render() {
    return (
    <div className={`task ${this.props.done ? "task_done" : ""}`}>
        <p>{this.props.title}</p>
        <div className="btn-set">
          <Btn name={this.props.done ? "Cancel" : "Done"}
            handleClick={this.props.changeTaskStatus}
            btnMod={this.props.done ? "btn_grey" : "btn_green"}/>
          <Btn name="Delete" 
            handleClick={this.props.deleteTask}
            btnMod="btn_red"/>
        </div>
      </div>
    )
  }
}

export default Task;