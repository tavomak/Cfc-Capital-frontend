import Image from 'next/image';
// import markdownToHtml from '@lib/markdownToHtml';
import { shimmer, toBase64 } from '@helpers/index';

import Divider from '@components/Atoms/Divider';

const Service = ({ services, name }) => (
  <section className="container" id={`que-es-${name?.toLowerCase()}`}>
    {services && services.map((item, index) => (
      <div className="row" key={item.title}>
        <div className={`col-md-6 px-0 ${((index + 1) % 2 === 0) ? 'order-md-2' : 'order-md-1'}`}>
          <Image
            src={item.image.url}
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
        <div className={`col-md-6 px-0 ${((index + 1) % 2 === 0) ? 'order-md-1' : 'order-md-2'} ${item.color}`}>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
            <div className="px-5">
              <h1 className="text-white display-font mt-5">{item.title}</h1>
              <Divider theme="light" className="py-2" />
              <p
                className="text-white py-4"
              >
                {item.content.markdown}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Service;
