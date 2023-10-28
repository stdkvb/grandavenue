import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const pages = [
  { href: '/project', title: 'о проекте' },
  { href: '/location', title: 'расположение' },
  { href: '/architecture', title: 'архитектура' },
  { href: '/infrastructure', title: 'инфраструктура' },
  { href: '/layouts', title: 'планировки' },
  { href: '/parking', title: 'паркинг' },
  { href: '/contacts', title: 'контакты' },
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
