import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

function Header(props) {
    return (
        <header className={classes.app__header}>
            <div>
                <img alt="some" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login/'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;