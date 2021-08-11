import {addLettersActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// Это контейнерная компонента, задача которой только обратиться
// к презентанционной компоненте <MyPosts /> и снабдить ее логикой/dispatch'ами и BLL данными


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        letterL: state.profilePage.letterL
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreatorDumpFunc: () => {
            dispatch(addPostActionCreator());
        },
        addLettersActionCreatorDumpFunk: (letters) => {
            dispatch(addLettersActionCreator(letters));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;