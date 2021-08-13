//Презентационная компонента нужна для отрисовки UI
//и, после отрисовки, когда пользователь уже сможет
//взаимодействовать - здесь установлены на что-то интерактивное
//функции коллбеки,
//которые передадут в Container сигнал о том, что
//произошло какое-то событие и это событие дало
//или не дало какие-то конкретные данные.



import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    /*маппим якобы данные с сервера в JSX и далее подставляем эти новые массивы в основной return*/
    let dialogsElements = props.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
        )
    })
    /*По сути тот же мап, как и наверху, но в сокращенной записи*/
    // let messagesElements = state.messagesData.map( text => <Message message={text.message}/>)
    let messagesElements = props.messagesData.map((text) => {
        return (
            // здесь оглошаем компоненту, капсулу логики маленького объекта,
            // и зашиваем данные, чтобы модуль мог к ним обратиться в своем файле
            // при этом text здесь - это каждый из объектов массива messagesData к
            // которому мы обращаемся за свойством message
            <Message message={text.message} key={text.id} />
        )
    })

    let newMessageBody = props.dialog;
    let newMessages = React.createRef();

    let addNewMessages = () => {
        props.addPostDialogCreatorDumbFunc();
    }
    let newDialogLetter = (e) => {
        let body = e.target.value;
        props.addLettersDialogCreatorDumbFunc(body);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
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