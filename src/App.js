import './App.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Form from './Components/Form/Form';
import Filter from './Components/Filter/filter';
import ContactList from './Components/Contacts/ContactList';

function App({contacts}) {

  useEffect(() => {
    localStorage.setItem('persist:contacts', JSON.stringify(contacts));
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
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};
