import React from "react";
import {addLettersDialogCreator, addPostDialogCreator} from "../../redux/messages-reducer"
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState()

    let addNewMessages = () => {
        props.store.dispatch(addPostDialogCreator())
    }
    let newDialogLetter = (body) => {
        props.store.dispatch(addLettersDialogCreator(body));
    }

    return (
        <Dialogs
            addPostDialogCreatorDumbFunc={addNewMessages}
            addLettersDialogCreatorDumbFunc={newDialogLetter}
            dialogsData={state.messagesPage.dialogsData}
            messagesData={state.messagesPage.messagesData}
            dialog={state.messagesPage.dialog}
        />
    )
}

export default DialogsContainer;