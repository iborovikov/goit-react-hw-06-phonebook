// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {removeContact} from '../../Redux/contacts/contact.actions'

function Contact ({removeContact, contacts, filter}) {

    const normalizedContact = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContact));

    return (
        visibleContacts.map(({ name, number, id }) =>
            <li key={id}>{name}: {number} <button type='button' id={id} onClick={(e) => removeContact(e.currentTarget.id)}>Delete</button></li>)
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
        removeContact: (id) => dispatch(removeContact(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)

// Contact.propTypes = {
//     removeContact: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//         id: PropTypes.string.isRequired
//     }))
// }