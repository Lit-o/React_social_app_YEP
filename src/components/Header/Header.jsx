import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className={classes.app__header}>
            <div>
                <img alt="some" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
            </div>
            <div className={classes.loginBlock}>
                <NavLink to={'/login/'}>Login</NavLink>
            </div>
        </header>
    )
}

export default Header;