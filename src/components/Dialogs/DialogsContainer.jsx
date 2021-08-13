//container генерирует state для презентационной компоненты
//генерирует dispatch b

import {addLettersDialogCreator, addPostDialogCreator} from "../../redux/messages-reducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//библиотека connect позволяет забыть про store и
//сама сможет передавать нам в первую функцию
// state, свойства типа dialogsData и тп - это и будут
// новые пропсы. Условились, что эта функция называется mapStateToProps
let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        dialog : state.messagesPage.dialog
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostDialogCreatorDumbFunc: () => {
            dispatch(addPostDialogCreator())
        },
        //тк этот action присылает нам кроме типа значения, укажем здесь body
        addLettersDialogCreatorDumbFunc: (body) => {
            dispatch(addLettersDialogCreator(body));
        }
    }
}
// connect()() первыми скобками вызываем connect,
// она возвращает нам другую функцию
// и вторыми () мы вызываем уже новую функцию
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//здесь сидит новая контейнерная компонента

export default DialogsContainer;