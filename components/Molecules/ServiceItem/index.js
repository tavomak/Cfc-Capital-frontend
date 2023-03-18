import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/Atoms/Button';

const ServiceItem = ({
  title,
  subtitle,
  shortDescription,
  bgType,
  imageUrl,
  slug,
  order,
  buttonText,
  componentType,
  noBtn,
}) => (
  <section className={`py-5 ${bgType}`}>
    <div className="container">
      <div className="row align-items-center justify-content-between text-center text-lg-start">
        <div className="col-md-6 col-lg-5">
          {componentType ? (
            <>
              {title && (
                <div dangerouslySetInnerHTML={{ __html: title }} />
              )}
              {subtitle && (
                <div dangerouslySetInnerHTML={{ __html: subtitle }} />
              )}
              {shortDescription && (
                <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
              )}
            </>
          ) : (
            <>
              <h1 className="text-soft-purple fw-bolder">
                {title}
              </h1>
              <h2 className="text-dark-blue fw-bolder">
                {subtitle}
              </h2>
              <p>
                {shortDescription}
              </p>
            </>
          )}
          {!noBtn && slug && slug !== 'factoring-web' && (
            <Link href={`/servicios/${slug}`} passHref>
              <Button
                className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                text={buttonText || 'Saber más'}
              />
            </Link>
          )}
          {!noBtn && slug && slug === 'factoring-web' && (
            <a href="/CFC-PasoaPaso.pdf" className="btn btn-primary mt-4 text-uppercase py-2 px-4" target="_blanc">Saber más</a>
          )}
        </div>
        <div className={`col-md-6 order-first order-lg-${order} mb-4 mb-lg-0`}>
          <Image
            src={imageUrl}
            alt="Más que ejecutivos"
            layout="responsive"
            objectFit="contain"
            width={930}
            height={660}
          />
        </div>
      </div>
    </div>
  </section>
);

export default ServiceItem;
