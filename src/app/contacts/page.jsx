'use client';

import Form from '@/src/components/Form';
import Footer from '@/src/components/Footer';
import { useTitle } from '@/src/hooks';
import PageWrapper from '@/src/components/PageWrapper';

const Contacts = () => {
  useTitle('GrandAvenue | Контакты');

  return (
    <PageWrapper>
      <section className='contacts'>
        <div className='container'>
          <h2>Хочу узнать подробности</h2>
          <div className='contacts__content'>
            <div className='contacts__text'>
              <p>
                Заполните форму обратной связи и наш специалист проконсультирует
                вас по возникшим вопросам
              </p>
            </div>
            <Form />
          </div>
          <Footer />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contacts;
