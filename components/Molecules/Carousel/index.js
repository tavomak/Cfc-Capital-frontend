import Image from 'next/legacy/image';
import Slider from 'react-slick';
import { shimmer, toBase64 } from '@helpers/index';
import styles from './styles.module.scss';

const Carousel = ({ settings, banners }) => (
  <section>
    {banners && banners.length && (
      <Slider {...settings}>
        {
          banners.map((item) => (
            <div key={item.id} className="position-relative">
              <div className="position-relative">
                <div className="d-none d-lg-block">
                  <Image
                    src={`${item.item_image.url}`}
                    alt={`${item.title} | CFC Capital`}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="top"
                    width={1400}
                    height={635}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
                <div className="d-lg-none">
                  <Image
                    src={`${item.item_image_mobile.url}`}
                    alt={`${item.title} | CFC Capital`}
                    layout="responsive"
                    objectFit="cover"
                    width={700}
                    height={500}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </div>
              </div>
              <div className={`${styles.sliderText}`}>
                {item.icono && (
                  <div className="d-none d-lg-block">
                    <Image
                      src={`${item.icono.url}`}
                      alt={`${item.title} | CFC Capital`}
                      width={100}
                      height={100}
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        }
      </Slider>
    )}
  </section>
);

export default Carousel;
