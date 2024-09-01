import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";
import './TodoIcon.css';


// Se crea un condicional reducido
const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`} onClick={onClick}
        >
            
            {iconTypes[type](color)}  {/*  // Cada elemento va a ser una funcion que le mando el color */}
        </span>

    )

}


export { TodoIcon }