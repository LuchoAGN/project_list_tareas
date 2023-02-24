import React from "react";
import { BsArrowRightCircle } from 'react-icons/bs'
import './CreateTodoButton.css'

function CreateTodoButton(props){
    return(
        <div className="content_CreateTodoButton">
            <h2>Crear nueva tarea</h2>
            <div className="group_create">
                <h5>Nombre de la tarea</h5>
                <input placeholder="Tengo que dar de comer a Lucas" type="search" className="input" />
            </div>
            <button className="cssbuttons-io-button"> Crear tarea
                <div className="icon">
                    <BsArrowRightCircle />
                </div>
            </button>                
        </div>
    )
}

export { CreateTodoButton};
