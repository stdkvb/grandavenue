'use client';

import Form from '@/src/components/Form';
import Footer from '@/src/components/Footer';

const Contacts = () => {
  return (
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
  );
};

export default Contacts;
