'use client';
import { useState } from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';

import Form from './Form';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = ({ color }) => {
  const { data, error } = useSWR('https://grandavenue.ru/api/header', fetcher);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  }

  function closeForm() {
    setIsFormOpen(false);
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0';
  }

  function openMenu() {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  }

  function closeMenu() {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
    document.body.style.paddingRight = '0';
  }

  return (
    <>
      <header className={'header container ' + color}>
        <div className='header__column'>
          <Image
            src='images/burger.svg'
            width={24}
            height={24}
            alt='menu'
            onClick={openMenu}
          />

          <div href={'/#'} className='header__discount' onClick={openForm}>
            <Image src='images/sale.svg' width={24} height={24} alt='sale' />
            <span>Скидка до 15% в октябре</span>
          </div>
        </div>
        <Link href={'/'} className='header__logo'>
          <Image src='images/logo.svg' width={53} height={44} alt='logo' />
          <Image
            src='images/logo-text.svg'
            width={202}
            height={19}
            alt='logo-text'
          />
        </Link>
        <div className='header__column'>
          <Link href={'tel:+73211232123'} className='header__phone-icon'>
            <Image src='images/phone.svg' width={24} height={24} alt='phone' />
          </Link>
          <Link href={'tel:+73211232123'} className='header__phone link'>
            +7 321 123 21 23
          </Link>
          <Link
            href={'/layouts'}
            className='header__button button button_secondary'
          >
            Выбрать квартиру
          </Link>
        </div>
        <div className={isMenuOpen ? 'menu menu_active' : 'menu'}>
          <div className='menu__wrapper'>
            <Image
              src='images/close-modal.svg'
              width={24}
              height={24}
              alt='close'
              onClick={closeMenu}
            />
            <nav className='menu__nav'>
              {/* {data.data.menu.map((item) => (
                <Link
                  key={item.id}
                  href={item.anchor}
                  className='link'
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))} */}
            </nav>
            <span
              className='menu__callback button button_secondary'
              onClick={openForm}
            >
              Заказать звонок
            </span>
            <div className='menu__office'>
              <span>Офис продаж:</span>
              <span>Группа компаний «Первый Трест» г. Уфа, ул. Цюрупы, 30</span>
              <span>ПН-ПТ: 9:00 — 20:00, СБ: 10:00 — 18:00, ВС: выходной</span>
            </div>
            <Link href={'tel:+73472017063'} className='menu__phone link'>
              +7 (347) 201-70-63
            </Link>
            <div className='menu__socials'>
              <Link href={'#viber'}>
                <Image
                  src='images/viber.svg'
                  width={40}
                  height={40}
                  alt='viber'
                />
              </Link>
              <Link href={'#vk'}>
                <Image src='images/vk.svg' width={40} height={40} alt='vk' />
              </Link>
              <Link href={'#telegram'}>
                <Image
                  src='images/telegram.svg'
                  width={40}
                  height={40}
                  alt='telegram'
                />
              </Link>
              <Link href={'#whatsapp'}>
                <Image
                  src='images/whatsapp.svg'
                  width={40}
                  height={40}
                  alt='whatsapp'
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={!isFormOpen ? 'popup' : 'popup popup_active'}>
        <div className='popup__container'>
          <Image
            className='popup__close'
            src='images/close-modal_black.svg'
            width={24}
            height={24}
            alt='close'
            onClick={closeForm}
          />
          <h3>Обратный звонок</h3>
          <Form inModal={true} />
        </div>
      </div>
    </>
  );
};

export { Header };
