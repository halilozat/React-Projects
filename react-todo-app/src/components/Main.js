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
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <hr />
                <div>
                    <CreateTask createTask={this.createTask} />
                    <br />
                    <TaskList tasks={this.state.tasks} />
                </div>
            </div>
        )
    }
}