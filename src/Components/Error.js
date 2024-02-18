import { useRouteError } from "react-router-dom";


const Error = () => {
    const sadFaceEmoji = "😞";

    const error = useRouteError();

    console.log(error);
    return (
        <div className="error-container">

            <h1>Oops! Something went Wrong{sadFaceEmoji}</h1>
            <h2>{error.status}:{error.statusText}</h2>

        </div>
    )
}
export default Error;