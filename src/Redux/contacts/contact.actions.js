import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/addContact', (name, number) => {
    return {
        payload: {
            id: shortid.generate(),
            name,
            number
        }
    };
});
const removeContact = createAction('contacts/removeContact')
const setFilter = createAction('contacts/setFilter')

export {
    addContact,
    setFilter,
    removeContact,
};