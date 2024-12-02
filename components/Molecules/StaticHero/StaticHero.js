import Image from 'next/image';

const Hero = ({ image, alt, heroImages }) => (
  <section data={heroImages}>
    <div className="hidden content md:block">
      <Image
        src={heroImages ? heroImages?.desktop : `/hero-${image}.jpg`}
        alt={`${alt} | CFC Capital`}
        width={1400}
        height={635}
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
        width={700}
        height={500}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  </section>
);

export default Hero;
