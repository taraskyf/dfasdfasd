import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const profileData = [
    {name: "Taras", id: 1},
    {name: "Dima", id: 2},
    {name: "Andrey", id: 3},
    {name: "Ivan", id: 4},
    {name: "Misha", id: 5}
];

const messagesData = [
    {message: "Hello"},
    {message: "How are you"},
    {message: "Heeeyy maaan what suuppp?"},
    {message: "Its ok"},
    {message: "I'm fine"},
];

let profileElements = profileData.map(p => <DialogsItem name={p.name} id={p.id}/>);
let messages = messagesData.map(m => <Message message={m.message}/>);

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {profileElements}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}


export default Dialogs;