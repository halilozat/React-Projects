import React, { Component } from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

const tasks = []
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks,
        }
    }

    createTask = (task) => {
        if (task.trim() === '') {
            alert("Task can't be empty!")
        }
        tasks.push({ task, isComplete: false })
        this.setState({ tasks })
    }

    deleteTask = (taskId) => {
        tasks.splice(taskId, 1)
        this.setState({ tasks: tasks })
    }

    editTask = (taskId, task) => {
        const taskItem = tasks[taskId];
        taskItem.task = task;
        this.setState({ tasks: tasks });
    };

    toggleTask = (taskId) => {
        const taskItem = tasks[taskId];
        taskItem.isCompleted = !taskItem.isCompleted;
        this.setState({ tasks: tasks });
     };

    render() {
        return (
            <div className="main">
               <h1 className="todos">REACT TODO APP</h1>
                <hr />
                <div className="content">
                    <CreateTask createTask={this.createTask} />
                    <br />
                    <TaskList
                        tasks={this.state.tasks}
                        deleteTask={this.deleteTask}
                        editTask={this.editTask}
                        toggleTask={this.toggleTask}
                    />
                </div>
            </div>
        )
    }
}
