import React, { Component } from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            task: [],
        }
    }
    
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <hr/>
                <div>
                    <CreateTask/>
                    <br/>
                    <TaskList />


                </div>
            </div>
        )
    }
}
