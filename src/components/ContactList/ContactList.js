import { getFilter } from '../../redux/contacts';
import { useSelector } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useFetchContactsQuery } from '../../redux/contacts';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts } = useFetchContactsQuery();
  const getfilteredContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );

  const contactFilterList = contacts ? getfilteredContacts(contacts) : null;

  return (
    <>
      {!contactFilterList || contactFilterList.length === 0 ? (
        <p>Упс, такого контакта нет в вашем телефоне!</p>
      ) : (
        <ul>
          {contactFilterList.map(item => (
            <ContactListItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;
