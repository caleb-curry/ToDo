import React from 'react';
import ReactDOM from'react-dom';
import './index.css';

function profileMenu() {
    alert("Profile");
}

function settings() {
    alert("Settings");
}

function addTask() {
    //alert("Add task");
    var todoList = document.getElementById("todo-list");
    var inProgressList = document.getElementById("in-progress-name");
    var completedList = document.getElementById("completed-list");
    var list = "todo";

    if(list === "todo") {
        var children = todoList.children.length + 1
        var element = document.createElement("li")
        element.setAttribute("id", "task")
        element.appendChild(document.createTextNode("Test"))
        todoList.appendChild(element);
        console.log(todoList);
    }
    else if(list === "in progress") {
        console.log(inProgressList);
    }
    else if(list === "completed") {
        console.log(completedList);
    }
    else {
        console.log("Unkown list");
    }
}

class Todo extends React.Component {
    render() {
        return (
            <div id="app">
                <div id="nav-bar">
                    <h1> TODO:</h1>
                    <img id="profile" src={'default.png'} alt="Profile" onClick={profileMenu}></img>
                    <span id="settings" onClick={settings}>&#9881;</span>
                    <span id="add" onClick={addTask}>&#43;</span>
                </div>
                <div id="tasks">
                    <div id="todo">
                        <h2>To do</h2>
                        <hr/>
                        <ul id="todo-list">
                        </ul>
                    </div>
                    <div id="in-progress">
                        <h2>In Progress</h2>
                        <hr/>
                        <ul id="in-progress-list">
                        </ul>
                    </div>
                    <div id="completed">
                        <h2>Completed</h2>
                        <hr/>
                        <ul id="completed-list">
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Todo />, document.getElementById('root'));