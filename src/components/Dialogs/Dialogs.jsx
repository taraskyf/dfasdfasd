import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Taras</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Misha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>I am fine thank you</div>
                <div className={s.message}>Heeeyy maaan what suuppp?</div>
                <div className={s.message}>Its ok</div>
            </div>
        </div>
    )
}


export default Dialogs;