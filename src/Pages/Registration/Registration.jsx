import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../Components/Features/ProfileSlice";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import s from "./Registration.module.css";

export function Registration() {
    let textArr = ['Имя', 'Фамилия', 'Почта', 'Пароль'];
    let fieldNames = ['nickname1', 'nickname2', 'email', 'password'];
    let [index, setIndex] = useState(0);
    let [inputs, setInputs] = useState({ nickname1: '', nickname2: '', email: '', password: '' });

    const profileState = useSelector((state) => state.profile || {});
    let { isAuth } = profileState;

    let disp = useDispatch();

    if (isAuth === true) {
        return <Navigate to={'/catalog'} />;
    }

    let handleWrite = (e, field) => {
        setInputs({ ...inputs, [field]: e.target.value });
    };

    return (
        <div className={s.mdiv}>
            <h1 className={s.h1}>Регистрация на сайте</h1>
            <h2 className={s.h2}>
                Если у вас уже есть аккаунт - <a href="/login" className={s.a}>Авторизируйтесь</a>
            </h2>
            {textArr.map((item, index) => (
                <div key={index} className={s.inputField}>
                    <input
                        className={s.inp}
                        type="text"
                        placeholder={item}
                        onChange={e => handleWrite(e, fieldNames[index])}
                    />
                </div>
            ))}
            <button className={s.button} onClick={() => disp(registration(inputs))}><p className={s.p}>Войти</p></button>
        </div>
    );
};

export default Registration;