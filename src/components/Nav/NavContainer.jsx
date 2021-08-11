import {connect} from "react-redux";
import Nav from "./Nav";


let mapStateToProps = (state) => {
    return {
        state : state.sideBar
    }
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;