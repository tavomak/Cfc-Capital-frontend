import Image from 'next/image';
import router from 'next/router';
import Divider from '@components/Atoms/Divider';
import { shimmer, toBase64 } from '@helpers/index';

const ServicesInfo = ({ services }) => {
  const handleClickService = (e, slug) => {
    e.preventDefault();
    if (slug === 'factoring-web') {
      window.open('/cfc_paso_a_paso.pdf', '_ blank');
    } else {
      router.push(`/servicios/${slug}`);
    }
  };
  return (
    <section className="container">
      {services.map((item, index) => (
        <div className="row" key={item.id}>
          <div className={`col-md-6 px-0 ${((index + 1) % 2 === 0) ? 'order-md-2' : 'order-md-1'}`}>
            <Image
              src={`/${item.slug}-services.png`}
              alt={item.title}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={160}
              height={120}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
          <div className={`col-md-6 px-0  bg-${item.slug} ${((index + 1) % 2 === 0) ? 'order-md-1' : 'order-md-2'}`}>
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="px-5">
                <h1 className="text-white display-font pt-5">{item.title}</h1>
                <Divider theme="light" className="py-2" />
                <p
                  className="text-white py-4"
                >
                  {item.description}
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
