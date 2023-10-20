import Link from 'next/link';

const Layouts = () => {
  return (
    <section className='layouts'>
      <div className='container container_narrow'>
        <div className='layouts__title'>
          <h2>Планировки</h2>
          <p>
            Более N видов планировок бизнес-класса, включая квартиры с террасами
            и балконами
          </p>
        </div>
        <div className='layouts__filter'>
          <span className='layouts__subtitle'>Тип квартиры:</span>
          <div className='layouts__filter-list'>
            <span className='button button_secondary button_small active'>
              Студия
            </span>
            <span className='button button_secondary button_small'>1-к.</span>
            <span className='button button_secondary button_small'>2-к.</span>
            <span className='button button_secondary button_small'>3-к.</span>
            <span className='button button_secondary button_small'>4-к.</span>
          </div>
        </div>
        <div className='layouts__content'>
          <div className='layouts__column'>
            <div className='layouts__image'>
              <img src='https://s3-alpha-sig.figma.com/img/2f51/a189/e034ef0364d46c95048a54a67549285c?Expires=1698624000&Signature=Eq4DUB7G2tRn4CnAunKtF-pa3DKTn3zPrOr22yfoKBmP6c5kxz~D5iXYG8zDj6dXb-0zqJYDacQ9MtNhipklPmAwf860icTfbX0iwiTyMshKXkeihuc9G-1dirgo1TehxLZbkwohStXP4Oz10GPkItAwmTbH1fK0Pn2OXA7mWzxeAlP~FH6RUdgCc9P1czmT0Mbb625lU6r0I-wAXKKKKRr-GJ2-udgwTS3twAqiUsuw8vkOft71BgmKI3CQZ~LfZ6nq7fcLwhY9FnhYJ8B3-X2kaoPcz4C-rf3Q~EU-hS8Z6g5wdz-m3-ADFUudK9mil8Yvlvb4OixatxcRd3aIfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
              <svg
                className='layouts__zoom'
                xmlns='http://www.w3.org/2000/svg'
                width='150'
                height='150'
                viewBox='0 0 150 150'
                fill='none'
              >
                <g opacity='0.7'>
                  <path
                    d='M43.75 62.5H62.5M62.5 62.5H81.25M62.5 62.5V43.75M62.5 62.5V81.25M93.75 93.75L131.25 131.25M62.5 106.25C38.3375 106.25 18.75 86.6625 18.75 62.5C18.75 38.3375 38.3375 18.75 62.5 18.75C86.6625 18.75 106.25 38.3375 106.25 62.5C106.25 86.6625 86.6625 106.25 62.5 106.25Z'
                    stroke='white'
                    stroke-width='6'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </g>
              </svg>
            </div>
            <div className='layouts__views'>
              <span className='layouts__subtitle'>Вид:</span>
              <span className='button button_secondary button_small active'>
                схема
              </span>
              <span className='button button_secondary button_small'>
                сверху
              </span>
              <span className='button button_secondary button_small'>
                сбоку
              </span>
            </div>
          </div>
          <div className='layouts__column'>
            <div className='layouts__text'>
              <h3>Однокомнатная с солнечной спальней</h3>
              <div className='layouts__info'>
                <div className='layouts__info-item'>
                  <span className='layouts__subtitle'>Срок сдачи:</span>
                  <span>1 кв. 2025</span>
                </div>
                <div className='layouts__info-item'>
                  <span className='layouts__subtitle'>Площадь:</span>
                  <span>21,3 м2</span>
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
              <p>
                Классическая планировка с одной комнатой. В кухне — встречаетесь
                с близкими за небольшим столом, а в спальне вы спите как сурок
                до самой весны.
              </p>
            </div>
            <div className='layouts__buttons'>
              <span className='button'>Узнать стоимость</span>
              <Link href={''} className='button button_secondary'>
                3D-тур
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layouts;
