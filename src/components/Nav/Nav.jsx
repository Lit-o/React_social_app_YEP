import cl from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <aside className={cl.mo__nav}>
            <nav>
                <ul>
                    <li className={`${cl.item} ${cl.active}`}><NavLink to='/profile' activeClassName={cl.active}>Profile</NavLink></li>
                    <li className={cl.item}><NavLink to='/dialogs' activeClassName={cl.active}>Messages</NavLink></li>
                    <li className={cl.item}><NavLink to='/news' activeClassName={cl.active}>News</NavLink></li>
                    <li className={cl.item}><NavLink to='/music' activeClassName={cl.active}>Music</NavLink></li>
                    <li className={cl.item}><NavLink to='/settings' activeClassName={cl.active}>Settings</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}

export default Nav;