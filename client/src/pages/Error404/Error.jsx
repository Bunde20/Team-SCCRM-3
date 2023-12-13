import { useRouteError } from "react-router-dom";

import './Error.css'
import BackButton from "../../components/Buttons/BackButton";

export default function Error() {
    const error = useRouteError()
    console.error(error);
    
    return(
        <div id='error-page' className="text-center errorBg p-5">
            <h1 className='display-2 paragraph-text text-white'>Oops!</h1>
            <p className="paragraph-text text-white fs-3">Sorry, an unexpected error has occurred.</p>
            <p>
                <i className='paragraph-text text-white fs-5'>{error.data || error.error.message}</i>
            </p>
            <BackButton text='Back to Home' />
        </div>
    )
}