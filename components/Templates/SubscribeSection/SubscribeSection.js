import Image from 'next/image';
import FormSubscribe from '@/components/Molecules/Forms/FormSubscribe';

const SubscribeSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-medium-blue to-soft-blue text-white">
      <div className="container md:px-4 py-12 mx-auto md:flex flex-wrap items-center justify-around">
        <div className="md:w-1/2">
          <div className="flex flex-wrap items-center">
            <div className="w-1/3 p-5">
              <Image
                src="/newsletter-icon.svg"
                alt="newsletter"
                width={500}
                height={500}
                className="md:px-5"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="w-2/3 ">
              <p className="text-lg font-bold">Suscríbete a nuestro</p>
              <h3 className="text-2xl font-bold">Boletín de noticias</h3>
              <p className="mt-4">
                Te presentamos nuestra plataforma de recursos y artículos de
                interés en el desarrollo y crecimiento financiero.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 xl:w-1/3">
          <FormSubscribe />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
