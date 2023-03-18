import Image from 'next/image';

const GradientSection = ({
  title, subtitle, content, children, imageUrl, classFirstCol, classSecondCol, type, componentType,
}) => (
  <section className={`py-5 ${type === 'circle' ? 'bg-gradient-circle' : 'bg-secondary-gradient'}`}>
    <div className="container">
      <div className="row justify-content-around align-items-center text-center text-lg-start">
        <div className={classFirstCol}>
          {!componentType ? (
            <>
              {title}
              {subtitle}
              {content}
            </>
          ) : (
            <>
              {title && (
                <div dangerouslySetInnerHTML={{ __html: title }} />
              )}
              {subtitle && (
                <div dangerouslySetInnerHTML={{ __html: subtitle }} />
              )}
              {content && (
                <div dangerouslySetInnerHTML={{ __html: content }} />
              )}
            </>
          )}
        </div>
        <div className={classSecondCol}>
          {children || (
            <Image
              src={imageUrl}
              alt={title}
              layout="responsive"
              objectFit="contain"
              width={800}
              height={578}
            />
          )}
        </div>
      </div>
    </div>
  </section>
);

export default GradientSection;
