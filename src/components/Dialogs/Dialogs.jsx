import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    /*маппим якобы данные с сервера в JSX и далее подставляем эти новые массивы в основной return*/
    let dialogsElements = props.state.dialogsData.map( (dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })
    /*По сути тот же мап, как и наверху, но в сокращенной записи*/
    let messagesElements = props.state.messagesData.map( text => <Message message={text.message}/>)
debugger;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;