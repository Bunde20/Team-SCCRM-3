import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError()
    console.error(error);

    return(
        <div id='error-page'>
            <h1 className='display-6'>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.data || error.error.message}</i>
            </p>
        </div>
    )
}