import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReduser from "./contacts/contact.redusers";

const preloadedState = () => {
    
    const localStoregeContacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(localStoregeContacts)

    return {
        contacts: {
            items: parsedContacts,
            filter: ''
        }
    };
};

const rootReduser = combineReducers({
    contacts: contactsReduser
})

const store = createStore(rootReduser, preloadedState(), composeWithDevTools())

export default store