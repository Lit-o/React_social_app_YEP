import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.yay}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {
    /*якобы данные с сервера*/
    let dialogsData = [
            {id: 1, name: 'Lito'},
            {id: 2, name: 'Dude'},
            {id: 3, name: 'SpiderMan'},
            {id: 4, name: 'SpiderLady'}
        ];
    let messagesData = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your hommies?'},
            {id: 3, message: "I'm fine, thx and u?"},
            {id: 4, message: "I'm fine, thx and u?"}
        ];

    /*маппим якобы данные с сервера в JSX и далее подставляем эти новые массивы в основной return*/
    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messagesData.map( text => <Message message={text.message}/>)


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