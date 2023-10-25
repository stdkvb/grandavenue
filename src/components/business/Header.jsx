'use client';
import { useState } from 'react';
import Modal from 'react-modal';
import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import Form from './Form';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = ({ color }) => {
  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/header',
    fetcher
  );
  // console.log(data)

  //menu control
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <header className={'header container ' + color}>
        <div className='header__column'>
          <Image
            className='header__burger'
            src='images/burger.svg'
            width={24}
            height={24}
            alt='menu'
            onClick={openMenu}
          />
          <div className='header__discount' onClick={() => setIsOpen(true)}>
            <Image src='images/sale.svg' width={24} height={24} alt='sale' />
            <span>{data && !isLoading && data.data.additionalText}</span>
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
              {data &&
                !isLoading &&
                data.data.menu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.anchor}
                    className='link'
                    onClick={closeMenu}
                  >
                    {item.title}
                  </Link>
                ))}
            </nav>
            <span
              className='menu__callback button button_secondary'
              onClick={() => setIsOpen(true)}
            >
              Заказать звонок
            </span>
            <div className='menu__office'>
              <span>Офис продаж:</span>
              <span>{data && !isLoading && data.data.office}</span>
              <span>{data && !isLoading && data.data.schedule}</span>
            </div>
            <Link href={'tel:+73472017063'} className='menu__phone link'>
              +7 (347) 201-70-63
            </Link>
            <div className='menu__socials'>
              <Link href={'' && data && !isLoading && data.data.link.viber}>
                <Image
                  src='images/viber.svg'
                  width={40}
                  height={40}
                  alt='viber'
                />
              </Link>
              <Link href={'' && data && !isLoading && data.data.link.vk}>
                <Image src='images/vk.svg' width={40} height={40} alt='vk' />
              </Link>
              <Link href={'' && data && !isLoading && data.data.link.tg}>
                <Image
                  src='images/telegram.svg'
                  width={40}
                  height={40}
                  alt='telegram'
                />
              </Link>
              <Link href={'' && data && !isLoading && data.data.link.wa}>
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
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal'>
          <h3>Обратный звонок</h3>
          <Form inModal={true} />
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

export { Header };
