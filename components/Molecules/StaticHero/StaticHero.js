import Image from 'next/image';

const Hero = ({ image, alt, heroImages }) => (
  <section>
    <div className="content hidden md:block">
      <Image
        src={heroImages ? heroImages?.desktop : `/hero-${image}.jpg`}
        alt={`${alt} | CFC Capital`}
        width={1280}
        height={577}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
    <div className="content md:hidden">
      <Image
        src={heroImages ? heroImages?.mobile : `/m-${image}.jpg`}
        alt={`${alt} | CFC Capital`}
        width={1280}
        height={577}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  </section>
);

export default Hero;
