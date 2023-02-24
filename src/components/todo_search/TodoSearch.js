import React from "react";
import { MdSearch } from "react-icons/md"
import './TodoSearch.css'

function TodoSearch(){
    return(
        <div className="row">
            <div className="group_search">
                <MdSearch className="icon"/>
                <input placeholder="Buscar" type="search" className="input" />
            </div>
        </div>
    )
}

export { TodoSearch };