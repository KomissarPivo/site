import React from 'react'
import s from "./Footer.module.css";
import social from '../../assets/social.png'

export default function footer() {
    return (
        <footer className={s.footer}>
            <div className={s.fd}>

                <div className={s.hd}>
                    <h2 className={s.h2}>© 2024 KeyHaven</h2>
                    <p className={s.p}>Все упомянутые товарные знаки, названия игр и компаний, логотипы, материалы являются собственностью соответствующих владельцев.</p>
                </div>

                <div className={s.md}>
                    <h2 className={s.h2}>О нас</h2>
                    <p className={s.p}>Добро пожаловать в KeyHaven — ваш надежный источник цифровых ключей для игр и программного обеспечения по доступным ценам. Мы предлагаем широкий ассортимент лицензий и гарантируем качество и безопасность каждой покупки.</p>
                </div>

                <div className={s.ld}>
                    <h2 className={s.h2}>Наши контакты</h2>
                    <img className={s.social} src={social} />
                </div>
                
                <p className={s.p}>Все продаваемые ключи закупаются у официальных дистрибьюторов и издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza.</p>
            </div>
        </footer>
    )
}
