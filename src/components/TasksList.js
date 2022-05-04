import React from "react";
import Task from "./Task";
import NewTask from "./NewTask";

class TasksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 0, title: "First task", done: false},
        {id: 1, title: "Second task", done: true},
        {id: 2, title: "Third task", done: false}
      ]
    };
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask(taskName) {
    this.setState(() => {
      let {tasks} = this.state;
      tasks.push({
        id: tasks.length === 0 ? 0 : tasks.length, 
        title: taskName, 
        done: false
      })
      return tasks;
    })
  }

  deleteTask(id) {
    const index = this.findIndexFunc(id);
    let {tasks} = this.state;
    this.setState(() => delete tasks[index])
  }

  changeTaskStatus(id) {
    const index = this.findIndexFunc(id);
    let {tasks} = this.state;
    if(tasks[index].done) {
      this.setState(() => tasks[index].done = false)
    }
    if(!tasks[index].done) {
      this.setState(() => tasks[index].done = true)
    }
  }

  findIndexFunc = id => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    return index;
  }

  render() {
    const {tasks} = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <div>
        {[...activeTasks, ...doneTasks].map((task) => 
          <Task title={task.title} 
            done={task.done} 
            key={task.id} 
            changeTaskStatus={() => this.changeTaskStatus(task.id)}
            deleteTask={() => this.deleteTask(task.id)}/>
        )}
        <NewTask addTask={this.addTask}/>
      </div>
    )
  }
}


export default TasksList;
