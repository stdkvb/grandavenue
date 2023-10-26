import Link from 'next/link';
import PageWrapper from '@/src/components/business/PageWrapper';

export const metadata = {
  title: 'GrandAvenue | Политика конфиденциальности',
};

//get data
async function getData() {
  const res = await fetch('https://grandavenue.ru/api/policy', {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Policy = async () => {
  const data = await getData();
  // console.log(data);

  return (
    <PageWrapper>
      <section className='policy'>
        <div className='container'>
          <h1>{data.data.name}</h1>
          <div className='policy__content'>{data.data.content}</div>
          {/* <ol>
            <li>
              <h4>Общие положения</h4>
              <p>
                Настоящая политика обработки персональных данных составлена
                в соответствии с требованиями Федерального закона от 27.07.2006.
                № 152-ФЗ «О персональных данных» (далее — Закон о персональных
                данных) и определяет порядок обработки персональных данных
                и меры по обеспечению безопасности персональных данных,
                предпринимаемые Михайловым Иваном Сергеевичем (далее —
                Оператор).
              </p>
              <p>
                Оператор ставит своей важнейшей целью и условием осуществления
                своей деятельности соблюдение прав и свобод человека
                и гражданина при обработке его персональных данных, в том числе
                защиты прав на неприкосновенность частной жизни, личную
                и семейную тайну. Настоящая политика Оператора в отношении
                обработки персональных данных (далее — Политика) применяется
                ко всей информации, которую Оператор может получить
                о посетителях веб-сайта httpsː//thismywebsite·com.
              </p>
            </li>
            <li>
              <h4>Общие положения</h4>
              <p>
                Настоящая политика обработки персональных данных составлена
                в соответствии с требованиями Федерального закона от 27.07.2006.
                № 152-ФЗ «О персональных данных» (далее — Закон о персональных
                данных) и определяет порядок обработки персональных данных
                и меры по обеспечению безопасности персональных данных,
                предпринимаемые Михайловым Иваном Сергеевичем (далее —
                Оператор).
              </p>
            </li>
          </ol> */}

          <div className='footer__bottom'>
            <span>© 2023. Все права защищены.</span>
            <Link href={'https://wptt.ru'} className='link'>
              Разработка — вебпространство
            </Link>
            <Link href={'/policy'} className='link'>
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Policy;
