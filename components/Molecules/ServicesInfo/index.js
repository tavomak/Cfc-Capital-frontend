import Image from 'next/legacy/image';
import router from 'next/router';
import Divider from '@components/Atoms/Divider';

const ServicesInfo = ({ services }) => {
  const handleClickService = (e, slug) => {
    e.preventDefault();
    if (slug === 'factoring-web') {
      window.open('/CFC-PasoaPaso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${slug}`);
    }
  };
  return (
    <section className="container">
      {services && services.map((item, index) => (
        <div className="row" key={item.slug}>
          <div className={`col-md-6 px-0 ${((index + 1) % 2 === 0) ? 'order-md-2' : 'order-md-1'}`}>
            <Image
              src={`/${item.slug}-services.png`}
              alt={item.title}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={16}
              height={12}
            />
          </div>
          <div className={`col-md-6 px-0 ${((index + 1) % 2 === 0) ? 'order-md-1' : 'order-md-2'}`} style={{ background: item.color }}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="px-5">
                <h1 className="text-white display-font">{item.title}</h1>
                <Divider theme="light" className="py-2" />
                <p
                  className="text-white py-4"
                >
                  {item.detail}
                </p>
                <a
                  href={`/servicios/${item.slug}`}
                  className="btn btn-secondary display-font mb-5"
                  rel="noreferrer"
                  onClick={(e) => handleClickService(e, item.slug)}
                >
                  ¿Cómo funciona?
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesInfo;
