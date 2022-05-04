import React from "react";
import TasksList from "./components/TasksList";
import "./index.css"

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">My tasks</h1>
        <TasksList/>
      </div>
    )
  }
}


export default App;
