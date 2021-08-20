import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUsersData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            //авторизация какие-то доп настройки для браузера
            //запрос делает не анонимным, а с привязкой кук
            withCredentials: true,
        }).then(response => {

                if (response.data.resultCode === 0) {
                    //axois упаковывает данные в data и на бекенде
                    // у нас назвали объект data поэтому и вышло data.data

                    this.props.setAuthUsersData(response.data.data.id, response.data.data.login, response.data.data.email)
                //  это можно записать так
                //  let {id, email, login} = response.data.data
                //  this.props.setAuthUserData (id, email, login)
                }

        });
    }

    render() {
        return (
           <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUsersData} ) (HeaderContainer);