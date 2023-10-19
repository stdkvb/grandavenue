import Link from 'next/link';

const Location = () => {
  return (
    <section className='page location'>
      <div className='location__map'>
        <img
          className='location__background'
          src='https://s3-alpha-sig.figma.com/img/1cd1/c950/13686c953e28f10de52a3e00aa9d2944?Expires=1698624000&Signature=pCDFIx0CU7YsQLmWPcvBQbb1EQmDic8sPWXF4JzlzLuIa36ZPr95al4vHaD6-XzF71oYtNoLDSknd4Op1Yhru~Hi8p-rXBskURdNwHeFU3HaYaeVT0N3JGwZNp7fhqUo9tPOQNJLTzWVczYUkHzz79~UPvB3MiQGa8CiBle5Ye2QysfOhLXiLvmOUNqJTqiZj587DtzAKVfjaUo~G4EXCbc1VX8Zk3bbE3EBh3dNsfv0lziAjZEZb84vlhg1pI6IxUKkFGDjWOpQW0bBh1aVtAP9qMjEkFug~ijncN5ZrnzqhD2c59t-h5VRSOlLcPOlQ31R6sZqU~e7RUG3e1qePg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        />
        <span className='location__base'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='54'
            height='74'
            viewBox='0 0 54 74'
            fill='none'
          >
            <path
              d='M0 8C0 3.58172 3.58172 0 8 0H46C50.4183 0 54 3.58172 54 8V51.2837C54 53.9225 52.6987 56.3916 50.5219 57.8832L31.5219 70.9017C28.7965 72.7691 25.2035 72.7691 22.4781 70.9017L3.47815 57.8832C1.3013 56.3916 0 53.9225 0 51.2837V8Z'
              fill='#F05A22'
            />
            <path
              d='M43.1976 20.3135C43.1976 19.0347 42.7768 17.8386 42.0474 16.8121L43.7011 15.4381L40.7668 13L39.1131 14.374C37.8777 13.7673 36.4373 13.4184 34.8982 13.4184C30.3152 13.4184 26.5996 16.5056 26.5996 20.3135C26.5996 24.1214 30.3152 27.2086 34.8982 27.2086C36.4373 27.2086 37.8768 26.859 39.1123 26.253L40.7668 27.627L43.7011 25.1889L42.0474 23.8149C42.7777 22.7884 43.1984 21.5916 43.1984 20.3128L43.1976 20.3135ZM34.899 23.7614C32.6071 23.7614 30.7493 22.2178 30.7493 20.3135C30.7493 18.4092 32.6071 16.8663 34.899 16.8663C37.1909 16.8663 39.0487 18.4099 39.0487 20.3135C39.0487 22.2171 37.1909 23.7614 34.899 23.7614Z'
              fill='white'
            />
            <path
              d='M18.2995 27.21V30.6572C20.5914 30.6572 22.4492 32.2008 22.4492 34.1051C22.4492 36.0094 20.5914 37.5529 18.2995 37.5529C16.0076 37.5529 14.1498 36.0094 14.1498 34.1051H10.001C10.001 37.913 13.7166 41.0002 18.2995 41.0002C22.8825 41.0002 26.5981 37.913 26.5981 34.1051C26.5981 30.2972 22.8825 27.21 18.2995 27.21Z'
              fill='white'
            />
            <path
              d='M27.1023 15.4381L24.168 13L22.5143 14.374C21.2789 13.7673 19.8385 13.4184 18.2994 13.4184C13.7164 13.4184 10 16.5056 10 20.3135C10 24.1214 13.7156 27.2086 18.2994 27.2086C22.8832 27.2086 26.598 24.1214 26.598 20.3135C26.598 19.0347 26.1772 17.8386 25.4478 16.8121L27.1015 15.4381H27.1023ZM18.3002 23.7614C16.0083 23.7614 14.1505 22.2178 14.1505 20.3135C14.1505 18.4092 16.0083 16.8663 18.3002 16.8663C20.5921 16.8663 22.4499 18.4099 22.4499 20.3135C22.4499 22.2171 20.5921 23.7614 18.3002 23.7614Z'
              fill='white'
            />
          </svg>
        </span>
        <Link href={'/location/point'} className='location__point'>
          <svg
            width='42'
            height='58'
            viewBox='0 0 42 58'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 6C0 2.68629 2.68629 0 6 0H36C39.3137 0 42 2.68629 42 6V40.3515C42 42.323 41.0315 44.1687 39.4091 45.2889L24.4091 55.6461C22.3572 57.0629 19.6428 57.0629 17.5909 55.6461L2.59086 45.2889C0.968516 44.1687 0 42.323 0 40.3515V6Z'
              fill='white'
            />
            <g clip-path='url(#clip0_550_612)'>
              <path
                d='M21 25.2355H21.7095C20.8212 24.0549 20.2941 22.588 20.2941 21.0002H9V25.2355H11.1176V27.3531H9V30.8826H11.1176V33.0002H12.5294V30.8826H19.5882V33.0002H21V30.8826H23.1176V27.3531H21V25.2355ZM12.5294 27.3531V25.2355H19.5882V27.3531H12.5294ZM31.4539 17.1186C31.5433 16.7725 31.5885 16.4165 31.5882 16.059C31.5882 13.7237 29.6883 11.8237 27.3529 11.8237C25.0176 11.8237 23.1176 13.7237 23.1176 16.059C23.1174 16.4165 23.1625 16.7725 23.252 17.1186C22.2643 18.1629 21.7059 19.5532 21.7059 21.0002C21.7059 23.875 23.8652 26.2548 26.6471 26.6033V22.0839L24.8438 20.8817L25.6269 19.707L26.6471 20.3872V18.1767H28.0588V21.4137L28.9715 20.501L29.9697 21.4993L28.0588 23.4102V26.6033C30.8407 26.2548 33 23.875 33 21.0002C33 19.5532 32.4416 18.1629 31.4539 17.1186Z'
                fill='#212529'
              />
              <path
                d='M26.6471 26.6031V33H28.0588V26.6031C27.5901 26.6617 27.1158 26.6617 26.6471 26.6031ZM10.8151 15.3529H18.479C19.4815 15.3529 20.2941 14.5403 20.2941 13.5378C20.2941 12.5353 19.4815 11.7227 18.479 11.7227H16.6642C16.6641 10.219 15.4452 9 13.9415 9C12.4377 9 11.2187 10.219 11.2187 11.7227H10.8151C9.81266 11.7227 9 12.5353 9 13.5378C9 14.5403 9.81266 15.3529 10.8151 15.3529Z'
                fill='#212529'
              />
            </g>
            <defs>
              <clipPath id='clip0_550_612'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(9 9)'
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
      <h1>В центре города, в сердце событий</h1>
      <p>
        Выгодное расположение на стыке географического и исторического центров
        города
      </p>
    </section>
  );
};

export default Location;
