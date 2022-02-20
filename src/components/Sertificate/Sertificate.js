import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Sertificate.module.css';
import { getContacts } from '../../redux/contact-selectors';

const Sertificate = ({ onClick, dataClass }) => {
  const [activeContact, setActiveContact] = useState(0);

  const contacts = useSelector(getContacts);

  const handleCheck = e => {
    e.preventDefault();
    const id = e.target.dataset.id;
    setActiveContact(id);
    onClick(id);
  };

  return (
    <ul className={dataClass ? styles.listActive : styles.list}>
      {contacts.map(({ id, name }) => (
        <li data-title={'Просмотр сертификата ' + name} data-id={id} className={activeContact === id && dataClass ? styles.itemActive : styles.item} key={id} onClick={handleCheck}>
          {name}
        </li>
      ))}
    </ul>
  );
};

Sertificate.propTypes = {
  onClick: PropTypes.func.isRequired,
  dataClass: PropTypes.bool.isRequired,
}

export default Sertificate;