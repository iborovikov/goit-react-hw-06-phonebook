import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, setFilter, removeContact } from './contact.actions';

const items = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [removeContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
});

const filter = createReducer('', {
    [setFilter]: (_, action) => action.payload
});

const contactsReduser = combineReducers({
    items,
    filter
});
export default contactsReduser;