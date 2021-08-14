import cl from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    let path = '/friends';
    return (
        <aside className={cl.mo__nav}>
            <nav>
                <ul>
                    <li className={`${cl.item} ${cl.active}`}><NavLink to='/profile' activeClassName={cl.active}>Profile</NavLink></li>
                    <li className={cl.item}><NavLink to='/dialogs' activeClassName={cl.active}>Messages</NavLink></li>
                    <li className={cl.item}><NavLink to='/users' activeClassName={cl.active}>Users</NavLink></li>
                    <li className={cl.item}><NavLink to='/news' activeClassName={cl.active}>News</NavLink></li>
                    <li className={cl.item}><NavLink to='/music' activeClassName={cl.active}>Music</NavLink></li>
                    <li className={cl.item}><NavLink to='/settings' activeClassName={cl.active}>Settings</NavLink></li>
                </ul>
            </nav>
            <div className={cl.friends_wrapper}>
                <h2>Friends</h2>
                <ul>
                    <li><NavLink to={path + "/0"}>{props.state.friendsHot[0]}</NavLink></li>
                    <li><NavLink to={path + "/1"}>{props.state.friendsHot[1]}</NavLink></li>
                    <li><NavLink to={path + "/2"}>{props.state.friendsHot[2]}</NavLink></li>
                </ul>
            </div>
        </aside>
    )
}

export default Nav;