import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Mesege";
import DialogsItem from "./DialogsItem/DialogsItem";

let newMessage = React.createRef();

let addMessage = () => {
    let result = newMessage.current.value;
    alert(result)
}

const Dialogs = (props) => {
    let profileElements = props.profileData.profileData.map(p => <DialogsItem name={p.name} id={p.id}/>);
    let messages = props.messages.messagesData.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {profileElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <textarea ref={newMessage}></textarea>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}


export default Dialogs;