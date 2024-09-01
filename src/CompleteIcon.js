import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({completed,onComplete}) {
    return (
        <TodoIcon
            type= 'check'   // Aca pasamos como prop el type para que TodoIcon lo use
            color= {completed ? 'green' : 'grey'}
            onClick={onComplete}
        />
    );  
}


export {CompleteIcon};