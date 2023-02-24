import React from "react";
import './ImageTodo.css'
import Image from '../../assets/img/Brazuca - Planning.png'

function ImageTodo(){
    return(
        <img className="imgCard" src={Image} alt="img_detail"></img>
    )
}

export { ImageTodo};