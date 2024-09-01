import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon({onDelete}) {
    return (
        <TodoIcon
            type= 'delete' // Aca pasamos como prop el type para que TodoIcon lo use
            color= 'grey'
            onClick={onDelete}
    
         />
    )
    
    
}



export {DeleteIcon};