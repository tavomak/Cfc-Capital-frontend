import Image from 'next/image';

const RowTextImage = ({
  gradientType,
  alignType,
  title,
  titleColor,
  subtitle,
  imageUrl,
  imageWidth,
  imageHeight,
}) => (
  <section className={`py-5 bg-${gradientType}-gradient`}>
    <div className="container py-lg-5">
      <div className={`row align-items-${alignType} text-center text-lg-start`}>
        <div className="col-md-6">
          <h4 className={`text-${titleColor} fw-bolder fs-2`}>
            {title}
          </h4>
          <p>
            {subtitle}
          </p>
        </div>
        <div className="col-md-6">
          <Image
            src={imageUrl}
            alt="Más que ejecutivos"
            layout="responsive"
            objectFit="contain"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
      </div>
    </div>
  </section>
);

export default RowTextImage;
