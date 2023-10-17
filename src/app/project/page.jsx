import Link from 'next/link';

export const metadata = {
  title: 'GrandAvenue | О проекте',
};

const Project = () => {
  return (
    <section className='page project'>
      <img
        className='page__background'
        src='https://s3-alpha-sig.figma.com/img/1126/216a/8921542ce1002856fc01857ef73fe594?Expires=1698624000&Signature=eodjmt3Je3YtzakHffIDZeffs7orepP~NN95v9CQR19ZCg~4kzFyok9q2dpL4DMijRcXoR3e8kYss0mjuvEu7AdNpoQ9AuRla7DhpqV03nwzsJeqhT9vNEKnWesFOF6LEREggN9F6P63ougYIV5XNY4sq-GdgZg7Znx0P-aGm1q49kGDqdgcjFjBdvKfKHoG8NPGEJ41CUGqZ6twRsbNlZqKu6ofdzgvI3Ll6FvkJYmLqYyENd1BxTi9jn23qJJ2rDWiZVqxK4RSmq6TR3l~ggBQCDqOTTUVuNvjxeqn4dQzwsbe07jXanzxUcI5VAtryGQtfHC4zJuP7x8w6Yv4Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      />
      <div className='container'>
        <h1>
          <span>Ункальный проект</span>
          <span>Привлекающий внимание</span>
          <span>каждой деталью</span>
        </h1>
      </div>
    </section>
  );
};

export default Project;
