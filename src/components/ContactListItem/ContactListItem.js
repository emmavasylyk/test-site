import { useDeleteContactMutation } from '../../redux/contacts';
import { ImBin } from 'react-icons/im';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.Item}>
      <p className={s.ContactList}></p>
      {name}: {phone}{' '}
      <button
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        className={s.Button}
      >
        <ImBin className={s.ButtonIcon} />
        Delete
      </button>
    </li>
  );
};
