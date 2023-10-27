'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Form = ({ inModal }) => {
  //modal control
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '2',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: '0',
    },
  };

  //form validation
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, phone]);

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
      //open succsess modal
      setIsOpen(true);
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <>
      <div className={!inModal ? 'form' : 'form form_modal'}>
        <div className='form__name'>
          <div className={!name ? 'input' : 'input valid'}>
            <input
              className={!inModal ? '' : 'input_black'}
              type='text'
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
              type='text'
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal'>
          <h3>Успешно!</h3>
          <span className='modal__message'>
            Ваша заявка отправлена.
            <br />
            Мы свяжемся с вами
            <br /> в ближайшее время.
          </span>
          <button
            className='modal__button button button_black'
            onClick={() => setIsOpen(false)}
          >
            отлично!
          </button>
          <Image
            className='modal__close'
            src={'/images/close-modal_black.svg'}
            width={24}
            height={24}
            alt='close'
            onClick={() => setIsOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
};

export default Form;
