import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './action.types';

const addContact = (contact) => ({
    type: ADD_CONTACT,
    payload: contact
})

const removeContact = (id) => ({
    type: REMOVE_CONTACT,
    payload: id
})

const setFilter = (name) => ({
    type: SET_FILTER,
    payload: name
})

export {
    addContact,
    setFilter,
    removeContact,
};