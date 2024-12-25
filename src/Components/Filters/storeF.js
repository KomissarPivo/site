import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const initialState = {
  title: '',
  priceRange: { min: 0, max: Infinity },
  selectedCategories: [],
};



const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    title: '',
    priceRange: { min: 0, max: Infinity },
    selectedCategories: [],
  },
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.priceRange = action.payload;
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(c => c !== category);
      } else {
        state.selectedCategories = [...state.selectedCategories, category];
      }
    },
  },
});

const items = [
  { id: 1, title: 'Prey', img: 'Prey.png', category: 'steam', price: 1 },
  { id: 2, title: 'Dishonored2', img: 'Dishonored2.png', category: 'steam', price: 10 },
  { id: 3, title: 'DOOM', img: 'DOOM.png', category: 'uplay', price: 20 },
  { id: 4, title: 'GhostRunner', img: 'GhostRunner.png', category: 'uplay', price: 30 },
  { id: 5, title: 'HeartsOfIron4', img: 'HeartsOfIron4.png', category: 'origin', price: 100 },
  { id: 6, title: 'Infamous2', img: 'Infamous2.png', category: 'origin', price: 99 },
];

const selectItems = (state) => items;
const selectFilter = (state) => state.filter;

const selectFilteredProducts = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    const titleRegex = new RegExp(filter.title.toLowerCase(), 'i');

    return items.filter(item => {
      const titleMatch = titleRegex.test(item.title.toLowerCase()) || filter.title === '';
      const priceMatch = (item.price >= filter.priceRange.min) && (item.price <= filter.priceRange.max);

      const categoryMatch = !filter.selectedCategories.length || filter.selectedCategories.includes(item.category);
      return titleMatch && priceMatch && categoryMatch;
    });
  }
);

export const { setTitleFilter, setPriceFilter, toggleCategory } = filterSlice.actions;
export { selectFilteredProducts };

export default filterSlice.reducer;