import React from 'react';
import './CreateTodoButton.css';




function TodoClick(){
    let [state, setState] = React.useState(0);
    return(
        <>
            <p>
                Diste click {state} veces    
            </p>
            <button onClick={()=> {
                setState(state++)
            }

            }>
                Click
            </button>
        </>
    )
}

function CreateTodoButton() {
    return (
        <button 
        className="CreateTodoButton" 
        onClick={
            (event) => {
                console.log("Le diste click");
                console.log(event);
                console.log(event.target);
                }

            }
        >+</button>
    );
}

export { CreateTodoButton };