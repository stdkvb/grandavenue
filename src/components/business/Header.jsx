'use client';
import { useState } from 'react';
import Link from 'next/link';
import Form from './Form';

const Header = ({ color }) => {
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
          <svg
            onClick={openMenu}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M3 15H21M3 9H21'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <div href={'/#'} className='header__discount' onClick={openForm}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M4.74791 7.64502L4.41669 11.2885C4.36763 11.8281 4.34289 12.1001 4.3878 12.3584C4.42792 12.5892 4.50806 12.8112 4.62496 13.0142C4.7563 13.2422 4.95043 13.4363 5.33647 13.8224L10.512 18.9979C11.299 19.7849 11.6927 20.1786 12.148 20.3265C12.5496 20.4571 12.983 20.4573 13.3847 20.3268C13.8414 20.1785 14.2382 19.7821 15.0302 18.9901L18.99 15.0303C19.7821 14.2382 20.1774 13.8424 20.3258 13.3857C20.4563 12.9841 20.4555 12.5511 20.325 12.1495C20.1766 11.6928 19.7819 11.297 18.9898 10.505L13.8271 5.34229C13.4375 4.95272 13.2427 4.75792 13.0136 4.62598C12.8107 4.50908 12.5886 4.4286 12.3579 4.38848C12.0974 4.3432 11.823 4.36809 11.2743 4.41797L7.64449 4.74796C6.69973 4.83384 6.22705 4.87698 5.85738 5.08255C5.53145 5.26379 5.26277 5.53248 5.08152 5.8584C4.87698 6.22623 4.83432 6.69555 4.74929 7.63092L4.74791 7.64502Z'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M9.71259 9.71297C10.1031 9.32244 10.1031 8.68928 9.71259 8.29876C9.32206 7.90823 8.68845 7.90823 8.29792 8.29876C7.9074 8.68928 7.90702 9.32229 8.29755 9.71282C8.68807 10.1033 9.32206 10.1035 9.71259 9.71297Z'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <span>Скидка до 15% в октябре</span>
          </div>
        </div>
        <Link href={'/'} className='header__logo'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='53'
            height='44'
            viewBox='0 0 53 44'
            fill='none'
          >
            <path
              d='M52.1663 11.4926C52.1663 9.48304 51.5052 7.60346 50.359 5.99038L52.9576 3.83122L48.3466 0L45.7479 2.15916C43.8065 1.20572 41.5431 0.657468 39.1245 0.657468C31.9227 0.657468 26.084 5.50876 26.084 11.4926C26.084 17.4764 31.9227 22.3277 39.1245 22.3277C41.5431 22.3277 43.8052 21.7783 45.7466 20.826L48.3466 22.9851L52.9576 19.1539L50.359 16.9947C51.5065 15.3817 52.1676 13.501 52.1676 11.4915L52.1663 11.4926ZM39.1258 16.9106C35.5243 16.9106 32.6049 14.485 32.6049 11.4926C32.6049 8.50012 35.5243 6.07557 39.1258 6.07557C42.7274 6.07557 45.6467 8.50121 45.6467 11.4926C45.6467 14.4839 42.7274 16.9106 39.1258 16.9106Z'
              fill='#F05A22'
            />
            <path
              d='M13.0415 22.3291V27.7461C16.643 27.7461 19.5624 30.1717 19.5624 33.1642C19.5624 36.1566 16.643 38.5823 13.0415 38.5823C9.43993 38.5823 6.52057 36.1566 6.52057 33.1642H0.000976562C0.000976562 39.148 5.8397 43.9993 13.0415 43.9993C20.2433 43.9993 26.082 39.148 26.082 33.1642C26.082 27.1804 20.2433 22.3291 13.0415 22.3291Z'
              fill='#F05A22'
            />
            <path
              d='M26.8749 3.83122L22.2639 0L19.6653 2.15916C17.7238 1.20572 15.4604 0.657468 13.0418 0.657468C5.84004 0.657468 0 5.50876 0 11.4926C0 17.4764 5.83872 22.3277 13.0418 22.3277C20.2449 22.3277 26.0823 17.4764 26.0823 11.4926C26.0823 9.48304 25.4212 7.60346 24.275 5.99038L26.8736 3.83122H26.8749ZM13.0431 16.9106C9.44159 16.9106 6.52223 14.485 6.52223 11.4926C6.52223 8.50012 9.44159 6.07557 13.0431 6.07557C16.6447 6.07557 19.5641 8.50121 19.5641 11.4926C19.5641 14.4839 16.6447 16.9106 13.0431 16.9106Z'
              fill='#F05A22'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='202'
            height='19'
            viewBox='0 0 202 19'
            fill='none'
          >
            <path
              d='M9.39956 10.7244C7.10981 10.7244 5.96625 10.1914 5.96625 9.12659C5.96625 8.06176 7.10981 7.51022 9.39956 7.51022C11.6893 7.51022 12.8329 8.0421 12.8329 9.12659C12.8329 10.2111 11.6893 10.7244 9.39956 10.7244ZM12.8329 4.10604V5.30521C11.6656 4.39218 9.94899 3.93566 7.6829 3.93566C5.41682 3.93566 3.70016 4.39218 2.5106 5.30521C1.36704 6.19857 0.793945 7.4731 0.793945 9.12768C0.793945 10.7823 1.36704 12.0371 2.5106 12.9305C3.70016 13.8435 5.41813 14.3 7.6829 14.3C9.94767 14.3 11.6656 13.8435 12.8329 12.9305V13.0452C12.8329 13.8435 12.5121 14.4333 11.8497 14.8134C11.1622 15.1945 10.0633 15.3845 8.53072 15.3845C6.49466 15.3845 4.34161 14.9663 2.07684 14.1297V17.7042C4.45596 18.4272 6.83641 18.7702 9.1945 18.7702C12.2847 18.7702 14.5495 18.2754 15.9914 17.2674C17.3414 16.3358 18.0052 14.928 18.0052 13.0463V4.10823H12.8329V4.10604ZM24.8941 4.10604H19.7218V14.8505H24.8941V10.9144C24.8941 9.92493 25.3068 9.24016 26.1533 8.84153C26.9762 8.42324 28.4181 8.23323 30.4791 8.23323V3.93457C27.962 3.93457 26.1073 4.60077 24.8941 5.95065V4.10495V4.10604ZM39.5198 11.4474C37.2301 11.4474 36.0865 10.7823 36.0865 9.46951C36.0865 8.15676 37.2301 7.51022 39.5198 7.51022C41.8096 7.51022 42.9755 8.15676 42.9755 9.46951C42.9755 10.7823 41.8306 11.4474 39.5198 11.4474ZM42.9755 5.41879C41.7859 4.42932 40.0693 3.93457 37.8019 3.93457C35.5345 3.93457 33.8428 4.4293 32.6296 5.39912C31.4847 6.35037 30.9129 7.71881 30.9129 9.46842C30.9129 11.218 31.486 12.6061 32.6296 13.5574C33.8428 14.5272 35.5594 15.0219 37.8019 15.0219C40.0443 15.0219 41.7846 14.5272 42.9755 13.5388V14.8505H48.1241V4.10604H42.9755V5.41879ZM59.9816 3.93457C57.8299 3.93457 56.1593 4.39109 55.0144 5.30411V4.10495H49.8644V14.8494H55.0144V9.27729C55.0144 8.06065 56.0909 7.43269 58.2413 7.43269C60.3918 7.43269 61.4696 8.06065 61.4696 9.27729V14.8494H66.6406V9.27729C66.6406 7.56592 66.0924 6.27285 64.9699 5.34126C63.825 4.40857 62.1544 3.93348 59.9803 3.93348L59.9816 3.93457ZM76.324 11.4463C74.0356 11.4463 72.8894 10.7812 72.8894 9.46842C72.8894 8.15567 74.0343 7.50913 76.324 7.50913C78.6138 7.50913 79.7784 8.15567 79.7784 9.46842C79.7784 10.7812 78.6124 11.4463 76.324 11.4463ZM79.7784 5.4177C78.5901 4.42822 76.8498 3.93348 74.6074 3.93348C72.3649 3.93348 70.6246 4.42823 69.4351 5.39805C68.2902 6.3493 67.7197 7.71772 67.7197 9.46732C67.7197 11.2169 68.2915 12.6051 69.4351 13.5563C70.6246 14.5261 72.3649 15.0208 74.6074 15.0208C76.8498 15.0208 78.5901 14.5261 79.7784 13.5377V14.8494H84.9296V0.529297H79.7784V5.4177ZM102.576 11.4463C100.287 11.4463 99.1413 10.7812 99.1413 9.46842C99.1413 8.15567 100.287 7.50913 102.576 7.50913C104.864 7.50913 106.032 8.15567 106.032 9.46842C106.032 10.7812 104.887 11.4463 102.576 11.4463ZM106.032 5.4177C104.841 4.42822 103.102 3.93348 100.858 3.93348C98.6142 3.93348 96.8752 4.42823 95.687 5.39805C94.5421 6.3493 93.9703 7.71772 93.9703 9.46732C93.9703 11.2169 94.5421 12.6051 95.687 13.5563C96.8752 14.5261 98.6155 15.0208 100.858 15.0208C103.1 15.0208 104.841 14.5261 106.032 13.5377V14.8494H111.182V4.10495H106.032V5.4177ZM124.959 4.10495L121.299 11.4081L117.637 4.10495H112.052L117.432 14.8494H125.189L130.569 4.10495H124.961H124.959ZM138.739 7.14872C140.409 7.14872 141.462 7.56701 141.92 8.40358H135.558C136.015 7.56701 137.068 7.14872 138.739 7.14872ZM147.254 10.1914L147.322 9.82992C147.344 9.69668 147.344 9.58309 147.344 9.46842C147.344 7.71881 146.633 6.34927 145.193 5.39912C143.705 4.4293 141.553 3.93457 138.739 3.93457C135.924 3.93457 133.773 4.4293 132.285 5.39912C130.842 6.35037 130.133 7.71881 130.133 9.46842C130.133 11.218 130.842 12.6061 132.285 13.5574C133.773 14.5272 135.923 15.0219 138.739 15.0219C143.568 15.0219 146.36 13.6535 147.138 10.9144H141.599C141.027 11.5031 140.066 11.8078 138.739 11.8078C136.884 11.8078 135.786 11.2563 135.442 10.1914H147.254ZM158.743 3.93457C156.591 3.93457 154.943 4.39109 153.799 5.30411V4.10495H148.626V14.8494H153.799V9.27729C153.799 8.06065 154.873 7.43269 157.025 7.43269C159.177 7.43269 160.253 8.06065 160.253 9.27729V14.8494H165.426V9.27729C165.426 7.56592 164.854 6.27285 163.733 5.34126C162.588 4.40857 160.939 3.93348 158.743 3.93348V3.93457ZM178.335 13.6524C177.19 14.5654 175.543 15.0208 173.392 15.0208C171.242 15.0208 169.524 14.5458 168.403 13.6142C167.282 12.6826 166.71 11.3698 166.71 9.67813V4.10604H171.881V9.67813C171.881 10.8959 172.957 11.5227 175.109 11.5227C177.261 11.5227 178.335 10.8959 178.335 9.67813V4.10604H183.508V14.8505H178.335V13.6524ZM193.394 7.14872C195.066 7.14872 196.118 7.56701 196.575 8.40358H190.213C190.671 7.56701 191.722 7.14872 193.393 7.14872H193.394ZM201.909 10.1914L201.977 9.82992C202 9.69668 202 9.58309 202 9.46842C202 7.71881 201.291 6.34927 199.848 5.39912C198.384 4.4293 196.232 3.93457 193.394 3.93457C190.556 3.93457 188.428 4.4293 186.94 5.39912C185.498 6.35037 184.789 7.71881 184.789 9.46842C184.789 11.218 185.498 12.6061 186.94 13.5574C188.428 14.5272 190.58 15.0219 193.394 15.0219C198.225 15.0219 201.039 13.6535 201.795 10.9144H196.254C195.683 11.5031 194.723 11.8078 193.394 11.8078C191.54 11.8078 190.442 11.2563 190.099 10.1914H201.909Z'
              fill='white'
            />
          </svg>
        </Link>
        <div className='header__column'>
          <Link href={'tel:+73211232123'} className='header__phone-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
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
            <svg
              onClick={closeMenu}
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <nav className='menu__nav'>
              <Link href={'/project'} className='link' onClick={closeMenu}>
                О проекте
              </Link>
              <Link href={'/location'} className='link' onClick={closeMenu}>
                Расположение
              </Link>
              <Link href={'/architecture'} className='link' onClick={closeMenu}>
                Архитектура
              </Link>
              <Link
                href={'/infrastructure'}
                className='link'
                onClick={closeMenu}
              >
                Инфраструктура
              </Link>
              <Link href={'/layouts'} className='link' onClick={closeMenu}>
                Планировка
              </Link>
              <Link href={'/parking'} className='link' onClick={closeMenu}>
                Паркинг
              </Link>
              <Link href={'/contacts'} className='link' onClick={closeMenu}>
                Контакты
              </Link>
              <Link href={'#'} className='link' onClick={closeMenu}>
                Документы
              </Link>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <g clip-path='url(#clip0_413_1423)'>
                    <path
                      d='M26.2539 9.54591C22.4424 8.81803 18.4843 8.81803 14.6728 9.54591C12.9869 9.90986 10.8613 11.9479 10.4948 13.5493C9.83508 16.6792 9.83508 19.8819 10.4948 23.0118C10.9346 24.6131 13.0602 26.6512 14.6728 27.0152C14.7461 27.0152 14.8194 27.0879 14.8194 27.1607V31.7464C14.8194 31.9648 15.1126 32.1103 15.2592 31.892L17.4581 29.6355C17.4581 29.6355 19.2173 27.8158 19.5105 27.5247C19.5105 27.5247 19.5838 27.4519 19.6571 27.4519C21.856 27.5247 24.1283 27.3063 26.3272 26.9424C28.0131 26.5784 30.1387 24.5403 30.5052 22.939C31.1649 19.8091 31.1649 16.6064 30.5052 13.4765C30.0654 11.9479 27.9398 9.90986 26.2539 9.54591ZM26.3272 23.2302C25.9607 23.958 25.5209 24.5403 24.788 24.9043C24.5681 24.9771 24.3482 25.0499 24.1283 25.1227C23.8351 25.0499 23.6152 24.9771 23.3953 24.9043C21.0497 23.958 18.8508 22.6478 17.0916 20.7553C16.1387 19.6635 15.3325 18.4261 14.6728 17.1159C14.3796 16.4608 14.0864 15.8785 13.8665 15.2234C13.6466 14.6411 14.0131 14.0588 14.3796 13.6221C14.7461 13.1853 15.1859 12.8942 15.699 12.6758C16.0654 12.4575 16.4319 12.603 16.7251 12.8942C17.3115 13.6221 17.8979 14.35 18.3377 15.1506C18.6309 15.6601 18.5576 16.2425 18.0445 16.6064C17.8979 16.6792 17.8246 16.752 17.678 16.8976C17.6047 16.9703 17.4581 17.0431 17.3848 17.1887C17.2382 17.4071 17.2382 17.6254 17.3115 17.8438C17.8979 19.5179 18.9974 20.8281 20.6832 21.556C20.9764 21.7016 21.1963 21.7744 21.5628 21.7744C22.0759 21.7016 22.2958 21.1193 22.6623 20.8281C23.0288 20.537 23.4686 20.537 23.9084 20.7553C24.2749 20.9737 24.6414 21.2649 25.0811 21.556C25.4476 21.8472 25.8141 22.0655 26.1806 22.3567C26.4005 22.5023 26.4738 22.8662 26.3272 23.2302ZM23.2487 17.771C23.1021 17.771 23.1754 17.771 23.2487 17.771C22.9555 17.771 22.8822 17.6254 22.8089 17.4071C22.8089 17.2615 22.8089 17.0431 22.7356 16.8976C22.6623 16.6064 22.5157 16.3152 22.2225 16.0969C22.0759 16.0241 21.9293 15.9513 21.7827 15.8785C21.5628 15.8057 21.4162 15.8057 21.1963 15.8057C20.9764 15.7329 20.9031 15.5874 20.9031 15.369C20.9031 15.2234 21.123 15.0778 21.2696 15.0778C22.4424 15.1506 23.322 15.8057 23.4686 17.1887C23.4686 17.2615 23.4686 17.4071 23.4686 17.4799C23.4686 17.6254 23.3953 17.771 23.2487 17.771ZM22.5157 14.5683C22.1492 14.4227 21.7827 14.2772 21.3429 14.2044C21.1963 14.2044 20.9764 14.1316 20.8298 14.1316C20.6099 14.1316 20.4634 13.986 20.5366 13.7676C20.5366 13.5493 20.6832 13.4037 20.9031 13.4765C21.6361 13.5493 22.2958 13.6949 22.9555 13.986C24.2749 14.6411 25.0079 15.7329 25.2277 17.1887C25.2277 17.2615 25.2277 17.3343 25.2277 17.4071C25.2277 17.5526 25.2277 17.6982 25.2277 17.9166C25.2277 17.9894 25.2277 18.0622 25.2277 18.135C25.1545 18.4261 24.6414 18.4989 24.5681 18.135C24.5681 18.0622 24.4948 17.9166 24.4948 17.8438C24.4948 17.1887 24.3482 16.5336 24.055 15.9513C23.6152 15.2962 23.1021 14.8595 22.5157 14.5683ZM26.4738 18.9356C26.2539 18.9356 26.1073 18.7173 26.1073 18.4989C26.1073 18.0622 26.034 17.6254 25.9607 17.1887C25.6675 14.8595 23.7618 12.967 21.4895 12.603C21.123 12.5302 20.7565 12.5302 20.4634 12.4575C20.2435 12.4575 19.9503 12.4575 19.877 12.1663C19.8037 11.9479 20.0236 11.7296 20.2435 11.7296C20.3168 11.7296 20.3901 11.7296 20.3901 11.7296C20.5367 11.7296 23.3953 11.8024 20.3901 11.7296C23.4686 11.8024 26.034 13.8404 26.5471 16.8976C26.6204 17.4071 26.6937 17.9166 26.6937 18.4989C26.8403 18.7173 26.6937 18.9356 26.4738 18.9356Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_413_1423'>
                      <rect width='40' height='40' rx='8' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={'#vk'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <g clip-path='url(#clip0_617_1030)'>
                    <path
                      d='M20.9825 27.0002C13.466 27.0002 9.17864 21.745 9 13.0002H12.7651C12.8888 19.4187 15.6646 22.1374 17.8632 22.6979V13.0002H21.4085V18.5358C23.5796 18.2975 25.8607 15.775 26.6302 13.0002H30.1755C29.8855 14.4393 29.3075 15.8019 28.4776 17.0027C27.6477 18.2036 26.5837 19.2169 25.3523 19.9792C26.7269 20.6758 27.941 21.6617 28.9145 22.872C29.888 24.0822 30.5988 25.4893 31 27.0002H27.0974C26.7373 25.6879 26.0054 24.5131 24.9934 23.6231C23.9814 22.7331 22.7343 22.1675 21.4085 21.9972V27.0002H20.9825Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_617_1030'>
                      <rect
                        y='0.000244141'
                        width='40'
                        height='40'
                        rx='8'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={'#telegram'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <g clip-path='url(#clip0_413_1425)'>
                    <path
                      d='M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_413_1425'>
                      <rect width='40' height='40' rx='8' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link href={'#whatsapp'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                >
                  <g clip-path='url(#clip0_413_1426)'>
                    <path
                      d='M27.9268 12.0625C25.9512 10.0937 23.3171 9 20.5366 9C14.7561 9 10.0732 13.6667 10.0732 19.4271C10.0732 21.25 10.5854 23.0729 11.4634 24.6042L10 30L15.561 28.5417C17.0976 29.3438 18.7805 29.7812 20.5366 29.7812C26.3171 29.7812 31 25.1146 31 19.3542C30.9268 16.6563 29.9024 14.0312 27.9268 12.0625ZM25.5854 23.1458C25.3659 23.7292 24.3415 24.3125 23.8293 24.3854C23.3902 24.4583 22.8049 24.4583 22.2195 24.3125C21.8537 24.1667 21.3415 24.0208 20.7561 23.7292C18.122 22.6354 16.439 20.0104 16.2927 19.7917C16.1463 19.6458 15.1951 18.4062 15.1951 17.0937C15.1951 15.7812 15.8537 15.1979 16.0732 14.9062C16.2927 14.6146 16.5854 14.6146 16.8049 14.6146C16.9512 14.6146 17.1707 14.6146 17.3171 14.6146C17.4634 14.6146 17.6829 14.5417 17.9024 15.0521C18.122 15.5625 18.6341 16.875 18.7073 16.9479C18.7805 17.0938 18.7805 17.2396 18.7073 17.3854C18.6341 17.5312 18.561 17.6771 18.4146 17.8229C18.2683 17.9687 18.1219 18.1875 18.0488 18.2604C17.9024 18.4062 17.7561 18.5521 17.9024 18.7708C18.0488 19.0625 18.561 19.8646 19.3659 20.5937C20.3902 21.4687 21.1951 21.7604 21.4878 21.9063C21.7805 22.0521 21.9268 21.9792 22.0732 21.8333C22.2195 21.6875 22.7317 21.1042 22.878 20.8125C23.0244 20.5208 23.2439 20.5938 23.4634 20.6667C23.6829 20.7396 25 21.3958 25.2195 21.5417C25.5122 21.6875 25.6585 21.7604 25.7317 21.8333C25.8049 22.0521 25.8049 22.5625 25.5854 23.1458Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_413_1426'>
                      <rect width='40' height='40' rx='8' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className={!isFormOpen ? 'popup' : 'popup popup_active'}>
        <div className='popup__container'>
          <svg
            className='popup__close'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            onClick={closeForm}
          >
            <path
              d='M6 6L12 12M12 12L18 18M12 12L6 18M12 12L18 6'
              stroke='#212529'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg>
          <h3>Обратный звонок</h3>
          <Form inModal={true} />
        </div>
      </div>
    </>
  );
};

export { Header };
