import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.app__header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'></img>
        </header>
    )
}

export default Header;