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
  ltr = false,
  type,
  backgroundImage,
  backgroundColor,
}) => (
  <section
    className={`relative py-4 lg:py-12 ${type === 'circle' ? 'bg-gradient-circle' : ''} ${styles.layerHero}`}
    style={{
      backgroundColor: `${backgroundColor || ''}`,
      backgroundImage: `${backgroundImage ? `url(${backgroundImage})` : 'none'}`,
    }}
  >
    <div className="container md:px-4 mx-auto">
      <div className="lg:flex justify-center items-center text-center text-lg-start">
        <div className={`lg:my-0 md:w-1/2 ${ltr ? 'order-2' : 'order-1'}`}>
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
            />
          )}
        </div>
        <div
          className={`my-12 lg:my-0 md:w-1/2 ${ltr ? 'order-1' : 'order-2'}`}
        >
          {title && !columnContent && !content && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(title),
              }}
              className="text-2xl font-bold mb-4 display-font text-purple"
            />
          )}
          {subtitle && !columnContent && !content && (
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(subtitle),
              }}
              className="text-xl mb-4"
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
