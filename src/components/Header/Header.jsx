import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src="data:image/png;base64,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"/>
    </header>
}


export default Header;