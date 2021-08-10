import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addLettersDialogCreator, addPostDialogCreator} from "../../redux/messages-reducer"

const Dialogs = (props) => {

    let state = props.stateDialogs;
    /*маппим якобы данные с сервера в JSX и далее подставляем эти новые массивы в основной return*/
    let dialogsElements = state.dialogsData.map( (dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })
    /*По сути тот же мап, как и наверху, но в сокращенной записи*/
    let messagesElements = state.messagesData.map( text => <Message message={text.message}/>)
    let newMessageBody = state.dialog;
    let newMessages = React.createRef();

    let addNewMessages = () => {
        props.dispatch(addPostDialogCreator())
    }
    let newDialogLetter = (e) => {
        let body = e.target.value;
        props.dispatch(addLettersDialogCreator(body));
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            ref={newMessages}
                            placeholder='Enter you message'
                            value={newMessageBody}
                            onChange={newDialogLetter}
                        />
                    </div>
                    <div>
                        <button onClick={addNewMessages}>New Messages</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;