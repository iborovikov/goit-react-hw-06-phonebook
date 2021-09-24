import { combineReducers } from "redux";
import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './action.types';

const itemReduser = (state = [], action) => {
    
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];
        case REMOVE_CONTACT:
            return state.filter(contact => contact.id !== action.payload);
        default: return state
    };
}
const filterReduser = (state = '', action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default: return state
    };

};
const contactsReduser = combineReducers({
    items: itemReduser,
    filter: filterReduser
})
export default contactsReduser;