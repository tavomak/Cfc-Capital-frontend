import Image from 'next/image';
import FormSubscribe from '@/components/Molecules/Forms/FormSubscribe';

const SubscribeSection = () => (
  <section className="text-white bg-gradient-to-l from-medium-blue to-soft-blue">
    <div className="container items-center justify-around px-4 py-12 mx-auto sm:py-36 lg:flex">
      <div className="lg:w-1/2">
        <div className="gap-4 md:flex">
          <div className="w-1/3">
            <Image
              src="/newsletter-icon.svg"
              alt="newsletter"
              width={500}
              height={500}
              className="mb-8 md:mb-0 lg:px-4"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
          <div className="lg:w-2/3 ">
            <p className="text-base md:text-3xl font-regular">
              Suscríbete a nuestro
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">
              Boletín de noticias
            </h3>
            <p className="mt-4 text-sm font-semibold md:text-2xl">
              Te presentamos nuestra plataforma de recursos y artículos de
              interés en el desarrollo y crecimiento financiero.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto lg:mx-0 md:w-1/2 xl:w-1/3">
        <FormSubscribe />
      </div>
    </div>
  </section>
);

export default SubscribeSection;
