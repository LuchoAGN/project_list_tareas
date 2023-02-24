import React from "react";
import './TodoCounter.css'

function TodoCounter(){
    return(
        <div className="content_TodoCounter">
            <h2>Tus tareas</h2>
            <h4>Has completado 2 de 3 Todos</h4>
        </div>
    )
}

export { TodoCounter };