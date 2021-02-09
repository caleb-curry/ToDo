import React from 'react';
import ReactDOM from'react-dom';
import './index.css';

// ##################################################
// Pure Functions
// ##################################################
function profileMenu() {
    alert("Profile");
};

function settings() {
    alert("Settings");
};

function addTask() {
    //alert("Add task");
    var todoList = document.getElementById("todo-list");
    var element = document.createElement("li");
    
    // Add event listeners for drag and drop actions
    element.setAttribute("id", "task");
    element.setAttribute("class", "todo");
    element.addEventListener("click", move, false);
    //element.setAttribute("draggable", "true");
    //element.addEventListener('dragstart', dragStart, false);
    //element.addEventListener('dragover', dragOver, false);
    //element.addEventListener('dragenter', dragEnter, false);
    //element.addEventListener('dragleave', dragLeave, false);
    //element.addEventListener('drop', dragDrop, false);
    //element.addEventListener('dragend', dragEnd, false);

    element.appendChild(document.createTextNode("Test"));
    todoList.appendChild(element);

    //console.log(todoList);
}

function move(e) {
    var todoList = document.getElementById("todo-list");
    var inProgressList = document.getElementById("in-progress-list");
    var completedList = document.getElementById("completed-list");
    if(this.className === 'todo') {
        this.className = "in-progress";
        inProgressList.appendChild(this);
    } else if(this.className === 'in-progress'){
        this.className = "completed";
        completedList.appendChild(this);
    } else if(this.className === 'completed'){
        this.className = "todo";
        todoList.appendChild(this);
    }
    //console.log(this.className);
}

function drag(e) {

}

function addOverlayOn() {
    document.getElementById("add-overlay").style.display = "block";
}

function addOverlayOff() {
    document.getElementById("add-overlay").style.display = "none";
}

function settingsOverlayOn() {
    document.getElementById("settings-overlay").style.display = "block";
}

function settingsOverlayOff() {
    document.getElementById("settings-overlay").style.display = "none";
}

function profileOverlayOn() {
    document.getElementById("profile-overlay").style.display = "block";
}

function profileOverlayOff() {
    document.getElementById("profile-overlay").style.display = "none";
}

/*

function dragStart(element) {
    //console.log(element);
    element.dataTransfer.setData("text", element.target.id);
}

function dragEnd(element) {
    //console.log("Drag end");
}

function dragOver(element) {
    //console.log("Drag over");
    //if(element.preventDefault) {
    //    element.preventDefault();
    //}
}

function  dragEnter(element) {
    //console.log("Drag enter");
}

function dragLeave(element) {
    //console.log("Drag leave");
}

function dragDrop(element) {
    console.log("Drag drop");
    element.preventDefault();
    var data = element.dataTransfer.getData("text");
    element.target.appendChild(document.getElementById(data));
}
*/

// ##################################################
// Render Component Functions
// ##################################################
// Note: React Components must start with capital letter to be custom otherwise it thinks it is a build in component.
function NavBar() {
    return (
        <div id="nav-bar">
            <h1> TODO:</h1>
            <img id="profile" src={'default.png'} alt="Profile" onClick={profileOverlayOn}></img>
            <span id="settings" onClick={settingsOverlayOn}>&#9881;</span>
            <span id="add" onClick={addOverlayOn}>&#43;</span>
        </div>
    );
}

function Tasks() {
    return (
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
    );
}

function Add() {
    return (
        <div id="add-overlay">
            <div id="add-input">
                <button onClick={addOverlayOff}>Close</button>
                <h1>Add Task</h1>
            </div>
        </div>
    );
}

function Settings() {
    return (
        <div id="settings-overlay">
            <div id="settings-input">
                <button onClick={addOverlayOff}>Close</button>
                <h1>Settings</h1>
            </div>
        </div>
    )
}

function Profile() {
    return (
        <div id="profile-overlay">
            <div id="profile-input">
                <button onClick={addOverlayOff}>Close</button>
                <h1>Profile</h1>
            </div>
        </div>
    )
}

class App extends React.Component {
    componentDidMount() {
        document.title = 'Task Manager';
    }

    render() {
        return (
            <div id="app">
                <NavBar/>
                <Add/>
                <Settings/>
                <Profile/>
                <Tasks/>
            </div>
        );
    }
}

// Render to screen
ReactDOM.render(<App/>, document.getElementById('root'));