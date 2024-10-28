import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Atoms/Button';

const ZigZagSection = ({
  sectionClassName,
  itemList,
  itemClassName,
  onClick,
  buttonText = 'Saber más',
}) => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <section className={sectionClassName}>
      {itemList.map((item, index) => (
        <a
          href={item.slug}
          className={`md:flex group ${itemClassName}`}
          key={item.id}
          onClick={(e) => onClick(e, item)}
          onMouseEnter={() => setActiveItem(item.title)}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div
            className={`md:w-1/2 overflow-hidden ${(index + 1) % 2 === 0 ? 'order-last' : 'order-first'}`}
          >
            <Image
              src={item.image.url}
              alt={item.title}
              width={500}
              height={500}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transitionTimingFunction: 'var(--default-timing-function)',
                transitionDuration: 'var(--default-timing-duration)',
                transitionProperty: 'all',
              }}
              className="scale-110 group-hover:scale-100"
            />
          </div>
          <div
            className={`${item.color} md:w-1/2 flex flex-col justify-center items-center text-white p-10`}
          >
            <div className="max-w-md">
              <h2 className="text-2xl font-bold display-font">{item.title}</h2>

              <p className="my-4">{item.description}</p>

              <Button
                className={`btn btn-outline ${activeItem === item.title ? 'active' : ''}`}
                onClick={(e) => onClick(e, item)}
                text={buttonText}
              />
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default ZigZagSection;
