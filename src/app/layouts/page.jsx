'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import { useTitle } from '@/src/hooks';
import Modal from 'react-modal';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Layouts = () => {
  useTitle('GrandAvenue | Планировки');

  //get data
  const { data, error, isLoading } = useSWR(
    'https://grandavenue.ru/api/layouts',
    fetcher
  );

  // console.log(data);

  //modal control
  const [isOpen, setIsOpen] = useState(false);
  const [currentLayout, setCurrentLayout] = useState(null);

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
      maxWidth: '93%',
    },
  };

  const [activeView, setActiveView] = useState(0);
  const [modalActiveView, setModalActiveView] = useState(activeView);

  const onModalOpen = (layout) => {
    console.log(layout);
    setIsOpen(true);
    setCurrentLayout(layout);
    console.log(currentLayout);
    setModalActiveView(activeView);
  };

  const onModalClose = () => {
    setIsOpen(false);
    setCurrentLayout(null);
    setModalActiveView(0);
  };

  //filter control
  const [activeIndex, setActiveIndex] = useState(0);

  //views control
  const views = ['схема', 'сверху', 'сбоку'];

  return (
    <>
      <section className='layouts'>
        <div className='container container_narrow'>
          <div className='layouts__title'>
            <h2>Планировки</h2>
            <p>{data && !isLoading && data.data.additionalText}</p>
          </div>
          <div className='layouts__filter'>
            <span className='layouts__subtitle'>Тип квартиры:</span>
            <div className='layouts__filter-list'>
              {data &&
                !isLoading &&
                data.data.layouts.map((layout, i) => (
                  <span
                    className={
                      activeIndex === i
                        ? 'button button_secondary button_small active'
                        : 'button button_secondary button_small'
                    }
                    key={layout.id}
                    onClick={() => setActiveIndex(i)}
                  >
                    {layout.name}
                  </span>
                ))}
            </div>
          </div>
          {data &&
            !isLoading &&
            data.data.layouts.map((layout, i) => (
              <div
                className={
                  activeIndex === i
                    ? 'layouts__content active'
                    : 'layouts__content'
                }
                key={layout.id}
              >
                <div className='layouts__column'>
                  <div className='layouts__image'>
                    <img
                      src={
                        'https://grandavenue.ru' +
                        ((activeView === 0 && layout.viewsImageUrl.schema) ||
                          (activeView === 1 && layout.viewsImageUrl.top) ||
                          (activeView === 2 && layout.viewsImageUrl.side))
                      }
                      alt='layout'
                    />
                    <Image
                      className='layouts__zoom'
                      src='images/zoom.svg'
                      width={150}
                      height={150}
                      alt='zoom'
                      onClick={() => onModalOpen(layout)}
                    />
                  </div>
                  <div className='layouts__views'>
                    <span className='layouts__subtitle'>Вид:</span>
                    {views.map((item, i) => (
                      <span
                        className={
                          activeView === i
                            ? 'button button_secondary button_small active'
                            : 'button button_secondary button_small'
                        }
                        key={item.id}
                        onClick={() => setActiveView(i)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='layouts__column'>
                  <div className='layouts__text'>
                    <h3>{layout.fullName}</h3>
                    <div className='layouts__info'>
                      <div className='layouts__info-item'>
                        <span className='layouts__subtitle'>Срок сдачи:</span>
                        <span>{layout.term}</span>
                      </div>
                      <div className='layouts__info-item'>
                        <span className='layouts__subtitle'>Площадь:</span>
                        <span>{layout.area}</span>
                      </div>
                      {/* extra properties of each layout */}
                      {/* {layout.extraProperties.map((item) => (
                          <div className='layouts__info-item' key={item.id}>
                            <span className='layouts__subtitle'>
                              {item.name}
                            </span>
                            <span>{item.value}</span>
                          </div>
                        ))} */}
                      <div className='layouts__info-item'>
                        <span className='layouts__subtitle'>Кв. № :</span>
                        <span>55</span>
                      </div>
                      <div className='layouts__info-item'>
                        <span className='layouts__subtitle'>Этаж:</span>
                        <span>5</span>
                      </div>
                    </div>
                    <p>{layout.description}</p>
                  </div>
                  <div className='layouts__buttons'>
                    <span className='button'>Узнать стоимость</span>
                    <Link
                      href={data && !isLoading && layout.link}
                      className='button button_secondary'
                    >
                      3D-тур
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
            ariaHideApp={false}
          >
            <div className='modal modal_layouts'>
              <div className='modal__views'>
                <span className='layouts__subtitle'>Вид:</span>
                {views.map((item, i) => (
                  <span
                    className={
                      modalActiveView === i
                        ? 'button button_black-border button_small active'
                        : 'button button_black-border button_small'
                    }
                    key={item.id}
                    onClick={() => setModalActiveView(i)}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <img
                className='modal__image'
                src={
                  'https://grandavenue.ru' +
                  ((modalActiveView === 0 &&
                    currentLayout &&
                    currentLayout.viewsImageUrl.schema) ||
                    (modalActiveView === 1 &&
                      currentLayout &&
                      currentLayout.viewsImageUrl.top) ||
                    (modalActiveView === 2 &&
                      currentLayout &&
                      currentLayout.viewsImageUrl.side))
                }
                alt='layout'
              />
              <Image
                className='modal__close'
                src={'/images/close-modal_black.svg'}
                width={24}
                height={24}
                alt='close'
                onClick={onModalClose}
              />
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Layouts;
