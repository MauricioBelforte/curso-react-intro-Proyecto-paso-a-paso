import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon() {
    return (
        <TodoIcon
            type= 'check'   // Aca pasamos como prop el type para que TodoIcon lo use
            color= 'green'
        
        />

    );
    
}



export {CompleteIcon};