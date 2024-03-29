import Image from 'next/image';
import { shimmer, toBase64 } from '@utils/index';

const Hero = ({ image, alt, heroImages }) => (
  <section>
    <div className="d-none d-lg-block">
      <Image
        src={heroImages ? heroImages?.desktop : `/hero-${image}.jpg`}
        alt="Servicios | CFC Capital"
        layout="responsive"
        objectFit="cover"
        objectPosition="top"
        width={1280}
        height={577}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </div>
    <div className="d-lg-none">
      <Image
        src={heroImages ? heroImages.mobile : `/m-${image}.jpg`}
        alt={`${alt} | CFC Capital`}
        layout="responsive"
        objectFit="cover"
        width={700}
        height={500}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </div>
  </section>
);

export default Hero;
