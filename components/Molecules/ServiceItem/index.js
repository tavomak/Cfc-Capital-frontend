import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/Atoms/Button';

const ServiceItem = ({
  title,
  subTitle,
  text,
  bgType,
  imageUrl,
  slug,
  order,
  buttonText,
}) => (
  <section className={`py-5 ${bgType}`}>
    <div className="container">
      <div className="row align-items-center justify-content-between text-center text-lg-start">
        <div className="col-md-6 col-lg-5">
          <h1 className="text-soft-purple fw-bolder">
            {title}
          </h1>
          <h2 className="text-dark-blue fw-bolder">
            {subTitle}
          </h2>
          <p>
            {text}
          </p>
          {slug && (
            <Link href={`/servicios/${slug}`} passHref>
              <Button
                className="btn btn-primary mt-4 text-uppercase py-2 px-4"
                text={buttonText || 'Saber más'}
              />
            </Link>
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
