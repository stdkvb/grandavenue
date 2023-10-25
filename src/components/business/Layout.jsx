'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Modal from 'react-modal';

const Layout = (data) => {
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
    <div className='layouts__content'>
      <div className='layouts__column'>
        <div className='layouts__image'>
          <img
            src={'https://grandavenue.ru' + data.data.imageUrl}
            alt='layout'
          />
          <Image
            className='layouts__zoom'
            src='images/zoom.svg'
            width={150}
            height={150}
            alt='zoom'
            onClick={() => setIsOpen(true)}
          />
        </div>
        <div className='layouts__views'>
          <span className='layouts__subtitle'>Вид:</span>
          <span className='button button_secondary button_small active'>
            схема
          </span>
          <span className='button button_secondary button_small'>сверху</span>
          <span className='button button_secondary button_small'>сбоку</span>
        </div>
      </div>
      <div className='layouts__column'>
        <div className='layouts__text'>
          <h3>{data.data.fullName}</h3>
          <div className='layouts__info'>
            <div className='layouts__info-item'>
              <span className='layouts__subtitle'>Срок сдачи:</span>
              <span>{data.data.term}</span>
            </div>
            <div className='layouts__info-item'>
              <span className='layouts__subtitle'>Площадь:</span>
              <span>{data.data.area}</span>
            </div>
            <div className='layouts__info-item'>
              <span className='layouts__subtitle'>Кв. № :</span>
              <span>55</span>
            </div>
            <div className='layouts__info-item'>
              <span className='layouts__subtitle'>Этаж:</span>
              <span>5</span>
            </div>
          </div>
          <p>{data.data.description}</p>
        </div>
        <div className='layouts__buttons'>
          <span className='button'>Узнать стоимость</span>
          <Link
            href={'' && data && !isLoading && data.data.link}
            className='button button_secondary'
          >
            3D-тур
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal modal_layouts'>
          <div className='modal__views'>
            <span className='layouts__subtitle'>Вид:</span>
            <span className='button button_black-border button_small active'>
              схема
            </span>
            <span className='button button_black-border button_small'>
              сверху
            </span>
            <span className='button button_black-border button_small'>
              сбоку
            </span>
          </div>
          <img
            className='modal__image'
            src='https://s3-alpha-sig.figma.com/img/2f51/a189/e034ef0364d46c95048a54a67549285c?Expires=1698624000&Signature=Eq4DUB7G2tRn4CnAunKtF-pa3DKTn3zPrOr22yfoKBmP6c5kxz~D5iXYG8zDj6dXb-0zqJYDacQ9MtNhipklPmAwf860icTfbX0iwiTyMshKXkeihuc9G-1dirgo1TehxLZbkwohStXP4Oz10GPkItAwmTbH1fK0Pn2OXA7mWzxeAlP~FH6RUdgCc9P1czmT0Mbb625lU6r0I-wAXKKKKRr-GJ2-udgwTS3twAqiUsuw8vkOft71BgmKI3CQZ~LfZ6nq7fcLwhY9FnhYJ8B3-X2kaoPcz4C-rf3Q~EU-hS8Z6g5wdz-m3-ADFUudK9mil8Yvlvb4OixatxcRd3aIfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            alt='layout'
          />
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
    </div>
  );
};

export default Layout;
