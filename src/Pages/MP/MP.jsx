import React, { useState } from 'react';
import Items from '../../Components/items/Items';
import sa from "../../App.module.css";
import s from '../MP/Mp.module.css'

export default function MP() {
return (
    <section className={sa.wrapper}>
        <main className={s.main}>
            <div className={s.md}>
                <h1 className={s.h1}>Главная</h1>
                <Items itemClass={s.customItemStyle}/>
                <button className={s.btn}><a href="/catalog" className={s.a}>Посмотреть больше</a></button>
            </div>
        </main>

    </section>
)
}




