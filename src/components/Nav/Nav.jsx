import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Message</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Musik</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
     </nav>
}


export default Nav;