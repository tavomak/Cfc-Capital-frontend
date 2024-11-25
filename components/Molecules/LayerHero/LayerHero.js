import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import styles from './styles.module.css';

const LayerHero = ({
  title,
  subtitle,
  columnContent,
  content,
  children,
  imageUrl,
  rtl = true,
  type,
  backgroundImage,
  backgroundColor,
}) => (
  <section
    className={`relative pt-4 lg:pt-12 ${type === 'circle' ? 'bg-gradient-circle' : ''} ${styles.layerHero}`}
    style={{
      '--rtl': `${rtl ? 'right' : 'left'}`,
      backgroundColor: `${backgroundColor || 'none'}`,
      backgroundImage: `${backgroundImage ? `url(${backgroundImage})` : 'none'}`,
    }}
  >
    <div className="container mx-auto md:px-4">
      <div className="items-center justify-around text-center md:flex text-lg-start">
        <div
          className={`lg:my-0 w-full md:w-1/2 2xl:w-3/6 ${rtl ? 'order-2' : 'order-1'}`}
        >
          {children || (
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxHeight: '400px',
              }}
              priority
            />
          )}
        </div>
        <div
          className={`my-12 w-full lg:my-0 md:w-1/2 2xl:w-2/6 ${rtl ? 'order-1' : 'order-2'}`}
        >
          {title && !columnContent && !content && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(title),
              }}
              className="mb-4 text-2xl font-bold display-font text-purple"
            />
          )}
          {subtitle && !columnContent && !content && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(subtitle),
              }}
              className="mb-4 text-xl"
            />
          )}
          {columnContent ||
            (content && (
              <div
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(content),
                }}
              />
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default LayerHero;
