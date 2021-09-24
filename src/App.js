import { connect } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Form from './Components/Form/Form'
import Filter from './Components/Filter/filter'
import ContactList from './Components/Contacts/ContactList';
import shortid from 'shortid';
import { addContact, setFilter } from './Redux/contacts/contact.actions'

function App({ addContact, setFilter, contacts, filter }) {

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.items,
        filter: state.contacts.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (name, number) => {
            const contact = {
                id: shortid.generate(),
                name,
                number
            };
             dispatch(addContact(contact))},
        setFilter: (value) => dispatch(setFilter(value)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
