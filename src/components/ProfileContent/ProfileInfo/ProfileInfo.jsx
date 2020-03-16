import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return (
        <div>
            <img
                src="https://goldserfer.ru/wp-content/uploads/2019/08c/brands-on-instagram.jpg"/>
                <div className={s.avaDescription}>
                    ava + description
                </div>
        </div>
    )
}


export default ProfileInfo;