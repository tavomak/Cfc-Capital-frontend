import { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/Atoms/Card';
import Button from '@/components/Atoms/Button';
import useViewport from '@/hooks/useViewport';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { MdCheck } from 'react-icons/md';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'deevr9k54',
  },
});

const getDataFromName = (name) => {
  const data = [
    {
      name: 'Minefact',
      gradientClass: 'from-[#432694] to-[#9777EE]',
      color: '#432694',
      background: '#D4BFFE',
      video: cld.video('Minefact-cuadrado_rionti'),
    },
    {
      name: 'Emprendefact',
      gradientClass: 'from-[#004559] to-[#1D89A8]',
      color: '#004559',
      background: '#C6FFFF',
      video: cld.video('EmprendeFact-cuadrado_fdbcuz'),
    },
    {
      name: 'Publifact',
      gradientClass: 'from-[#013DA6] to-[#2A83E5]',
      color: '#013DA6',
      background: '#83BEFF',
      video: cld.video('PubliFact-SIN-Sub_d0p9lw'),
    },
  ];
  return data.find((item) => item.name === name);
};

const ProductSection = ({ data, index, setService, handleClick }) => {
  const product = getDataFromName(data.title);
  const viewportWidth = useViewport();
  const isPair = (index + 1) % 2 === 0;
  const sliceItem = viewportWidth >= 768 ? 3 : 4;

  const handleClickButton = (currentService) => {
    setService(currentService);
    handleClick();
  };
  return (
    <section
      className={`py-6 ${isPair ? 'md:py-20' : ''}`}
      id={data.title.toLowerCase()}
    >
      <article
        className="pt-14 product-article"
        style={{
          '--product-background': `linear-gradient(90deg, ${isPair ? `white 40%, ${product.background}` : `${product.background} 0%, white 40%`})`,
        }}
      >
        <div className="container mx-auto px-4 md:flex items-center justify-between gap-20">
          <div className={`md:w-1/2 ${isPair ? 'order-last' : 'order-first'} `}>
            <ul>
              <li className="mb-10 text-center md:text-left">
                <Image
                  src={`/${data.title}-logo.svg`}
                  alt={data.title}
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </li>
              <li className="mb-2">
                <h2
                  className="text-2xl display-font font-bold"
                  style={{ color: product.color }}
                >
                  {data.subtitle}
                </h2>
              </li>
              <li className="mb-10">
                <p>{data.details}</p>
              </li>
            </ul>

            {/* Wrapper: relative context for arrow + logo outside blob */}
            <div className="relative mt-2 md:pr-10">
              {/* Blob */}
              <div className="py-4 md:pt-8 md:pb-14">
                <ul className="space-y-3 md:max-w-80 flex flex-wrap md:flex-col">
                  {data.services.map((item) => (
                    <li key={item.title} className="w-100">
                      <ul className="flex gap-4">
                        <li
                          className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: product.color }}
                        >
                          <Image
                            src={`/${item.icon}.svg`}
                            alt={data.title}
                            width={18}
                            height={18}
                            className="w-7 h-7 object-contain"
                          />
                        </li>
                        <li className="bg-white rounded-xl px-4 py-3 shadow-xl w-100 min-w-64">
                          <p
                            className="font-semibold display-font text-sm"
                            style={{ color: product.color }}
                          >
                            {item.title}
                          </p>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-start mt-6 md:pl-16">
                  <Button
                    className="inline-block px-8 py-3 rounded-full font-semibold display-font text-white text-sm"
                    style={{ backgroundColor: product.color }}
                    onClick={() => handleClickButton(data.title)}
                  >
                    Hablar con un asesor
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${isPair ? 'order-2' : 'order-1'} md:w-1/2`}>
            <div>
              <AdvancedVideo
                cldVid={product.video}
                controls
                autoPlay
                loop
                muted
                playsInline
                poster="/hero-servicios.jpg"
                className="aspect-square object-contain w-full h-full shadow-xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </article>

      <Card
        containerClassName="container mx-auto px-4 lg:px-20 py-10"
        cardClassName={`relative md:flex gap-10 items-center py-4 px-4 md:px-10 lg:px-20 shadow-xl ${product.gradientClass} bg-gradient-to-tr`}
      >
        {/* CFC Capital logo - top right */}
        <div className="hidden md:block absolute top-6 right-8">
          <Image
            src="/cfc-footer-logo.svg"
            alt="CFC Capital"
            width={90}
            height={40}
            className="object-contain"
          />
        </div>

        <div className="md:w-1/2 text-white py-6">
          <Image
            src={`/${data.title}-logo-white.svg`}
            alt={data.title}
            width={300}
            height={200}
            className="object-contain"
          />
          <h3 className="my-6 font-bold display-font text-2xl">
            {data.subtitle}
          </h3>
          <ul>
            {data.services.slice(0, sliceItem).map((item) => (
              <li key={item.title} className="mb-4 flex gap-3 items-start">
                <div
                  className="shrink-0 rounded-full flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    background: 'rgba(255,255,255,0.25)',
                  }}
                >
                  <MdCheck
                    className="text-white"
                    size={28}
                    style={{ color: product.color }}
                  />
                </div>
                <div>
                  <p className="font-bold display-font">{item.title}</p>
                  <p className="text-sm opacity-90 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Button
            className="btn btn-outline px-8 py-2 mt-6"
            onClick={() => handleClickButton(data.title)}
          >
            Hablar con un asesor
          </Button>
        </div>

        <div className="hidden md:block md:w-1/2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={`/${data.title}-bg.jpg`}
              alt={data.title}
              width={300}
              height={200}
              className="w-full"
            />
          </div>
          {data.services.slice(3, 4).map((item) => (
            <div
              key={item.title}
              className="mt-4 text-white flex gap-3 items-start"
            >
              <div
                className="shrink-0 rounded-full flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  background: 'rgba(255,255,255,0.25)',
                }}
              >
                <MdCheck
                  className="text-white"
                  size={28}
                  style={{ color: product.color }}
                />
              </div>
              <div>
                <p className="font-bold display-font">{item.title}</p>
                <p className="text-sm opacity-90 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <hr className="hidden md:mt-10 container mx-auto px-4" />
    </section>
  );
};

export default ProductSection;
