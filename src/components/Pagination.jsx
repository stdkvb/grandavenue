import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pages = [
  { href: '/project', title: 'о проекте', id: '1' },
  { href: '/location', title: 'расположение', id: '2' },
  { href: '/architecture', title: 'архитектура', id: '3' },
  { href: '/infrastructure', title: 'инфраструктура', id: '4' },
  { href: '/layouts', title: 'планировки', id: '5' },
  { href: '/parking', title: 'паркинг', id: '6' },
  { href: '/contacts', title: 'контакты', id: '7' },
];

const Pagination = ({ currentPath }) => {
  return (
    <div
      className='pagination'
      style={currentPath == '/contacts' ? { bottom: 140 } : {}}
    >
      {currentPath == '/' ? (
        <Image
          src='images/pagination.svg'
          width={4}
          height={4}
          alt='point'
          style={{ marginBottom: 8 }}
        />
      ) : (
        <Link href={'/'}>
          <Image src='images/pagination.svg' width={4} height={4} alt='point' />
        </Link>
      )}

      {pages.map((page) =>
        currentPath == page.href ? (
          <div className='pagination__active' key={page.id}>
            <span>{page.title}</span>
            <Image
              src='images/pagination-active.svg'
              width={32}
              height={73}
              alt='point'
            />
          </div>
        ) : (
          <Link href={page.href} key={page.id}>
            <Image
              src='images/pagination.svg'
              width={4}
              height={4}
              alt='point'
            />
          </Link>
        )
      )}
    </div>
  );
};

export default Pagination;
