import Section from '../Section';
import ContactForm from 'ContactForm';
import ContactList from 'ContactList';
import { useSelector, useDispatch } from 'react-redux';
import Filter from 'Filter';
import { useEffect } from 'react';
import { fetchContact } from '../redux/contactsOperation';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContact())
}, [dispatch])

  return (
    <div>
      
      <Section title="Phonebook">
        <ContactForm />
</Section>
      <Section title="Contacts">
        <Filter/>
        {contacts.length !== 0 ? <ContactList /> : <p>Here will be your contacts</p>}
        </Section>
    </div>
  );
};
