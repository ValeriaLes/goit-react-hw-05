import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css"

export default function Header () {

    const activeClass = ({isActive}) => {
        return clsx(css.link, isActive && css.active)

    }

    return (
        <div className={clsx(css.navWrapper)}>
            <NavLink to='/' className={activeClass}> Home </NavLink>
            <NavLink to='/movies' className={activeClass}> Movies </NavLink>
        </div>
    )

}