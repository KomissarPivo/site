import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logining } from '../../Components/Features/ProfileSlice';
import { Navigate } from "react-router-dom";

import s from '../Login/Login.module.css'


export function login() {
  let textArr = ['Почта', 'Пароль'];
  let fieldNames = ['email', 'password'];
  let [index, setIndex] = useState(0);
  let [inputs, setInputs] = useState({ email: '', password: '' });

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
      <h1 className={s.h1}>Вход на сайт</h1>
      <h2 className={s.h2}>Впервые на сайте? - <a href="/registration" className={s.a}>Зарегистрируйтесь</a></h2>
      {textArr.map((item, index) => (
        <div key={index} className={s.inputField}>
          <input
            type="text"
            className={s.inp}
            placeholder={item}
            onChange={e => handleWrite(e, fieldNames[index])}
          />
        </div>
      ))}
      <button className={s.button} onClick={() => disp(logining(inputs))}> <p className={s.p}>Войти</p> </button>
    </div>
  );
};

export default login;