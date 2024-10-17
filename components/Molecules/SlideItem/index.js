import Image from 'next/image';
import { shimmer, toBase64 } from '@utils/index';

const SlideItem = ({
  content,
  children,
}) => (
  <section className="container-fluid px-0">
    {!content.title ? (
      <div className="row">
        <div className="position-relative">
          <div className="d-none d-lg-block">
            <Image
              src={content.item_image.url}
              alt={`${content.title} | CFC Capital`}
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
              src={content.item_image_mobile.url}
              alt={`${content.title} | CFC Capital`}
              layout="responsive"
              objectFit="cover"
              width={700}
              height={500}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
        </div>
      </div>
    ) : (
      { children }
    )}
  </section>

);

export default SlideItem;
