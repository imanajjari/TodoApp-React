import React from "react";
import {AddTaskForm, TaskList, FilterFooter} from "../index";



function App() {
    return (
        <div className="App">
            <AddTaskForm></AddTaskForm>
            <TaskList></TaskList>
            <FilterFooter></FilterFooter>
        </div>

    );
}

export default App;