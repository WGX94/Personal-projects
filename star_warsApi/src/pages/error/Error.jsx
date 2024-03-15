import { useRouteError } from "react-router-dom";
import "../error/error.scss"

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="containerError">
            <h1>Error !</h1>
        </div>

    )
}

export default Error