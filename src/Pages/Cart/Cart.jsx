import React from 'react';
import s from "../Cart/Cart.module.css"; 
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeItem, updateItemQuantity } from './cartSlice'; // Импорт action creators


const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleQuantityChange = (itemId, quantity) => {
        dispatch(updateItemQuantity({ id: itemId, quantity: parseInt(quantity, 10) }));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className={s.cart}>
            <h2 className={s.h2}>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id} className={s.cartItem}>
                                {item.name} - Цена: {item.price} $. - Количество:
                                <input
                                className={s.inp}
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                />
                                <button onClick={() => handleRemoveItem(item.id)} className={s.mbtn}>Удалить</button>
                            </li>
                        ))}
                    </ul>
                    <p className={s.p}>Общая сумма: {total} $.</p>
                    <button className={s.btn}>Оплатить</button>
                </>
            )}
        </div>
    );
};

export default Cart;