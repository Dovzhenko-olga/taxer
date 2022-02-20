import { useState } from "react";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Drop.module.css';
import { getContacts } from '../../redux/contact-selectors';
import ASN1 from '@lapo/asn1js/asn1.ts';
import Hex from '@lapo/asn1js/hex.ts';

const Drop = ({ onDropWindow, dataClass, active }) => {
  const [added, setAdded] = useState(false);
  const [drag, setDrag] = useState(false);
  const contacts = useSelector(getContacts);

  const showDrop = data => {
    setAdded(data);
    onDropWindow();
  }

  const data = contacts.find(contact => contact.id === active)

  const dragStartHandler = e => {
    e.preventDefault();
    setDrag(true);
  }

  const dragLeaveHandler = e => {
    e.preventDefault();
    setDrag(false);
  }

  const onDropHandler = e => {
    e.preventDefault();
    let files = e.dataTransfer.files[0];
    let result = ASN1.decode(Hex.decode(files));
    console.log(result);
    setDrag(false);
  }

  return (
    <>
      {added
        ? <div className={styles.drop}> {drag
          ? <div className={styles.notify}
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
          >Отпустите файл</div>
          : <div className={styles.notify}
            onDragStart={e => dragStartHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragOver={e => dragStartHandler(e)}
          >Перетащите файл сертификата в это поле</div>}
        </div>
        : <div className={styles.show}>
          <span>{data?.name}</span> <span>{data?.number}</span>
        </div>
      }

      <button className={styles.button} data-title="Добавиление сертификата" onClick={() => { showDrop(dataClass) }}>Добавить</button>
    </>
  );
};

Drop.propTypes = {
  onDropWindow: PropTypes.func.isRequired,
  dataClass: PropTypes.bool.isRequired,
  active: PropTypes.string.isRequired,
}

export default Drop;