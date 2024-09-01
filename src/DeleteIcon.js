import React from "react";
import { TodoIcon } from "./TodoIcon";

function DeleteIcon() {
    return (
        <TodoIcon
            type= 'delete' // Aca pasamos como prop el type para que TodoIcon lo use
            color= 'grey'
    
         />
    )
    
    
}



export {DeleteIcon};