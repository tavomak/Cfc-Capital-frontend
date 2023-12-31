import Image from 'next/image';
import { shimmer, toBase64 } from '@utils/index';

const BannerRow = ({ banner }) => (
  <section className="container-fluid" style={{ backgroundColor: banner?.backgroundColor?.hex }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <Image
            src={banner.image.url}
            alt="Servicios | CFC Capital"
            layout="responsive"
            objectFit="contain"
            width={1.7}
            height={1}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          />
        </div>
        <div className="col-lg-6">
          <div className="text-center pt-4">
            <h1 className="text-dark-blue display-font">{banner.title}</h1>
            <p className="text-dark-blue">{banner.subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BannerRow;
