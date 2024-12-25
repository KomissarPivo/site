import React, { useState } from 'react'; 
import key from '../../assets/key.png'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from '../Features/ProfileSlice'; 
import s from './Header.module.css'; 
import Cart from '../../Pages/Cart/Cart'; 
import { selectCartItems } from '../../Pages/Cart/cartSlice'; 

const Header = () => { 
    const cartItems = useSelector(selectCartItems); 
    const dispatch = useDispatch(); 
    const [isCartOpen, setIsCartOpen] = useState(false); 
    
    // Здесь необходимо добавить получение состояния аутентификации
    const isAuth = useSelector((state) => state.profile.isAuth); // Пример получения состояния аутентификации

    const handleLogout = () => { 
        dispatch(logout()); 
    }; 

    const toggleCart = () => { 
        setIsCartOpen(!isCartOpen); 
    }; 

    return ( 
        <header> 
            <div className={s.d}> 
                <a className={s.btn} href="/"><img className={s.logo} src={key} alt="Logo" /></a> 
                <ul className={s.nav}> 
                    <li className={s.li}><a className={s.a} href="/MP">Главная</a></li> 
                    <li className={s.li}><a className={s.a} href="/catalog">Каталог</a></li> 
                    <li className={s.li}>
                        <button className={s.abb} onClick={toggleCart}>
                            Корзина ({cartItems.length > 0 ? cartItems.length : 'Пусто'})
                        </button>
                    </li> 
                    {isAuth ? ( 
                        <li className={s.li}><button className={s.ab} onClick={handleLogout}>Выйти из аккаунта</button></li> 
                    ) : ( 
                        <li className={s.li}><a className={s.a} href="/login">Войти</a></li> 
                    )} 
                </ul> 
            </div> 
            {isCartOpen && <Cart cartItems={cartItems} />} {/* Убедитесь, что Cart принимает cartItems */}
        </header> 
    ); 
}; 

export default Header;