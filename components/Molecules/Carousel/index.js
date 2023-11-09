import Image from 'next/image';
import Slider from 'react-slick';
import { shimmer, toBase64 } from '@helpers/index';

const Carousel = ({ settings, banners }) => (
  <section className="container-fluid">
    <div className="row">
      <div className="col p-0">
        {banners && banners.length && (
          <Slider {...settings}>
            {
              banners.map((item) => (
                <div key={item.id} className="position-relative">
                  <div className="d-none d-lg-block">
                    <Image
                      src={item.item_image.url}
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
                      src={item.item_image_mobile.url}
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
              ))
            }
          </Slider>
        )}
      </div>
    </div>
  </section>
);

export default Carousel;
