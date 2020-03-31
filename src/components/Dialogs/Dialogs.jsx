import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Mesege";
import DialogsItem from "./DialogsItem/DialogsItem";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redax/state";


const Dialogs = (props) => {
    let profileElements = props.state.profilePage.profileData.map(p => <DialogsItem name={p.name} id={p.id}/>);
    let messages = props.state.messagesPage.messagesData.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.messagesPage.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = () => {
        props.dispatch(SendMessageCreator())

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {profileElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div>
                <textarea placeholder='Enter your message'
                          onChange={onNewMessageChange}
                          value={newMessageBody}>
                </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Add Message</button>
            </div>
        </div>
    )
}


export default Dialogs;