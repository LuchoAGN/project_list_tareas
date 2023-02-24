import React from "react";
import './TodoList.scss'
import { IoEyeSharp } from 'react-icons/io5'

function TodoList(props){
    return(
        <div className="todo-cmp">
            {props.children}
            <div className="row">
                <IoEyeSharp/>
                <p>Ocultar las tareas completadas</p>
            </div>
        </div>
    )
}

export { TodoList };