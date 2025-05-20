
import { Link } from "react-router-dom";
import css from "./NotFound.module.css"
export default function NotFound () {



   
    return(
        <div className={css.notFoundWrapper}>
            <Link to='/'>Go back to Homepage</Link>
            <h2>Page not found ... </h2>
        </div>
    )
}