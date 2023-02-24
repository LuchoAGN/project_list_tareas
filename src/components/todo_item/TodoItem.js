import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <React.Fragment>
            <ul className="todo-cmp__list">
                <li>
                    <label htmlFor={props.id}>
                        <input id={props.id} type="checkbox"/>
                        <span>{props.text}</span>
                    </label>
                </li>
            </ul> 
        </React.Fragment>
    )
}

export { TodoItem };