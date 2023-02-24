import React from "react";
import './TodoList.scss'

function TodoList(props){
    return(
        <div className="todo-cmp ">
            {props.children}
            <div className="row">
                <p></p>
            </div>
        </div>
    )
}

export { TodoList };