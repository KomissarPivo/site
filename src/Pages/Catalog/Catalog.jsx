import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleFilter, setPriceFilter, toggleCategory } from '../../Components/Filters/storeF';
import Items from '../../Components/items/Items.catalog';
import s from '../Catalog/Catalog.module.css';
import { selectFilteredProducts } from '../../Components/Filters/storeF';


const categories = ['steam', 'uplay', 'origin'];

const CustomPage = () => {
    const dispatch = useDispatch();
    const { title = '', priceRange = { min: 0, max: Infinity }, selectedCategories = [] } = useSelector(state => state.filter) || {};
    const minPrice = priceRange.min;
    const maxPrice = priceRange.max;
    const filteredItems = useSelector(selectFilteredProducts);

    return (
        <div className={s.maindiv}>
            <div className={s.ldiv}>
                <h2 className={s.mh2}>Фильтры</h2>
                <h2 className={s.hh2}>Название</h2>
                <input
                    className={s.inpt}
                    type="text"
                    placeholder="Поиск по названию"
                    value={title}
                    onChange={e => dispatch(setTitleFilter(e.target.value))}
                />
                <div className={s.md}>
                    <h1>_______________</h1>
                    <h2 className={s.hh2}>Цена</h2>
                    <p className={s.p2}>От</p>
                    <input
                        className={s.inptcost}
                        type="number"
                        placeholder="Цена от"
                        value={minPrice || ''}
                        onChange={e => dispatch(setPriceFilter({ min: Number(e.target.value) || 0, max: maxPrice }))}
                    />
                    <h1>_______________</h1>
                    <p className={s.p2}>До</p>
                    <input
                        className={s.inptcost}
                        type="number"
                        placeholder="Цена до"
                        value={maxPrice === Infinity ? '' : maxPrice}
                        onChange={e => dispatch(setPriceFilter({ min: minPrice, max: Number(e.target.value) || Infinity }))}
                    />
                    <h1>_______________</h1>
                    <div className={s.mcheckbox}>
                        {categories.map(category => (
                            <label key={category} className={s.input}>
                                <input
                                    className={s.checkbox}
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => dispatch(toggleCategory(category))}
                                />
                                <p className={s.p2_1}>{category}</p>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className={s.rdiv}>
                <h1 className={s.h1}>Результат поиска</h1>
                <div className={s.cards}>
                    {filteredItems && filteredItems.length > 0 ? (
                        <Items items={filteredItems} itemClass={s.item} />
                    ) : (
                        <p className={s.ep}>Товаров не найдено</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomPage;