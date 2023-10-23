import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Popup from '../ui/popup';

const Form = ({ inModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function openPopup() {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  }

  function closePopup() {
    setIsPopupOpen(false);
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0';
  }

  useEffect(() => {
    validateForm();
  }, [name, phone]);
  // Validate form
  const validateForm = () => {
    let errors = {};

    if (!name) {
      errors.name = 'Введите ваше имя';
    }

    if (!phone) {
      errors.phone = 'Введите номер телефона';
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  // Submit
  const handleSubmit = () => {
    if (isFormValid) {
      console.log('Form submitted successfully!');
      setName('');
      setPhone('');
      openPopup();
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <>
      <div className={!inModal ? 'form' : 'form form_column'}>
        <div className='form__name'>
          <div className={!name ? 'input' : 'input valid'}>
            <input
              className={!inModal ? '' : 'input_black'}
              placeholder='Ваше имя'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className='input__error'>{errors.name}</p>}
          </div>
        </div>
        <div className='form__phone'>
          <div className={!phone ? 'input' : 'input valid'}>
            <input
              className={!inModal ? '' : 'input_black'}
              placeholder='Ваш телефон'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className='input__error'>{errors.phone}</p>}
          </div>
        </div>
        <div className='form__privacy'>
          <span>Отправляя форму вы соглашаетесь с </span>
          <Link href={'/privacy'} className='link'>
            условиями обработки личных данных
          </Link>
        </div>
        <button
          className={
            isFormValid
              ? 'button form__submit'
              : 'button button_disabled form__submit'
          }
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          Отправить
        </button>
      </div>
      <div className={!isPopupOpen ? 'popup' : 'popup popup_active'}>
        <div className='popup__container'>
          <svg
            className='popup__close'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            onClick={closePopup}
          >
            <path
              d='M6 6L12 12M12 12L18 18M12 12L6 18M12 12L18 6'
              stroke='#212529'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
          <h3>Успешно!</h3>
          <span className='popup__message'>
            Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </span>
          <span className='button button_black' onClick={closePopup}>
            отлично!
          </span>
        </div>
      </div>
    </>
  );
};

export default Form;
