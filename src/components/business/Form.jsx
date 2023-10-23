import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

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
    } else {
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <div className='form'>
      <div className='form__name'>
        <div className={!name ? 'input' : 'input valid'}>
          <input
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
            className='input'
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
  );
};

export default Form;
